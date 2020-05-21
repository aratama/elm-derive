module AutoEncoder.Encoder exposing (..)

import AutoEncoder.Generate exposing (..)
import AutoEncoder.Type exposing (..)
import Result


encoderFromTypeName : Module -> List TypeSegment -> Result Error String
encoderFromTypeName mod name =
    case name of
        [ TypeSegment "Int" ] ->
            Ok "Json.Encode.int"

        [ TypeSegment "String" ] ->
            Ok "Json.Encode.string"

        [ TypeSegment "Float" ] ->
            Ok "Json.Encode.float"

        [ TypeSegment "Bool" ] ->
            Ok "Json.Encode.bool"

        [ TypeSegment "Dict", TypeSegment "String", contntType ] ->
            encoderFromTypeName mod [ contntType ] |> Result.map (\t -> "Json.Encode.dict identity " ++ t)

        [ TypeSegment "List", contntType ] ->
            encoderFromTypeName mod [ contntType ] |> Result.map (\t -> "Json.Encode.list " ++ t)

        [ TypeSegment "Maybe", contntType ] ->
            encoderFromTypeName mod [ contntType ] |> Result.map (\t -> "(Maybe.withDefault Json.Encode.null << Maybe.map " ++ t ++ ")")

        [ TypeSegment typeName ] ->
            let
                filtered =
                    List.filter
                        (\member ->
                            case member of
                                TypeAliasMember ta ->
                                    ta.head == typeName

                                TypeMember tm ->
                                    tm.head == typeName
                        )
                        mod.members
            in
            case filtered of
                [] ->
                    Err <| [ "Unknown Data Type: `" ++ typeNameSegmentsToString name ++ "`" ]

                _ ->
                    Ok <| "encode" ++ typeName

        _ ->
            Err <| [ "Unsupported Data Type: `" ++ typeNameSegmentsToString name ++ "`" ]


generateEncoderFromType : Module -> Type -> Result Error String
generateEncoderFromType mod t =
    case t of
        TypeSegmentType typeSegment ->
            case typeSegment of
                TypeSegment seg ->
                    encoderFromTypeName mod [ TypeSegment seg ]

                TypeSegmentList segs ->
                    encoderFromTypeName mod segs

        RecordType record ->
            let
                field : NameAndType -> Result Error String
                field entry =
                    generateEncoderFromType mod entry.typeName
                        |> Result.map
                            (\k ->
                                "(\"" ++ entry.name ++ "\", " ++ k ++ " value." ++ entry.name ++ ")"
                            )

                results : List (Result Error String)
                results =
                    List.map field record

                fields : List String
                fields =
                    List.filterMap Result.toMaybe results

                errors : Error
                errors =
                    List.concat <| toErrors results
            in
            case errors of
                e :: es ->
                    Err errors

                [] ->
                    Ok <| "(\\value -> Json.Encoder.object \n" ++ (indent <| indent <| asList fields) ++ ")"


generateEncoderFromModuleMember : Module -> ModuleMember -> Result Error String
generateEncoderFromModuleMember mod member =
    case member of
        TypeAliasMember typeAlias ->
            generateEncoderFromTypeAlias mod typeAlias

        TypeMember typeMember ->
            let
                encoderName =
                    "encode" ++ typeMember.head

                variants =
                    List.map
                        (\variant ->
                            if List.isEmpty variant.fields then
                                variant.name ++ " -> Json.Encode.string " ++ "\"" ++ variant.name ++ "\""

                            else
                                let
                                    abc =
                                        List.range 0 (List.length variant.fields - 1)
                                            |> List.map (\i -> Char.fromCode (97 + i))

                                    vars =
                                        abc
                                            |> List.intersperse ' '
                                            |> String.fromList

                                    fields =
                                        List.indexedMap
                                            (\i field ->
                                                let
                                                    c =
                                                        Char.fromCode (97 + i)

                                                    encoder : String
                                                    encoder =
                                                        case generateEncoderFromType mod field of
                                                            Err err ->
                                                                "<ERROR>"

                                                            Ok str ->
                                                                str
                                                in
                                                "(\"" ++ String.fromChar c ++ "\", " ++ encoder ++ " " ++ String.fromChar c ++ ")"
                                            )
                                            variant.fields
                                            |> (::) ("(\"tag\", \"" ++ variant.name ++ "\")")
                                            |> asList
                                in
                                variant.name ++ " " ++ vars ++ " -> Json.Encode.object\n" ++ indent fields
                        )
                        typeMember.body
            in
            Ok <|
                unlines
                    [ encoderName ++ " : " ++ typeMember.head ++ " -> Json.Encode.Value"
                    , encoderName ++ " value"
                    , indent "= case value of"
                    , indent <| indent <| unlines variants
                    ]


generateEncoderFromTypeAlias : Module -> TypeAliasDef -> Result Error String
generateEncoderFromTypeAlias mod alias =
    let
        encoderName =
            "encode" ++ alias.head

        result : Result Error String
        result =
            generateEncoderFromType mod alias.body
    in
    case result of
        Err errors ->
            Err errors

        Ok str ->
            Ok <|
                unlines
                    [ encoderName ++ " : " ++ alias.head ++ " -> Json.Encode.Value"
                    , encoderName ++ "\n" ++ indent "= " ++ str
                    ]


generateEncoder : Module -> Result Error String
generateEncoder mod =
    let
        results =
            List.map (generateEncoderFromModuleMember mod) mod.members

        members =
            List.filterMap Result.toMaybe results

        errors =
            toErrors results
    in
    case errors of
        e :: es ->
            Err e

        [] ->
            Ok <|
                unlines
                    [ "-- generated automatically by elm-autoencoder"
                    , ""
                    , "port module " ++ String.join "." mod.name ++ ".AutoEncoder exposing (..)"
                    , ""
                    , "import Json.Encode"
                    , "import Json.Decode"
                    , "import " ++ String.join "." mod.name ++ " exposing (..)"
                    , ""
                    , "-- encoders -------------------------------------------------------------"
                    , ""
                    , String.join "\n\n" members
                    ]
