module Derive.Decoder exposing (generateDecoder)

import Derive.Util exposing (Error, alphabets, concatResults, indent, node, nodeValue, objectConstructor, unlines)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Infix exposing (InfixDirection(..))
import Elm.Syntax.ModuleName exposing (ModuleName)
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))


functionAnnotation : ( ModuleName, String ) -> ( ModuleName, String ) -> TypeAnnotation
functionAnnotation from to =
    FunctionTypeAnnotation (node <| Typed (node from) []) (node <| Typed (node to) [])


generateDecoderFromTypeAnnotation : File -> TypeAnnotation -> Result Error Expression
generateDecoderFromTypeAnnotation file typeAnnotation =
    case typeAnnotation of
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (FunctionOrValue [ "Json", "Decode" ] "bool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (FunctionOrValue [ "Json", "Decode" ] "int")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (FunctionOrValue [ "Json", "Decode" ] "float")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (FunctionOrValue [ "Json", "Decode" ] "string")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            node <|
                                Application
                                    [ node <| FunctionOrValue [ "Json", "Decode" ] "list"
                                    , node decoder
                                    ]
                    )

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            node <|
                                Application
                                    [ node <| FunctionOrValue [ "Json", "Decode" ] "dict"
                                    , node decoder
                                    ]
                    )

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            node <|
                                Application
                                    [ node <| FunctionOrValue [ "Json", "Decode" ] "maybe"
                                    , node decoder
                                    ]
                    )

        Typed (Node _ ( [], name )) [] ->
            Ok <| FunctionOrValue [] ("decode" ++ name)

        Record fields ->
            let
                fieldToDecoder : Node RecordField -> Result Error Expression
                fieldToDecoder (Node _ ( Node _ name, Node _ annotation )) =
                    generateDecoderFromTypeAnnotation file annotation
                        |> Result.map
                            (\decoder ->
                                ParenthesizedExpression <|
                                    node <|
                                        Application
                                            [ node <| FunctionOrValue [ "Json", "Decode" ] "field"
                                            , node <| Literal name
                                            , node decoder
                                            ]
                            )
            in
            fields
                |> concatResults (\field -> fieldToDecoder field |> Result.map (\decoder -> { field = field, decoder = decoder }))
                |> Result.map
                    (\fieldDecoders ->
                        let
                            map =
                                "map" ++ String.fromInt (List.length fieldDecoders)
                        in
                        Application
                            ([ node <| FunctionOrValue [ "Json", "Decode" ] map
                             , node <| objectConstructor fields
                             ]
                                ++ List.map (\{ decoder } -> node decoder) fieldDecoders
                            )
                    )

        _ ->
            Err [ "Decoder: Not implemented: " ]


generateDecoderFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateDecoderFromDeclaration file delaration =
    let
        decoderName : String -> String
        decoderName typeName =
            "decode" ++ typeName

        functionImplementation : String -> Expression -> FunctionImplementation
        functionImplementation typeName decoder =
            { name = node <| decoderName typeName
            , arguments = []
            , expression = node decoder
            }

        signature : String -> Signature
        signature typeName =
            { name = node <| decoderName typeName
            , typeAnnotation = node <| Typed (node ( [ "Json", "Decode" ], "Decoder" )) [ node <| Typed (node ( [], typeName )) [] ]
            }

        function : String -> Expression -> Function
        function typeName decoder =
            { documentation = Nothing
            , signature = Just <| node <| signature typeName
            , declaration = node <| functionImplementation typeName decoder
            }
    in
    case delaration of
        AliasDeclaration aliasDecl ->
            let
                name =
                    nodeValue aliasDecl.name

                fieldToDecoder : Node RecordField -> Result Error Expression
                fieldToDecoder (Node _ ( Node _ fieldName, Node _ annotation )) =
                    generateDecoderFromTypeAnnotation file annotation
                        |> Result.map
                            (\decoder ->
                                ParenthesizedExpression <|
                                    node <|
                                        Application
                                            [ node <| FunctionOrValue [ "Json", "Decode" ] "field"
                                            , node <| Literal fieldName
                                            , node <| ParenthesizedExpression <| node <| decoder
                                            ]
                            )
            in
            case aliasDecl.typeAnnotation of
                Node _ (Record recordFields) ->
                    concatResults fieldToDecoder recordFields
                        |> Result.map
                            (\fieldDecoders ->
                                let
                                    constructor : Expression
                                    constructor =
                                        FunctionOrValue [] name

                                    map =
                                        "map" ++ String.fromInt (List.length fieldDecoders)

                                    decoder : Expression
                                    decoder =
                                        Application
                                            ([ node <| FunctionOrValue [ "Json", "Decode" ] map
                                             , node <| constructor
                                             ]
                                                ++ List.map node fieldDecoders
                                            )
                                in
                                [ FunctionDeclaration <| function name decoder ]
                            )

                _ ->
                    generateDecoderFromTypeAnnotation file (nodeValue aliasDecl.typeAnnotation)
                        |> Result.map (\decoder -> [ FunctionDeclaration <| function name decoder ])

        CustomTypeDeclaration customTypeDecl ->
            let
                caseExpressions : Result Error (List Case)
                caseExpressions =
                    customTypeDecl.constructors
                        |> concatResults
                            (\(Node _ constructor) ->
                                let
                                    arguments : List TypeAnnotation
                                    arguments =
                                        List.map nodeValue constructor.arguments
                                in
                                arguments
                                    |> concatResults (generateDecoderFromTypeAnnotation file)
                                    |> Result.map (\decoders -> { constructor = constructor, decoders = decoders })
                            )
                        |> Result.map
                            (\pairs ->
                                pairs
                                    |> List.map
                                        (\{ constructor, decoders } ->
                                            let
                                                nodeDecoders : List (Node Expression)
                                                nodeDecoders =
                                                    List.map (\d -> node <| ParenthesizedExpression <| node d) decoders

                                                decoder : Expression
                                                decoder =
                                                    case List.length decoders of
                                                        0 ->
                                                            Application
                                                                [ node <| FunctionOrValue [ "Json", "Decode" ] "succeed"
                                                                , node <| FunctionOrValue [] (nodeValue constructor.name)
                                                                ]

                                                        n ->
                                                            Application
                                                                ([ node <|
                                                                    FunctionOrValue [ "Json", "Decode" ]
                                                                        (case List.length decoders of
                                                                            1 ->
                                                                                "map"

                                                                            _ ->
                                                                                "map" ++ String.fromInt n
                                                                        )
                                                                 , node <| FunctionOrValue [] (nodeValue constructor.name)
                                                                 ]
                                                                    ++ nodeDecoders
                                                                )
                                            in
                                            ( node <| StringPattern <| nodeValue constructor.name
                                            , node <|
                                                Application
                                                    [ node <| FunctionOrValue [ "Json", "Decode" ] "field"
                                                    , node <| Literal "value"
                                                    , node <| ParenthesizedExpression <| node decoder
                                                    ]
                                            )
                                        )
                            )

                body =
                    caseExpressions
                        |> Result.map
                            (\cases ->
                                Application
                                    [ node <| FunctionOrValue [ "Json", "Decode" ] "andThen"
                                    , node <|
                                        ParenthesizedExpression <|
                                            node <|
                                                LambdaExpression
                                                    { args = [ node <| VarPattern "tag" ]
                                                    , expression =
                                                        node <|
                                                            CaseExpression
                                                                { expression = node <| FunctionOrValue [] "tag"
                                                                , cases =
                                                                    cases
                                                                        ++ [ ( node <| AllPattern
                                                                             , node <|
                                                                                Application
                                                                                    [ node <| FunctionOrValue [ "Json", "Decode" ] "fail"
                                                                                    , node <|
                                                                                        ParenthesizedExpression <|
                                                                                            node <|
                                                                                                OperatorApplication "++"
                                                                                                    Left
                                                                                                    (node <| Literal "Unexpected tag name: ")
                                                                                                    (node <| FunctionOrValue [] "tag")
                                                                                    ]
                                                                             )
                                                                           ]
                                                                }
                                                    }
                                    , node <|
                                        ParenthesizedExpression <|
                                            node <|
                                                Application
                                                    [ node <| FunctionOrValue [ "Json", "Decode" ] "field"
                                                    , node <| Literal "tag"
                                                    , node <| FunctionOrValue [ "Json", "Decode" ] "string"
                                                    ]
                                    ]
                            )
            in
            body |> Result.map (\b -> [ FunctionDeclaration <| function (nodeValue customTypeDecl.name) b ])

        _ ->
            Ok []


generateDecoder : File -> Result Error (List Declaration)
generateDecoder file =
    concatResults (\node -> generateDecoderFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


mapFunction : String -> List String -> String
mapFunction constructor decoders =
    case decoders of
        g :: gs ->
            unlines
                [ "Json.Decode.map " ++ constructor ++ " (" ++ g ++ ")"
                , indent <| unlines (List.map (\gen -> "|> andMap (" ++ gen ++ ")") gs)
                ]

        [] ->
            "<<<INTERNAL ERROR>>>"


mapFunctionExtra : String
mapFunctionExtra =
    """
andMap : Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
andMap =
    Json.Decode.map2 (|>)
"""
