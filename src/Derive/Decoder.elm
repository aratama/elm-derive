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
        TypeRef name args ->
            case TypeRef name args of
                TypeRef "Int" [] ->
                    Ok
                        "Json.Decode.int"

                TypeRef "String" [] ->
                    Ok
                        "Json.Decode.string"

                TypeRef "Float" [] ->
                    Ok
                        "Json.Decode.float"

                TypeRef "Bool" [] ->
                    Ok
                        "Json.Decode.bool"

                TypeRef "Dict" [ TypeRef "String" [] ] ->
                    generateDecoderFromType mod (TypeRef "String" []) |> Result.map (\t -> "(Json.Decode.dict identity " ++ t ++ ")")

                TypeRef "List" [ contntType ] ->
                    generateDecoderFromType mod contntType |> Result.map (\t -> "(Json.Decode.list " ++ t ++ ")")

                TypeRef "Maybe" [ contntType ] ->
                    generateDecoderFromType mod contntType |> Result.map (\t -> "(Json.Decode.maybe " ++ t ++ ")")

                TypeRef typeName [] ->
                    Ok <| "decode" ++ typeName

                _ ->
                    Err [ "Unsupported Data Type: `" ++ typeToString ty ++ "`" ]

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
                    "decode" ++ typeMember.name

                singleVariants =
                    List.filter (\variant -> List.length variant.fields == 0) typeMember.variants

                variantsHasFields =
                    List.filter (\variant -> 0 < List.length variant.fields) typeMember.variants

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
                                                    let
                                                        fieldCount =
                                                            List.length variant.fields

                                                        map =
                                                            case fieldCount of
                                                                0 ->
                                                                    ""

                                                                1 ->
                                                                    "Json.Decode.map"

                                                                _ ->
                                                                    "Json.Decode.map" ++ String.fromInt fieldCount
                                                    in
                                                    "\""
                                                        ++ variant.name
                                                        ++ "\" -> "
                                                        ++ map
                                                        ++ " "
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
                                , indent <| indent <| "_ -> Json.Decode.fail (\"Unexpected tag name: \" ++ tag)"
                                , indent ")"
                                ]
                            ]
                        ]
            in
            Ok <|
                unlines
                    [ decoderName ++ " : Json.Decode.Decoder " ++ typeMember.name
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
                    , ""
                    ]


generateDecoderFromTypeAlias : Module -> TypeAliasDef -> Result Error String
generateDecoderFromTypeAlias mod alias =
    let
        encoderName =
            "decode" ++ alias.name

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
                                ++ alias.name
                                ++ " : Json.Decode.Decoder "
                                ++ alias.name
                            , "decode"
                                ++ alias.name
                                ++ " = Json.Decode.map"
                                ++ String.fromInt (List.length record)
                                ++ " "
                                ++ alias.name
                            , indent seq
                            , ""
                            ]

        _ ->
            Ok <|
                unlines
                    [ encoderName ++ " : Json.Decode.Decoder " ++ alias.name
                    , encoderName ++ " = " ++ decoder
                    , ""
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
