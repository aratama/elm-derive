module Derive.Ord exposing (..)

import Derive.Util exposing (Error, alphabet, alphabets, concatResults, functionAnnotation, node, nodeValue)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Cases, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Infix exposing (InfixDirection(..))
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))
import Elm.Writer
import Result


generate : File -> Result Error (List Declaration)
generate file =
    concatResults (\node -> generateOrdFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateOrdFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateOrdFromDeclaration file declaration =
    let
        typeName : String
        typeName =
            case declaration of
                AliasDeclaration aliasDecl ->
                    nodeValue aliasDecl.name

                CustomTypeDeclaration customTypeDecl ->
                    nodeValue <| customTypeDecl.name

                _ ->
                    "<<<ERROR>>>"

        name =
            "compare" ++ typeName
    in
    case declaration of
        AliasDeclaration aliasDecl ->
            generateOrdFromTypeAnnotation 0 file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map
                    (\encoder ->
                        let
                            functionImplementation : FunctionImplementation
                            functionImplementation =
                                { name = node <| name
                                , arguments = []
                                , expression = node encoder
                                }

                            signature : Signature
                            signature =
                                { name = node name
                                , typeAnnotation =
                                    node <|
                                        FunctionTypeAnnotation (node <| Typed (node ( [], typeName )) [])
                                            (node <| FunctionTypeAnnotation (node <| Typed (node ( [], typeName )) []) (node <| Typed (node ( [], "Order" )) []))
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
                variants : List (Result Error Case)
                variants =
                    List.indexedMap
                        (\constructorIndex constructorNode ->
                            let
                                constructor : ValueConstructor
                                constructor =
                                    nodeValue constructorNode

                                abc : String -> List String
                                abc prefix =
                                    alphabets (List.length constructor.arguments)
                                        |> List.map (\c -> prefix ++ String.fromChar c)

                                fields : Result Error (List Expression)
                                fields =
                                    constructor.arguments
                                        |> List.indexedMap (\i a -> ( i, a ))
                                        |> concatResults
                                            (\( index, Node _ arg ) ->
                                                generateOrdFromTypeAnnotation 0 file arg
                                                    |> Result.map (\a -> Application [ node a, node <| FunctionOrValue [] (String.fromChar <| alphabet index) ])
                                            )

                                constructorCase : Result Error Case
                                constructorCase =
                                    fields
                                        |> Result.map
                                            (\fs ->
                                                ( node <|
                                                    TuplePattern
                                                        [ node <| NamedPattern { moduleName = [], name = nodeValue constructor.name } (List.map (\c -> node <| VarPattern c) (abc "l"))
                                                        , node <| NamedPattern { moduleName = [], name = nodeValue constructor.name } (List.map (\c -> node <| VarPattern c) (abc "r"))
                                                        ]
                                                , node <|
                                                    OperatorApplication "::"
                                                        Right
                                                        (node <| Literal <| String.fromInt constructorIndex)
                                                        (node <|
                                                            Application
                                                                [ node <| FunctionOrValue [ "List" ] "concat"
                                                                , node <| ListExpr <| List.map node fs
                                                                ]
                                                        )
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
                                { name = node name
                                , typeAnnotation =
                                    node <|
                                        FunctionTypeAnnotation (node <| Typed (node ( [], typeName )) [])
                                            (node <|
                                                FunctionTypeAnnotation (node <| Typed (node ( [], typeName )) []) (node <| Typed (node ( [], "Order" )) [])
                                            )
                                }
                        in
                        [ FunctionDeclaration
                            { documentation = Nothing
                            , signature = Just <| node signature
                            , declaration =
                                node <|
                                    { name = node <| name
                                    , arguments = [ node <| VarPattern "lhs", node <| VarPattern "rhs" ]
                                    , expression =
                                        node <|
                                            CaseExpression
                                                { expression = node <| TupledExpression [ node <| FunctionOrValue [] "lhs", node <| FunctionOrValue [] "rhs" ]
                                                , cases = cases
                                                }
                                    }
                            }
                        ]
                    )

        _ ->
            Ok []


generateOrdFromTypeAnnotation : Int -> File -> TypeAnnotation -> Result Error Expression
generateOrdFromTypeAnnotation depth file typeAnnotation =
    case typeAnnotation of
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (FunctionOrValue [] "compareBool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (FunctionOrValue [] "compare")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (FunctionOrValue [] "compare")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (FunctionOrValue [] "compare")

        Typed (Node _ ( [], "Char" )) [] ->
            Ok (FunctionOrValue [] "compare")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> ParenthesizedExpression <| node <| Application [ node <| FunctionOrValue [] "compareList", node encoder ])

        Typed (Node _ ( [], "Array" )) [ Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> ParenthesizedExpression <| node <| Application [ node <| FunctionOrValue [] "compareArray", node encoder ])

        Typed (Node _ ( [], "Set" )) [ Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> ParenthesizedExpression <| node <| Application [ node <| FunctionOrValue [] "compareSet", node encoder ])

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> ParenthesizedExpression <| node <| Application [ node <| FunctionOrValue [] "compareDict", node encoder ])

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> ParenthesizedExpression <| node <| Application [ node <| FunctionOrValue [] "compareMaybe", node encoder ])

        Typed (Node _ ( [], "Result" )) [ Node _ err, Node _ ok ] ->
            Result.map2
                (\errEncoder okEncoder -> ParenthesizedExpression <| node <| Application [ node <| FunctionOrValue [] "compareResult", node errEncoder, node okEncoder ])
                (generateOrdFromTypeAnnotation (depth + 1) file err)
                (generateOrdFromTypeAnnotation (depth + 1) file ok)

        Unit ->
            Ok <| FunctionOrValue [] "EQ"

        Tupled [ Node _ fst, Node _ snd ] ->
            Result.map2
                (\fstEncoder sndEncoder -> ParenthesizedExpression <| node <| Application [ node <| FunctionOrValue [] "compareTuple", node fstEncoder, node sndEncoder ])
                (generateOrdFromTypeAnnotation (depth + 1) file fst)
                (generateOrdFromTypeAnnotation (depth + 1) file snd)

        -- Typed (Node _ ( [], moduleMemberTypeName )) [] ->
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
        --                             nodeValue ta.name == moduleMemberTypeName
        --                         CustomTypeDeclaration tm ->
        --                             nodeValue tm.name == moduleMemberTypeName
        --                         _ ->
        --                             False
        --                 )
        --                 file.declarations
        --     in
        --     case filtered of
        --         [] ->
        --             Err <| [ "Encoder: Unknown Data Type: `" ++ moduleMemberTypeName ++ "`" ]
        --         _ ->
        --             Ok <| FunctionOrValue [] ("encode" ++ moduleMemberTypeName)
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
                    Err <| [ "Encoder: Unknown Data Type: `" ++ moduleMemberTypeName ++ "`" ]

                _ ->
                    Ok <| FunctionOrValue [] ("compare" ++ moduleMemberTypeName)

        Record recordFields ->
            let
                go : Int -> List RecordField -> Result Error Expression
                go goDepth fields =
                    case fields of
                        [] ->
                            Ok <| FunctionOrValue [] "EQ"

                        ( Node _ fieldName, Node _ fieldType ) :: xs ->
                            generateOrdFromTypeAnnotation (depth + 1) file fieldType
                                |> Result.andThen
                                    (\ordFunction ->
                                        go (goDepth + 1) xs
                                            |> Result.map
                                                (\body ->
                                                    CaseExpression
                                                        { expression =
                                                            node <|
                                                                Application
                                                                    [ node <| ordFunction
                                                                    , node <| RecordAccess (node <| FunctionOrValue [] <| "lhs" ++ String.fromInt depth) (node fieldName)
                                                                    , node <| RecordAccess (node <| FunctionOrValue [] <| "rhs" ++ String.fromInt depth) (node fieldName)
                                                                    ]
                                                        , cases =
                                                            [ ( node <| NamedPattern { moduleName = [], name = "EQ" } [], node <| body )
                                                            , ( node <| VarPattern ("o" ++ String.fromInt goDepth), node <| FunctionOrValue [] ("o" ++ String.fromInt goDepth) )
                                                            ]
                                                        }
                                                )
                                    )
            in
            go 0 (List.map nodeValue recordFields)
                |> Result.map
                    (\body ->
                        ParenthesizedExpression <|
                            node <|
                                LambdaExpression
                                    { args =
                                        [ node <| VarPattern <| "lhs" ++ String.fromInt depth
                                        , node <| VarPattern <| "rhs" ++ String.fromInt depth
                                        ]
                                    , expression = node body
                                    }
                    )

        -- _ ->
        --     Err [ "Encoder: Unsupported Data Type: " ++ Elm.Writer.write (Elm.Writer.writeTypeAnnotation (node typeAnnotation)) ]
        _ ->
            Ok <| FunctionOrValue [] "<<<TODO>>>"
