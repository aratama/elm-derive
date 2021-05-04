module Derive.Decoder exposing (generateDecoder)

import Derive.Util exposing (Error, alphabet, concatResults, nodeValue, objectConstructor)
import Elm.CodeGen as CodeGen exposing (..)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Infix exposing (InfixDirection(..))
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))


generateDecoderFromTypeAnnotation : File -> TypeAnnotation -> Result Error Expression
generateDecoderFromTypeAnnotation file typeAnnotation =
    case typeAnnotation of
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (fqVal [ "Json", "Decode" ] "bool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (fqVal [ "Json", "Decode" ] "int")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (fqVal [ "Json", "Decode" ] "float")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (fqVal [ "Json", "Decode" ] "string")

        Typed (Node _ ( [], "Char" )) [] ->
            Ok (fqVal [] "decodeChar")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqVal [ "Json", "Decode" ] "list"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Array" )) [ Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqVal [ "Json", "Decode" ] "array"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Set" )) [ Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqVal [ "Json", "Decode" ] "map"
                                , fqVal [ "Set" ] "fromList"
                                , parens <|
                                    apply
                                        [ fqVal [ "Json", "Decode" ] "list"
                                        , decoder
                                        ]
                                ]
                    )

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqVal [ "Json", "Decode" ] "dict"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqVal [ "Json", "Decode" ] "maybe"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Result" )) [ Node _ err, Node _ ok ] ->
            Result.map2
                (\errDecoder okDecoder ->
                    parens <|
                        apply
                            [ fqVal [] "decodeResult"
                            , errDecoder
                            , okDecoder
                            ]
                )
                (generateDecoderFromTypeAnnotation file err)
                (generateDecoderFromTypeAnnotation file ok)

        Unit ->
            Ok <|
                parens <|
                    apply
                        [ fqVal [ "Json", "Decode" ] "succeed"
                        , unit
                        ]

        Tupled [ Node _ fst, Node _ snd ] ->
            Result.map2
                (\fstDecoder sndDecoder ->
                    parens <|
                        apply
                            [ fqVal [ "Json", "Decode" ] "map2"
                            , fqVal [ "Tuple" ] "pair"
                            , parens <|
                                apply
                                    [ fqVal [ "Json", "Decode" ] "index"
                                    , int 0
                                    , fstDecoder
                                    ]
                            , parens <|
                                apply
                                    [ fqVal [ "Json", "Decode" ] "index"
                                    , int 1
                                    , sndDecoder
                                    ]
                            ]
                )
                (generateDecoderFromTypeAnnotation file fst)
                (generateDecoderFromTypeAnnotation file snd)

        Typed (Node _ ( [], name )) [] ->
            Ok <| fqVal [] ("decode" ++ name)

        Record fields ->
            let
                fieldToDecoder : Node RecordField -> Result Error Expression
                fieldToDecoder (Node _ ( Node _ name, Node _ annotation )) =
                    generateDecoderFromTypeAnnotation file annotation
            in
            fields
                |> concatResults (\field -> fieldToDecoder field |> Result.map (\decoder -> { field = field, decoder = decoder }))
                |> Result.map
                    (\fieldDecoders ->
                        parens <|
                            case fieldDecoders of
                                [] ->
                                    apply
                                        [ fqVal [ "Json", "Decode" ] "succeed"
                                        , record []
                                        ]

                                [ fieldDecoder ] ->
                                    let
                                        recordField : RecordField
                                        recordField =
                                            nodeValue fieldDecoder.field

                                        ( Node _ name, _ ) =
                                            recordField
                                    in
                                    apply
                                        [ fqVal [ "Json", "Decode" ] "map"
                                        , objectConstructor fields
                                        , parens <|
                                            apply
                                                [ fqVal [ "Json", "Decode" ] "field"
                                                , string name
                                                , fieldDecoder.decoder
                                                ]
                                        ]

                                _ ->
                                    let
                                        go : List { field : Node RecordField, decoder : Expression } -> Expression
                                        go entries =
                                            case entries of
                                                [] ->
                                                    -- dead code
                                                    unit

                                                [ entry ] ->
                                                    let
                                                        (Node _ ( Node _ name, _ )) =
                                                            entry.field
                                                    in
                                                    apply
                                                        [ fqVal [] "decodeAndMap"
                                                        , parens <|
                                                            apply
                                                                [ fqVal [ "Json", "Decode" ] "field"
                                                                , string name
                                                                , entry.decoder
                                                                ]
                                                        ]

                                                d :: ds ->
                                                    let
                                                        (Node _ ( Node _ name, _ )) =
                                                            d.field
                                                    in
                                                    applyBinOp
                                                        (apply
                                                            [ fqVal [] "decodeAndMap"
                                                            , parens <|
                                                                apply
                                                                    [ fqVal [ "Json", "Decode" ] "field"
                                                                    , string name
                                                                    , d.decoder
                                                                    ]
                                                            ]
                                                        )
                                                        piper
                                                        (go ds)
                                    in
                                    applyBinOp
                                        (apply
                                            [ fqVal [ "Json", "Decode" ] "succeed"
                                            , objectConstructor fields
                                            ]
                                        )
                                        piper
                                        (go fieldDecoders)
                    )

        _ ->
            -- Err [ "Decoder: Unsupported Data Type: " ++ Elm.Writer.write (Elm.Writer.writeTypeAnnotation typeAnnotation) ]
            Err [ "Decoder: Unsupported Data Type: " ]


