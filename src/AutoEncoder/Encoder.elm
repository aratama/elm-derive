module AutoEncoder.Encoder exposing (..)

import AutoEncoder.Generate exposing (..)
import AutoEncoder.Type exposing (..)
import Result


encoderFromTypeName : List String -> Result Error String
encoderFromTypeName name =
    case name of
        [ "Int" ] ->
            Ok "Json.Encode.int"

        [ "String" ] ->
            Ok "Json.Encode.string"

        [ "Float" ] ->
            Ok "Json.Encode.float"

        [ "Bool" ] ->
            Ok "Json.Encode.bool"

        [ "Dict", "String", contntType ] ->
            encoderFromTypeName [ contntType ] |> Result.map (\t -> "Json.Encode.dict identity " ++ t)

        [ "List", contntType ] ->
            encoderFromTypeName [ contntType ] |> Result.map (\t -> "Json.Encode.list " ++ t)

        [ "Maybe", contntType ] ->
            encoderFromTypeName [ contntType ] |> Result.map (\t -> "(Maybe.withDefault Json.Encode.null << Maybe.map " ++ t ++ ")")

        [ typeName ] ->
            Ok <| "encode" ++ typeName

        _ ->
            Err <| [ "Unsupported Data Type: `" ++ String.join " " name ++ "`" ]


generateEncoderFromTypeAlias : TypeAlias -> Result Error String
generateEncoderFromTypeAlias alias =
    let
        encoderName =
            "encode" ++ alias.name

        field : NameAndType -> Result Error String
        field entry =
            encoderFromTypeName entry.typeName
                |> Result.map
                    (\t ->
                        "(\"" ++ entry.name ++ "\", " ++ t ++ " value." ++ entry.name ++ ")"
                    )

        results : List (Result Error String)
        results =
            List.map field alias.fields

        fields : List String
        fields =
            List.filterMap Result.toMaybe results

        errors : Error
        errors =
            List.concat <| toErrors results
    in
    case errors of
        _ :: _ ->
            Err errors

        [] ->
            Ok <|
                String.join "\n"
                    [ encoderName ++ " : " ++ alias.name ++ " -> Json.Encode.Value"
                    , encoderName ++ " value = Json.Encode.object"
                    , indent <| asList fields
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


generateEncoder : Module -> Result Error String
generateEncoder mod =
    let
        results =
            List.map generateEncoderFromTypeAlias mod.members

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
                String.join "\n"
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
                    , String.join "\n" members
                    ]
