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


generateEncoderFromType : Module -> String -> Type -> Result Error String
generateEncoderFromType mod name t =
    case t of
        TypeNameType tuple ->
            encoderFromTypeName mod (TypeSegment tuple.head :: tuple.vars)

        RecordType record ->
            let
                field : NameAndType -> Result Error String
                field entry =
                    encoderFromTypeName mod (List.map TypeSegment entry.typeName)
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
                    Ok <| "Json.Encoder.object \n" ++ (indent <| indent <| asList fields)


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
                                "TODO"
                        )
                        typeMember.body
            in
            Ok <|
                String.join "\n"
                    [ encoderName ++ " : " ++ typeMember.head ++ " -> Json.Encode.Value"
                    , encoderName ++ " value"
                    , indent "= case value of"
                    , indent <| indent <| String.join "\n" variants
                    ]


generateEncoderFromTypeAlias : Module -> TypeAliasDef -> Result Error String
generateEncoderFromTypeAlias mod alias =
    let
        encoderName =
            "encode" ++ alias.head

        result : Result Error String
        result =
            generateEncoderFromType mod alias.head alias.body
    in
    case result of
        Err errors ->
            Err errors

        Ok str ->
            Ok <|
                String.join "\n"
                    [ encoderName ++ " : " ++ alias.head ++ " -> Json.Encode.Value"
                    , encoderName ++ " value\n" ++ indent "= " ++ str
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
                    , String.join "\n\n" members
                    ]