generateDecoderFromDeclaration : File -> Declaration -> Result Error (List CodeGen.Declaration)
generateDecoderFromDeclaration file delaration =
    case delaration of
        AliasDeclaration aliasDecl ->
            let
                name : String
                name =
                    "decode" ++ nodeValue aliasDecl.name
            in
            generateDecoderFromTypeAnnotation file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map (\decoder -> [ funDecl Nothing Nothing name [] decoder ])

        CustomTypeDeclaration customTypeDecl ->
            let
                caseExpressions : Result Error (List ( CodeGen.Pattern, CodeGen.Expression ))
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
                                                nodeDecoders : List Expression
                                                nodeDecoders =
                                                    List.indexedMap
                                                        (\i d ->
                                                            parens <|
                                                                apply
                                                                    [ fqVal [ "Json", "Decode" ] "field"
                                                                    , string <| String.fromChar <| alphabet i
                                                                    , d
                                                                    ]
                                                        )
                                                        decoders

                                                decoder : Expression
                                                decoder =
                                                    parens <|
                                                        case List.length decoders of
                                                            0 ->
                                                                apply
                                                                    [ fqVal [ "Json", "Decode" ] "succeed"
                                                                    , fqVal [] (nodeValue constructor.name)
                                                                    ]

                                                            n ->
                                                                apply
                                                                    ([ fqVal [ "Json", "Decode" ]
                                                                        (case List.length decoders of
                                                                            1 ->
                                                                                "map"

                                                                            _ ->
                                                                                "map" ++ String.fromInt n
                                                                        )
                                                                     , fqVal [] (nodeValue constructor.name)
                                                                     ]
                                                                        ++ nodeDecoders
                                                                    )
                                            in
                                            ( stringPattern <| nodeValue constructor.name
                                            , parens <| decoder
                                            )
                                        )
                            )

                body : Result Error CodeGen.Expression
                body =
                    caseExpressions
                        |> Result.map
                            (\cases ->
                                let
                                    caseExpression : CodeGen.Expression
                                    caseExpression =
                                        caseExpr
                                            (fqVal [] "tag")
                                            (cases
                                                ++ [ ( allPattern
                                                     , apply
                                                        [ fqVal [ "Json", "Decode" ] "fail"
                                                        , parens <|
                                                            applyBinOp
                                                                (string "Unexpected tag name: ")
                                                                append
                                                                (fqVal [] "tag")
                                                        ]
                                                     )
                                                   ]
                                            )
                                in
                                apply
                                    [ fqVal [ "Json", "Decode" ] "andThen"
                                    , parens <|
                                        lambda [ varPattern "tag" ] caseExpression
                                    , parens <|
                                        apply
                                            [ fqVal [ "Json", "Decode" ] "field"
                                            , string "tag"
                                            , fqVal [ "Json", "Decode" ] "string"
                                            ]
                                    ]
                            )
            in
            body |> Result.map (\b -> [ funDecl Nothing Nothing ("decode" ++ nodeValue customTypeDecl.name) [] b ])

        _ ->
            Ok []


generateDecoder : File -> Result Error (List CodeGen.Declaration)
generateDecoder file =
    concatResults (\node -> generateDecoderFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat
