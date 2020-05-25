module Derive.Decoder exposing (..)

import Derive.Type exposing (..)
import Derive.Util exposing (..)


decoderFromTypeName : Module -> List TypeSegment -> Result Error String
decoderFromTypeName mod name =
    case name of
        [ TypeSegment "Int" ] ->
            Ok
                "Json.Decode.int"

        [ TypeSegment "String" ] ->
            Ok
                "Json.Decode.string"

        [ TypeSegment "Float" ] ->
            Ok
                "Json.Decode.float"

        [ TypeSegment "Bool" ] ->
            Ok
                "Json.Decode.bool"

        [ TypeSegment "Dict", TypeSegment "String", contntType ] ->
            decoderFromTypeName mod [ contntType ] |> Result.map (\t -> "(Json.Decode.dict identity " ++ t ++ ")")

        [ TypeSegment "List", contntType ] ->
            decoderFromTypeName mod [ contntType ] |> Result.map (\t -> "(Json.Decode.list " ++ t ++ ")")

        [ TypeSegment "Maybe", contntType ] ->
            decoderFromTypeName mod [ contntType ] |> Result.map (\t -> "(Json.Decode.maybe " ++ t ++ ")")

        [ TypeSegment typeName ] ->
            Ok <| "decode" ++ typeName

        _ ->
            Err [ "Unsupported Data Type: `" ++ typeNameSegmentsToString name ++ "`" ]


fieldRecodeSequence : Module -> Record -> Result Error String
fieldRecodeSequence mod fields =
    let
        field : NameAndType -> Result Error String
        field entry =
            generateDecoderFromType mod entry.typeName
                |> Result.map (\t -> "(Json.Decode.field \"" ++ entry.name ++ "\" (" ++ t ++ "))")
    in
    concatResults field fields
        |> Result.map unlines


generateDecoderFromType : Module -> Type -> Result Error String
generateDecoderFromType mod ty =
    case ty of
        TypeSegmentType segment ->
            case segment of
                TypeSegment seg ->
                    decoderFromTypeName mod [ TypeSegment seg ]

                TypeSegmentList segs ->
                    decoderFromTypeName mod segs

        RecordType fields ->
            let
                vars : List String
                vars =
                    List.indexedMap (\_ f -> f.name) fields

                assignments : List String
                assignments =
                    List.indexedMap (\_ f -> f.name ++ " = " ++ f.name) fields
            in
            case fieldRecodeSequence mod fields of
                Err err ->
                    Err err

                Ok seq ->
                    let
                        mapFunctionName =
                            "Json.Decode.map" ++ String.fromInt (List.length fields)

                        decoder =
                            "(" ++ mapFunctionName ++ " (\\" ++ String.join " " vars ++ " -> { " ++ String.join ", " assignments ++ " }) " ++ seq ++ ")"
                    in
                    Ok <|
                        if List.length fields == 1 then
                            fields
                                |> List.map (\f -> generateDecoderFromType mod f.typeName)
                                |> List.filterMap Result.toMaybe
                                |> String.join ""

                        else
                            decoder


generateDecoderFromModuleMember : Module -> ModuleMember -> Result Error String
generateDecoderFromModuleMember mod member =
    case member of
        TypeAliasMember typeAlias ->
            generateDecoderFromTypeAlias mod typeAlias

        TypeMember typeMember ->
            let
                decoderName =
                    "decode" ++ typeMember.head

                singleVariants =
                    List.filter (\variant -> List.length variant.fields == 0) typeMember.body

                variantsHasFields =
                    List.filter (\variant -> 0 < List.length variant.fields) typeMember.body

                branches =
                    List.concat
                        [ if List.isEmpty singleVariants then
                            []

                          else
                            [ unlines
                                [ "Json.Decode.string |> Json.Decode.andThen"
                                , indent "(\\variant -> case variant of"
                                , indent <| indent <| unlines (List.map (\variant -> "\"" ++ variant.name ++ "\" -> " ++ variant.name) singleVariants)
                                , indent ")"
                                ]
                            ]
                        , if List.isEmpty variantsHasFields then
                            []

                          else
                            [ unlines
                                [ "Json.Decode.field \"tag\" Json.Decode.string |> Json.Decode.andThen"
                                , indent "(\\tag -> case tag of"
                                , indent <|
                                    indent <|
                                        unlines <|
                                            List.map
                                                (\variant ->
                                                    "\""
                                                        ++ variant.name
                                                        ++ "\" -> "
                                                        ++ "Json.Decode.object "
                                                        ++ variant.name
                                                        ++ "\n"
                                                        ++ indent
                                                            (unlines
                                                                (List.indexedMap
                                                                    (\i field ->
                                                                        let
                                                                            fieldName =
                                                                                String.fromChar (Char.fromCode (97 + i))

                                                                            decoder : String
                                                                            decoder =
                                                                                case generateDecoderFromType mod field of
                                                                                    Err _ ->
                                                                                        "<ERROR>"

                                                                                    Ok d ->
                                                                                        d
                                                                        in
                                                                        "(Json.Decode.field \"" ++ fieldName ++ "\" (" ++ decoder ++ "))"
                                                                    )
                                                                    variant.fields
                                                                )
                                                            )
                                                )
                                                variantsHasFields
                                ]
                            ]
                        ]
            in
            Ok <|
                unlines
                    [ decoderName ++ " : Json.Decode.Decoder " ++ typeMember.head
                    , decoderName
                        ++ " = "
                        ++ (if List.length branches == 1 then
                                unlines branches

                            else
                                unlines
                                    [ indent <| "Json.Decode.oneOf "
                                    , asList <|
                                        branches
                                    ]
                           )
                    ]


generateDecoderFromTypeAlias : Module -> TypeAliasDef -> Result Error String
generateDecoderFromTypeAlias mod alias =
    let
        encoderName =
            "decode" ++ alias.head

        decoder =
            case generateDecoderFromType mod alias.body of
                Err _ ->
                    "<<ERROR>>"

                Ok d ->
                    d
    in
    case alias.body of
        RecordType record ->
            case fieldRecodeSequence mod record of
                Err err ->
                    Err err

                Ok seq ->
                    Ok <|
                        unlines
                            [ "decode"
                                ++ alias.head
                                ++ " : Json.Decode.Decoder "
                                ++ alias.head
                            , "decode"
                                ++ alias.head
                                ++ " = Json.Decode.map"
                                ++ String.fromInt (List.length record)
                                ++ " "
                                ++ alias.head
                            , indent seq
                            ]

        _ ->
            Ok <|
                unlines
                    [ encoderName ++ " : Json.Decode.Decoder " ++ alias.head
                    , encoderName ++ " = " ++ decoder
                    ]


generateDecoder : Module -> Result Error String
generateDecoder mod =
    concatResults (generateDecoderFromModuleMember mod) mod.members
        |> Result.map
            (\results ->
                unlines
                    [ "-- decoders -------------------------------------------------------------"
                    , ""
                    , unlines results
                    ]
            )