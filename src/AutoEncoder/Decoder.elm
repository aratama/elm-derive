module AutoEncoder.Decoder exposing (..)

import AutoEncoder.Generate exposing (..)
import AutoEncoder.Type exposing (..)


decoderFromTypeName : List String -> Result Error String
decoderFromTypeName name =
    case name of
        [ "Int" ] ->
            Ok
                "Json.Decode.int"

        [ "String" ] ->
            Ok
                "Json.Decode.string"

        [ "Float" ] ->
            Ok
                "Json.Decode.float"

        [ "Bool" ] ->
            Ok
                "Json.Decode.bool"

        [ "Dict", "String", contntType ] ->
            decoderFromTypeName [ contntType ] |> Result.map (\t -> "(Json.Decode.dict identity " ++ t ++ ")")

        [ "List", contntType ] ->
            decoderFromTypeName [ contntType ] |> Result.map (\t -> "(Json.Decode.list " ++ t ++ ")")

        [ "Maybe", contntType ] ->
            decoderFromTypeName [ contntType ] |> Result.map (\t -> "(Json.Decode.maybe " ++ t ++ ")")

        [ typeName ] ->
            Ok <| "decode" ++ typeName

        _ ->
            Err [ "Unsupported Data Type: `" ++ String.join " " name ++ "`" ]


generateDecoderFromTypeAlias : TypeAlias -> Result Error String
generateDecoderFromTypeAlias alias =
    let
        encoderName =
            "decode" ++ alias.name

        field : NameAndType -> Result Error String
        field entry =
            decoderFromTypeName entry.typeName
                |> Result.map (\t -> "(Json.Decode.field \"" ++ entry.name ++ "\" " ++ t ++ ")")

        results =
            List.map field alias.fields

        errors =
            toErrors results
    in
    case errors of
        _ :: _ ->
            Err <| List.concat errors

        [] ->
            Ok <|
                String.join "\n"
                    [ encoderName ++ " : Json.Decode.Decoder " ++ alias.name
                    , encoderName ++ " = Json.Decode.map" ++ String.fromInt (List.length alias.fields) ++ " " ++ alias.name
                    , indent <| String.join "\n" (List.filterMap Result.toMaybe results)
                    , ""
                    ]


asList : List String -> String
asList list =
    (case list of
        x :: xs ->
            "[ " ++ x ++ "\n" ++ String.join "\n" (List.map (\y -> ", " ++ y) xs)

        [] ->
            ""
    )
        ++ "\n]"


generateDecoder : Module -> Result Error String
generateDecoder mod =
    let
        results =
            List.map generateDecoderFromTypeAlias mod.members

        errors =
            toErrors results
    in
    case errors of
        _ :: _ ->
            Err <| List.concat errors

        [] ->
            Ok <|
                String.join "\n"
                    [ "-- decoders -------------------------------------------------------------"
                    , ""
                    , String.join "\n" (List.filterMap Result.toMaybe results)
                    ]
