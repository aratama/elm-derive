module Derive.Random exposing (generateRandom)

import Derive.Util exposing (Error, concatResults, nodeValue, objectConstructor)
import Elm.CodeGen as CodeGen exposing (..)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Expression(..), Function, FunctionImplementation, LetBlock, LetDeclaration(..))
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Infix exposing (InfixDirection(..))
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
import Elm.Syntax.TypeAnnotation exposing (TypeAnnotation(..))
import Elm.Writer


generateRandom : File -> Result Error (List CodeGen.Declaration)
generateRandom file =
    concatResults (\node -> generateRandomFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateRandomFromDeclaration : File -> Declaration -> Result Error (List CodeGen.Declaration)
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

                            typeAnnotation =
                                fqTyped [ "Random" ] "Generator" [ fqTyped [] typeName [] ]
                        in
                        [ funDecl Nothing (Just typeAnnotation) decoderName [] decoder ]
                    )

        CustomTypeDeclaration customTypeDecl ->
            let
                typeName : String
                typeName =
                    nodeValue customTypeDecl.name

                decoderName : String
                decoderName =
                    "random" ++ typeName

                typeAnnotation =
                    fqTyped [ "Random" ] "Generator" [ fqTyped [] typeName [] ]

                pairs : Result Error (List { constructor : ValueConstructor, decoders : List CodeGen.Expression })
                pairs =
                    concatResults
                        (\(Node _ constructor) ->
                            concatResults (\(Node _ argument) -> generateRandomFromType file argument) constructor.arguments
                                |> Result.map (\decoders -> { constructor = constructor, decoders = decoders })
                        )
                        customTypeDecl.constructors

                letExpression : Result Error CodeGen.Expression
                letExpression =
                    pairs
                        |> Result.map
                            (\ps ->
                                let
                                    -- tree () = random.map2 Tree randomTree randomTree
                                    -- leaf () = random.map Leaf randomString
                                    ds : List CodeGen.LetDeclaration
                                    ds =
                                        List.map
                                            (\{ constructor, decoders } ->
                                                letFunction
                                                    (String.toLower <| nodeValue constructor.name)
                                                    [ unitPattern ]
                                                    (if List.isEmpty decoders then
                                                        apply
                                                            [ fqFun [ "Random" ] "constant"
                                                            , fqFun [] <| nodeValue constructor.name
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
                                                        apply
                                                            ([ fqFun [ "Random" ] mapFunction
                                                             , fqFun [] <| nodeValue constructor.name
                                                             ]
                                                                ++ decoders
                                                            )
                                                    )
                                            )
                                            ps

                                    -- let
                                    --      tree () = random.map2 Tree randomTree randomTree
                                    --      leaf () = random.map Leaf randomString
                                    -- in
                                    --      Random.map ((<|) ()) (Random.uniform leaf [tree])
                                    --
                                    letBlock : CodeGen.Expression
                                    letBlock =
                                        letExpr
                                            ds
                                            (case ps of
                                                [] ->
                                                    string "<<<INTERNAL ERROR>>>"

                                                head :: tail ->
                                                    apply
                                                        [ fqFun [ "Random" ] "andThen"
                                                        , parens <| apply [ parens (binOp piper), unit ]
                                                        , parens <|
                                                            apply
                                                                [ fqFun [ "Random" ] "uniform"
                                                                , fqFun [] <| String.toLower <| nodeValue head.constructor.name
                                                                , list (List.map (\t -> fqFun [] <| String.toLower <| nodeValue t.constructor.name) tail)
                                                                ]
                                                        ]
                                            )
                                in
                                letBlock
                            )
            in
            letExpression
                |> Result.map
                    (\f -> [ funDecl Nothing (Just typeAnnotation) decoderName [] f ])

        _ ->
            Ok []


generateRandomFromType : File -> TypeAnnotation -> Result Error CodeGen.Expression
generateRandomFromType file typeAnnotation =
    case typeAnnotation of
        Record fields ->
            concatResults (\(Node _ ( Node _ _, Node _ anno )) -> generateRandomFromType file anno) fields
                |> Result.map
                    (\randoms ->
                        parens <|
                            case List.length fields of
                                0 ->
                                    apply
                                        [ fqFun [ "Random" ] "constant"
                                        , record []
                                        ]

                                1 ->
                                    apply
                                        ([ fqFun [ "Random" ] "map"
                                         , objectConstructor fields
                                         ]
                                            ++ randoms
                                        )

                                _ ->
                                    let
                                        go : List CodeGen.Expression -> CodeGen.Expression
                                        go rs =
                                            case rs of
                                                [] ->
                                                    -- dead code
                                                    unit

                                                [ r ] ->
                                                    apply
                                                        [ fqFun [ "Random", "Extra" ] "andMap"
                                                        , r
                                                        ]

                                                x :: xs ->
                                                    applyBinOp
                                                        (apply
                                                            [ fqFun [ "Random", "Extra" ] "andMap"
                                                            , x
                                                            ]
                                                        )
                                                        piper
                                                        (go xs)
                                    in
                                    applyBinOp
                                        (apply
                                            [ fqFun [ "Random" ] "constant"
                                            , objectConstructor fields
                                            ]
                                        )
                                        piper
                                        (go randoms)
                    )

        Tupled [ Node _ fst, Node _ snd ] ->
            Result.map2
                (\fstRandom sndRandom ->
                    parens <|
                        apply
                            [ fqFun [ "Random" ] "pair"
                            , fstRandom
                            , sndRandom
                            ]
                )
                (generateRandomFromType file fst)
                (generateRandomFromType file snd)

        -- Tupled [ Node _ (Typed (Node _ fst) []), Node _ (Typed (Node _ snd) [], Node _ (Typed (Node _ trd) []) ] ->
        --     Ok (fqFun [] "randomTuple")
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (fqFun [ "Random", "Extra" ] "bool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (fqFun [] "randomInt")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (fqFun [] "randomFloat")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (fqFun [] "randomString")

        Typed (Node _ ( [], "Char" )) [] ->
            Ok (fqFun [] "randomChar")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "randomList"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Array" )) [ Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "randomArray"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Set" )) [ Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "randomSet"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "randomDict"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [ "Random", "Extra" ] "maybe"
                                , fqFun [ "Random", "Extra" ] "bool"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Result" )) [ Node _ err, Node _ ok ] ->
            Result.map2
                (\errRandom okRandom ->
                    parens <|
                        apply
                            [ fqFun [ "Random", "Extra" ] "result"
                            , fqFun [ "Random", "Extra" ] "bool"
                            , errRandom
                            , okRandom
                            ]
                )
                (generateRandomFromType file err)
                (generateRandomFromType file ok)

        Unit ->
            Ok <|
                parens <|
                    apply
                        [ fqFun [ "Random" ] "constant"
                        , unit
                        ]

        Typed (Node _ ( [], name )) [] ->
            Ok <| fqFun [] ("random" ++ name)

        _ ->
            -- Err [ "Html: Unsupported Data Type: " ++ Elm.Writer.write (Elm.Writer.writeTypeAnnotation typeAnnotation) ]
            Err [ "Html: Unsupported Data Type: " ]
