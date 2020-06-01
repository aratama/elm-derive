module Derive.Encoder exposing (generateEncoder)

import Derive.Type exposing (Module, ModuleMember(..), NameAndType, Type(..), TypeAliasDef)
import Derive.Util exposing (Error, alphabets, asList, concatResults, derivedModuleName, indent, node, nodeValue, unlines)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Module exposing (Module)
import Elm.Syntax.ModuleName exposing (ModuleName)
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (Type, ValueConstructor)
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))
import Result


functionAnnotation : ( ModuleName, String ) -> ( ModuleName, String ) -> TypeAnnotation
functionAnnotation from to =
    FunctionTypeAnnotation (node <| Typed (node from) []) (node <| Typed (node to) [])


generateEncoder : File -> Result Error (List Declaration)
generateEncoder file =
    concatResults (\node -> generateEncoderFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateEncoderFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateEncoderFromDeclaration file declaration =
    case declaration of
        AliasDeclaration aliasDecl ->
            generateEncoderFromTypeAnnotation file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map
                    (\encoder ->
                        let
                            typeName : String
                            typeName =
                                nodeValue aliasDecl.name

                            name =
                                "encode" ++ typeName

                            functionImplementation : FunctionImplementation
                            functionImplementation =
                                { name = node <| name
                                , arguments = []
                                , expression = node encoder
                                }

                            signature : Signature
                            signature =
                                { name = node name
                                , typeAnnotation = node <| functionAnnotation ( [], typeName ) ( [ "Json", "Encode" ], "Value" )
                                }

                            function : Function
                            function =
                                { documentation = Nothing
                                , signature = Just <| node signature
                                , declaration = node functionImplementation
                                }
                        in
                        [ FunctionDeclaration function ]
                    )

        CustomTypeDeclaration customTypeDecl ->
            let
                typeName : String
                typeName =
                    nodeValue <| customTypeDecl.name

                encoderName : String
                encoderName =
                    "encode" ++ typeName

                variants : List (Result Error Case)
                variants =
                    List.map
                        (\constructorNode ->
                            let
                                constructor : ValueConstructor
                                constructor =
                                    nodeValue constructorNode

                                abc : List String
                                abc =
                                    alphabets (List.length constructor.arguments)
                                        |> List.map String.fromChar

                                first : Expression
                                first =
                                    TupledExpression [ node <| Literal "tag", node <| Literal (nodeValue constructor.name) ]

                                fields : Result Error (List Expression)
                                fields =
                                    constructor.arguments
                                        |> List.indexedMap (\i fieldNode -> ( i, fieldNode ))
                                        |> concatResults
                                            (\( i, fieldNode ) ->
                                                let
                                                    field : TypeAnnotation
                                                    field =
                                                        nodeValue fieldNode
                                                in
                                                generateEncoderFromTypeAnnotation file field
                                                    |> Result.map
                                                        (\encoder ->
                                                            let
                                                                c : String
                                                                c =
                                                                    String.fromChar (Char.fromCode (97 + i))
                                                            in
                                                            TupledExpression
                                                                [ node <| Literal c
                                                                , node <| Application [ node encoder, node <| FunctionOrValue [] c ]
                                                                ]
                                                        )
                                            )
                                        |> Result.map ((::) first)

                                constructorCase : Result Error Case
                                constructorCase =
                                    fields
                                        |> Result.map
                                            (\fs ->
                                                let
                                                    xs : List (Node Expression)
                                                    xs =
                                                        List.map node fs

                                                    h : Node Expression
                                                    h =
                                                        node (FunctionOrValue [ "Json", "Encode" ] "object")
                                                in
                                                ( node <| NamedPattern { moduleName = [], name = nodeValue constructor.name } (List.map (\c -> node <| VarPattern c) abc)
                                                , node <| Application [ h, node <| ListExpr xs ]
                                                )
                                            )
                            in
                            constructorCase
                        )
                        customTypeDecl.constructors
            in
            concatResults identity variants
                |> Result.map
                    (\cases ->
                        let
                            signature : Signature
                            signature =
                                { name = node encoderName
                                , typeAnnotation = node <| functionAnnotation ( [], typeName ) ( [ "Json", "Encode" ], "Value" )
                                }
                        in
                        [ FunctionDeclaration
                            { documentation = Nothing
                            , signature = Just <| node signature
                            , declaration =
                                node <|
                                    { name = node <| encoderName
                                    , arguments = [ node <| VarPattern "value" ]
                                    , expression =
                                        node <|
                                            CaseExpression
                                                { expression = node <| FunctionOrValue [] "value"
                                                , cases = cases
                                                }
                                    }
                            }
                        ]
                    )

        _ ->
            Ok []


generateEncoderFromTypeAnnotation : File -> TypeAnnotation -> Result Error Expression
generateEncoderFromTypeAnnotation file typeAnnotation =
    case typeAnnotation of
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (FunctionOrValue [ "Json", "Encode" ] "bool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (FunctionOrValue [ "Json", "Encode" ] "int")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (FunctionOrValue [ "Json", "Encode" ] "float")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (FunctionOrValue [ "Json", "Encode" ] "string")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateEncoderFromTypeAnnotation file content
                |> Result.map
                    (\encoder -> Application [ node <| FunctionOrValue [ "Json", "Encode" ] "list", node encoder ])

        Typed (Node _ ( [], "Dict" )) [ Node _ content ] ->
            generateEncoderFromTypeAnnotation file content
                |> Result.map
                    (\encoder -> Application [ node <| FunctionOrValue [ "Json", "Encode" ] "dict", node <| FunctionOrValue [] "identity", node encoder ])

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateEncoderFromTypeAnnotation file content
                |> Result.map
                    (\encoder -> Application [ node <| FunctionOrValue [ "Json", "Encode" ] "maybe", node encoder ])

        -- TypeRef typeName [] ->
        --     let
        --         filtered =
        --             List.filter
        --                 (\declarationNode ->
        --                     let
        --                         declaration : Declaration
        --                         declaration =
        --                             nodeValue declarationNode
        --                     in
        --                     case declaration of
        --                         AliasDeclaration ta ->
        --                             nodeValue ta.name == typeName
        --                         CustomTypeDeclaration tm ->
        --                             nodeValue tm.name == typeName
        --                 )
        --                 file.declarations
        --     in
        --     case filtered of
        --         [] ->
        --             Err <| [ "Unknown Data Type: `" ++ typeName ++ "`" ]
        --         _ ->
        --             Ok <| FunctionOrValue (derivedModuleName file) ("encode" ++ typeName)
        Record record ->
            let
                field : Node RecordField -> Result Error Expression
                field recordFieldNode =
                    let
                        -- recordField : RecordField
                        ( Node _ name, Node _ fieldTypeAnnotation ) =
                            nodeValue recordFieldNode
                    in
                    generateEncoderFromTypeAnnotation file fieldTypeAnnotation
                        |> Result.map
                            (\k ->
                                TupledExpression
                                    [ node <| Literal name
                                    , node <|
                                        Application
                                            [ node k
                                            , node <| RecordAccess (node <| FunctionOrValue [] "value") (node name)
                                            ]
                                    ]
                            )
            in
            concatResults field record
                |> Result.map
                    (\fields ->
                        LambdaExpression
                            { args = [ node <| VarPattern "value" ]
                            , expression =
                                node <|
                                    Application
                                        [ node <| FunctionOrValue [ "Json", "Encode" ] "object"
                                        , node <| ListExpr <| List.map node fields
                                        ]
                            }
                    )

        _ ->
            Err <| [ "Unsupported Data Type at generateEncoderFromType" ]



-- generateEncoderFromType : Module -> Type -> Result Error String
-- generateEncoderFromType mod target =
--     case target of
--         TypeRef "Int" [] ->
--             Ok "Json.Encode.int"
--         TypeRef "String" [] ->
--             Ok "Json.Encode.string"
--         TypeRef "Float" [] ->
--             Ok "Json.Encode.float"
--         TypeRef "Bool" [] ->
--             Ok "Json.Encode.bool"
--         TypeRef "Dict" [ TypeRef "String" [], content ] ->
--             generateEncoderFromType mod content |> Result.map (\t -> "(Json.Encode.dict identity " ++ t ++ ")")
--         TypeRef "List" [ contntType ] ->
--             generateEncoderFromType mod contntType |> Result.map (\t -> "(Json.Encode.list " ++ t ++ ")")
--         TypeRef "Maybe" [ contntType ] ->
--             generateEncoderFromType mod contntType |> Result.map (\t -> "(Maybe.withDefault Json.Encode.null << Maybe.map " ++ t ++ ")")
--         TypeRef typeName [] ->
--             let
--                 filtered =
--                     List.filter
--                         (\member ->
--                             case member of
--                                 TypeAliasMember ta ->
--                                     ta.name == typeName
--                                 TypeMember tm ->
--                                     tm.name == typeName
--                         )
--                         mod.members
--             in
--             case filtered of
--                 [] ->
--                     Err <| [ "Unknown Data Type: `" ++ typeName ++ "`" ]
--                 _ ->
--                     Ok <| "encode" ++ typeName
--         RecordType record ->
--             let
--                 field : NameAndType -> Result Error String
--                 field entry =
--                     generateEncoderFromType mod entry.typeName
--                         |> Result.map
--                             (\k ->
--                                 "(\"" ++ entry.name ++ "\", " ++ k ++ " value." ++ entry.name ++ ")"
--                             )
--             in
--             concatResults field record
--                 |> Result.map (\fields -> "(\\value -> Json.Encode.object \n" ++ (indent <| indent <| asList fields) ++ ")")
--         _ ->
--             Err <| [ "Unsupported Data Type at generateEncoderFromType" ]
-- generateEncoderFromModuleMember : Module -> ModuleMember -> Result Error String
-- generateEncoderFromModuleMember mod member =
--     case member of
--         TypeAliasMember typeAlias ->
--             generateEncoderFromTypeAlias mod typeAlias
--         TypeMember typeMember ->
--             let
--                 encoderName =
--                     "encode" ++ typeMember.name
--                 variants =
--                     List.map
--                         (\variant ->
--                             if List.isEmpty variant.fields then
--                                 variant.name ++ " -> Json.Encode.string " ++ "\"" ++ variant.name ++ "\""
--                             else
--                                 let
--                                     abc =
--                                         alphabets (List.length variant.fields)
--                                     vars =
--                                         abc
--                                             |> List.intersperse ' '
--                                             |> String.fromList
--                                     fields =
--                                         List.indexedMap
--                                             (\i field ->
--                                                 let
--                                                     c =
--                                                         Char.fromCode (97 + i)
--                                                     encoder : String
--                                                     encoder =
--                                                         case generateEncoderFromType mod field of
--                                                             Err err ->
--                                                                 "<ERROR>"
--                                                             Ok str ->
--                                                                 str
--                                                 in
--                                                 "(\"" ++ String.fromChar c ++ "\", " ++ encoder ++ " " ++ String.fromChar c ++ ")"
--                                             )
--                                             variant.fields
--                                             |> (::) ("(\"tag\", Json.Encode.string \"" ++ variant.name ++ "\")")
--                                             |> asList
--                                 in
--                                 variant.name ++ " " ++ vars ++ " -> Json.Encode.object\n" ++ indent fields
--                         )
--                         typeMember.variants
--             in
--             Ok <|
--                 unlines
--                     [ encoderName ++ " : " ++ typeMember.name ++ " -> Json.Encode.Value"
--                     , encoderName ++ " variant"
--                     , indent "= case value of"
--                     , indent <| indent <| unlines variants
--                     ]
-- generateEncoderFromTypeAlias : Module -> TypeAliasDef -> Result Error String
-- generateEncoderFromTypeAlias mod alias =
--     let
--         encoderName =
--             "encode" ++ alias.name
--         result : Result Error String
--         result =
--             generateEncoderFromType mod alias.body
--     in
--     case result of
--         Err errors ->
--             Err errors
--         Ok str ->
--             Ok <|
--                 unlines
--                     [ encoderName ++ " : " ++ alias.name ++ " -> Json.Encode.Value"
--                     , encoderName ++ "\n" ++ indent "= " ++ str
--                     ]
-- generateEncoder : Module -> Result Error String
-- generateEncoder mod =
--     concatResults (generateEncoderFromModuleMember mod) mod.members
--         |> Result.map
--             (\members ->
--                 unlines
--                     [ "-- encoders -------------------------------------------------------------"
--                     , ""
--                     , String.join "\n\n" members
--                     ]
--             )
