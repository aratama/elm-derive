module Derive.Random exposing (..)

import Derive.Util exposing (Error, application, concatResults, functionOrValue, node, nodeValue, objectConstructor)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Expression(..), Function, FunctionImplementation, LetBlock, LetDeclaration(..))
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Infix exposing (InfixDirection(..))
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
import Elm.Syntax.TypeAnnotation exposing (TypeAnnotation(..))


generateRandom : File -> Result Error (List Declaration)
generateRandom file =
    concatResults (\node -> generateRandomFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateRandomFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateRandomFromDeclaration file declaration =
    case declaration of
        AliasDeclaration aliasDecl ->
            generateRandomFromType file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map
                    (\decoder ->
                        let
                            typeName : String
                            typeName =
                                nodeValue aliasDecl.name

                            decoderName : String
                            decoderName =
                                "random" ++ typeName

                            functionImplementation : FunctionImplementation
                            functionImplementation =
                                { name = node <| decoderName
                                , arguments = []
                                , expression = node decoder
                                }

                            signature : Signature
                            signature =
                                { name = node decoderName
                                , typeAnnotation = node <| Typed (node <| ( [ "Random" ], "Generator" )) [ node <| Typed (node <| ( [], typeName )) [] ]
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
                    nodeValue customTypeDecl.name

                decoderName : String
                decoderName =
                    "random" ++ typeName

                functionImplementation : Result Error FunctionImplementation
                functionImplementation =
                    letExpression
                        |> Result.map
                            (\expr ->
                                { name = node <| decoderName
                                , arguments = []
                                , expression = node expr
                                }
                            )

                signature : Signature
                signature =
                    { name = node decoderName
                    , typeAnnotation = node <| Typed (node <| ( [ "Random" ], "Generator" )) [ node <| Typed (node <| ( [], typeName )) [] ]
                    }

                function : Result Error Function
                function =
                    functionImplementation
                        |> Result.map
                            (\impl ->
                                { documentation = Nothing
                                , signature = Just <| node signature
                                , declaration = node impl
                                }
                            )

                pairs : Result Error (List { constructor : ValueConstructor, decoders : List Expression })
                pairs =
                    concatResults
                        (\(Node _ constructor) ->
                            concatResults (\(Node _ argument) -> generateRandomFromType file argument) constructor.arguments
                                |> Result.map (\decoders -> { constructor = constructor, decoders = decoders })
                        )
                        customTypeDecl.constructors

                letExpression : Result Error Expression
                letExpression =
                    pairs
                        |> Result.map
                            (\ps ->
                                let
                                    -- tree () = random.map2 Tree randomTree randomTree
                                    -- leaf () = random.map Leaf randomString
                                    ds : List LetDeclaration
                                    ds =
                                        List.map
                                            (\{ constructor, decoders } ->
                                                LetFunction
                                                    { documentation = Nothing
                                                    , signature = Nothing
                                                    , declaration =
                                                        node <|
                                                            { name = node <| String.toLower <| nodeValue constructor.name
                                                            , arguments = [ node UnitPattern ]
                                                            , expression =
                                                                node <|
                                                                    if List.isEmpty decoders then
                                                                        Application
                                                                            [ node <| FunctionOrValue [ "Random" ] "constant"
                                                                            , node <| FunctionOrValue [] <| nodeValue constructor.name
                                                                            ]

                                                                    else
                                                                        let
                                                                            mapFunction =
                                                                                case List.length decoders of
                                                                                    1 ->
                                                                                        "map"

                                                                                    _ ->
                                                                                        "map" ++ String.fromInt (List.length decoders)
                                                                        in
                                                                        Application
                                                                            ([ node <| FunctionOrValue [ "Random" ] mapFunction
                                                                             , node <| FunctionOrValue [] <| nodeValue constructor.name
                                                                             ]
                                                                                ++ List.map node decoders
                                                                            )
                                                            }
                                                    }
                                            )
                                            ps

                                    -- let
                                    --      tree () = random.map2 Tree randomTree randomTree
                                    --      leaf () = random.map Leaf randomString
                                    -- in
                                    --      Random.map ((<|) ()) (Random.uniform leaf [tree])
                                    --
                                    letBlock : LetBlock
                                    letBlock =
                                        { declarations = List.map node ds
                                        , expression =
                                            case ps of
                                                [] ->
                                                    node <| Literal "<<<INTERNAL ERROR>>>"

                                                head :: tail ->
                                                    node <|
                                                        Application
                                                            [ node <| FunctionOrValue [ "Random" ] "andThen"
                                                            , node <| ParenthesizedExpression <| node <| Application [ node <| ParenthesizedExpression <| node <| Operator "|>", node UnitExpr ]
                                                            , node <|
                                                                ParenthesizedExpression <|
                                                                    node <|
                                                                        Application
                                                                            [ node <| FunctionOrValue [ "Random" ] "uniform"
                                                                            , node <| FunctionOrValue [] <| String.toLower <| nodeValue head.constructor.name
                                                                            , node <| ListExpr (List.map (\t -> node <| FunctionOrValue [] <| String.toLower <| nodeValue t.constructor.name) tail)
                                                                            ]
                                                            ]
                                        }
                                in
                                LetExpression letBlock
                            )
            in
            function
                |> Result.map
                    (\f -> [ FunctionDeclaration f ])

        _ ->
            Ok []


generateRandomFromType : File -> TypeAnnotation -> Result Error Expression
generateRandomFromType file typeAnnotation =
    case typeAnnotation of
        Record fields ->
            concatResults (\(Node _ ( Node _ _, Node _ anno )) -> generateRandomFromType file anno) fields
                |> Result.map
                    (\randoms ->
                        ParenthesizedExpression <|
                            node <|
                                case List.length fields of
                                    0 ->
                                        Application
                                            [ node <| FunctionOrValue [ "Random" ] "constant"
                                            , node <| RecordExpr []
                                            ]

                                    1 ->
                                        Application
                                            ([ node <| FunctionOrValue [ "Random" ] "map"
                                             , node <| objectConstructor fields
                                             ]
                                                ++ List.map node randoms
                                            )

                                    _ ->
                                        Application
                                            ([ node <| FunctionOrValue [ "Random" ] ("map" ++ String.fromInt (List.length fields))
                                             , node <| objectConstructor fields
                                             ]
                                                ++ List.map node randoms
                                            )
                    )

        Tupled [ Node _ fst, Node _ snd ] ->
            Result.map2
                (\fstRandom sndRandom ->
                    ParenthesizedExpression <|
                        node <|
                            Application
                                [ node <| FunctionOrValue [ "Random" ] "pair"
                                , node <| fstRandom
                                , node <| sndRandom
                                ]
                )
                (generateRandomFromType file fst)
                (generateRandomFromType file snd)

        -- Tupled [ Node _ (Typed (Node _ fst) []), Node _ (Typed (Node _ snd) [], Node _ (Typed (Node _ trd) []) ] ->
        --     Ok (FunctionOrValue [] "randomTuple")
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (FunctionOrValue [] "randomBool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (FunctionOrValue [] "randomInt")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (FunctionOrValue [] "randomFloat")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (FunctionOrValue [] "randomString")

        Typed (Node _ ( [], "Char" )) [] ->
            Ok (FunctionOrValue [] "randomChar")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "randomList"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "randomDict"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "randomMaybe"
                                , node decoder
                                ]
                    )

        Unit ->
            Ok <|
                ParenthesizedExpression <|
                    application
                        [ functionOrValue [ "Random" ] "constant"
                        , node UnitExpr
                        ]

        Typed (Node _ ( [], name )) [] ->
            Ok <| FunctionOrValue [] ("random" ++ name)

        _ ->
            Err [ "Random" ]
