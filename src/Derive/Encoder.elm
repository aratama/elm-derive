module Derive.Encoder exposing (generateEncoder)

import Derive.Type exposing (ModuleMember(..), Type(..))
import Derive.Util exposing (Error, alphabets, concatResults, node, nodeValue)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.ModuleName exposing (ModuleName)
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
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

        Typed (Node _ ( [], moduleMemberTypeName )) [] ->
            let
                filtered =
                    List.filter
                        (\declarationNode ->
                            let
                                declaration : Declaration
                                declaration =
                                    nodeValue declarationNode
                            in
                            case declaration of
                                AliasDeclaration ta ->
                                    nodeValue ta.name == moduleMemberTypeName

                                CustomTypeDeclaration tm ->
                                    nodeValue tm.name == moduleMemberTypeName

                                _ ->
                                    False
                        )
                        file.declarations
            in
            case filtered of
                [] ->
                    Err <| [ "Unknown Data Type: `" ++ moduleMemberTypeName ++ "`" ]

                _ ->
                    Ok <| FunctionOrValue [] ("encode" ++ moduleMemberTypeName)

        Record record ->
            let
                field : Node RecordField -> Result Error Expression
                field recordFieldNode =
                    let
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
