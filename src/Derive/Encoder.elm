module Derive.Encoder exposing (generateEncoder)

import Derive.Type exposing (Module, ModuleMember(..), NameAndType, Type(..), TypeAliasDef)
import Derive.Util exposing (Error, alphabets, asList, concatResults, derivedModuleName, indent, node, nodeValue, unlines)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Module exposing (Module)
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Type exposing (Type)
import Elm.Syntax.TypeAnnotation exposing (TypeAnnotation(..))
import Result


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
                            functionImplementation : FunctionImplementation
                            functionImplementation =
                                { name = node <| "encode" ++ nodeValue aliasDecl.name
                                , arguments = [ node <| VarPattern "value" ]
                                , expression = node encoder
                                }

                            function : Function
                            function =
                                { documentation = Nothing
                                , signature = Nothing
                                , declaration = node functionImplementation
                                }
                        in
                        [ FunctionDeclaration function
                        ]
                    )

        CustomTypeDeclaration customTypeDecl ->
            -- let
            --     typeName =
            --         nodeValue <| customTypeDecl.name
            --     encoderName : String
            --     encoderName =
            --         "encode" ++ typeName
            --     variants =
            --         List.map
            --             (\constructorNode ->
            --                 let
            --                     constructor =
            --                         nodeValue constructorNode
            --                 in
            --                 if List.isEmpty constructor.arguments then
            --                     constructor.name ++ " -> Json.Encode.string " ++ "\"" ++ constructor.name ++ "\""
            --                 else
            --                     let
            --                         abc =
            --                             alphabets (List.length constructor.arguments)
            --                         vars =
            --                             abc
            --                                 |> List.intersperse ' '
            --                                 |> String.fromList
            --                         fields =
            --                             List.indexedMap
            --                                 (\i field ->
            --                                     let
            --                                         c =
            --                                             Char.fromCode (97 + i)
            --                                         encoder : String
            --                                         encoder =
            --                                             case generateEncoderFromTypeAnnotation file field of
            --                                                 Err err ->
            --                                                     "<ERROR>"
            --                                                 Ok str ->
            --                                                     str
            --                                     in
            --                                     "(\"" ++ String.fromChar c ++ "\", " ++ encoder ++ " " ++ String.fromChar c ++ ")"
            --                                 )
            --                                 constructor.arguments
            --                                 |> (::) ("(\"tag\", Json.Encode.string \"" ++ constructor.name ++ "\")")
            --                                 |> asList
            --                     in
            --                     constructor.name ++ " " ++ vars ++ " -> Json.Encode.object\n" ++ indent fields
            --             )
            --             customTypeDecl.constructors
            -- in
            -- Ok <|
            --     unlines
            --         [ encoderName ++ " : " ++ typeName ++ " -> Json.Encode.Value"
            --         , encoderName ++ " variant"
            --         , indent "= case value of"
            --         , indent <| indent <| unlines variants
            --         ]
            Ok []

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
        -- RecordType record ->
        --     let
        --         field : NameAndType -> Result Error String
        --         field entry =
        --             generateEncoderFromTypeAnnotation file entry.typeName
        --                 |> Result.map
        --                     (\k ->
        --                         "(\"" ++ entry.name ++ "\", " ++ k ++ " value." ++ entry.name ++ ")"
        --                     )
        --     in
        --     concatResults field record
        --         |> Result.map (\fields -> "(\\value -> Json.Encode.object \n" ++ (indent <| indent <| asList fields) ++ ")")
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
