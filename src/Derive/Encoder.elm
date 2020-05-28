module Derive.Encoder exposing (..)

import Derive.Type exposing (..)
import Derive.Util exposing (..)
import Result


generateEncoderFromType : Module -> Type -> Result Error String
generateEncoderFromType mod target =
    case target of
        TypeRef "Int" [] ->
            Ok "Json.Encode.int"

        TypeRef "String" [] ->
            Ok "Json.Encode.string"

        TypeRef "Float" [] ->
            Ok "Json.Encode.float"

        TypeRef "Bool" [] ->
            Ok "Json.Encode.bool"

        TypeRef "Dict" [ TypeRef "String" [] ] ->
            generateEncoderFromType mod (TypeRef "String" []) |> Result.map (\t -> "(Json.Encode.dict identity " ++ t ++ ")")

        TypeRef "List" [ contntType ] ->
            generateEncoderFromType mod contntType |> Result.map (\t -> "(Json.Encode.list " ++ t ++ ")")

        TypeRef "Maybe" [ contntType ] ->
            generateEncoderFromType mod contntType |> Result.map (\t -> "(Maybe.withDefault Json.Encode.null << Maybe.map " ++ t ++ ")")

        TypeRef typeName [] ->
            let
                filtered =
                    List.filter
                        (\member ->
                            case member of
                                TypeAliasMember ta ->
                                    ta.name == typeName

                                TypeMember tm ->
                                    tm.name == typeName
                        )
                        mod.members
            in
            case filtered of
                [] ->
                    Err <| [ "Unknown Data Type: `" ++ typeName ++ "`" ]

                _ ->
                    Ok <| "encode" ++ typeName

        RecordType record ->
            let
                field : NameAndType -> Result Error String
                field entry =
                    generateEncoderFromType mod entry.typeName
                        |> Result.map
                            (\k ->
                                "(\"" ++ entry.name ++ "\", " ++ k ++ " value." ++ entry.name ++ ")"
                            )
            in
            concatResults field record
                |> Result.map (\fields -> "(\\value -> Json.Encode.object \n" ++ (indent <| indent <| asList fields) ++ ")")

        _ ->
            Err <| [ "Unsupported Data Type at generateEncoderFromType" ]


generateEncoderFromModuleMember : Module -> ModuleMember -> Result Error String
generateEncoderFromModuleMember mod member =
    case member of
        TypeAliasMember typeAlias ->
            generateEncoderFromTypeAlias mod typeAlias

        TypeMember typeMember ->
            let
                encoderName =
                    "encode" ++ typeMember.name

                variants =
                    List.map
                        (\variant ->
                            if List.isEmpty variant.fields then
                                variant.name ++ " -> Json.Encode.string " ++ "\"" ++ variant.name ++ "\""

                            else
                                let
                                    abc =
                                        alphabets (List.length variant.fields)

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
                                            |> (::) ("(\"tag\", Json.Encode.string \"" ++ variant.name ++ "\")")
                                            |> asList
                                in
                                variant.name ++ " " ++ vars ++ " -> Json.Encode.object\n" ++ indent fields
                        )
                        typeMember.variants
            in
            Ok <|
                unlines
                    [ encoderName ++ " : " ++ typeMember.name ++ " -> Json.Encode.Value"
                    , encoderName ++ " value"
                    , indent "= case value of"
                    , indent <| indent <| unlines variants
                    ]


generateEncoderFromTypeAlias : Module -> TypeAliasDef -> Result Error String
generateEncoderFromTypeAlias mod alias =
    let
        encoderName =
            "encode" ++ alias.name

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
                    [ encoderName ++ " : " ++ alias.name ++ " -> Json.Encode.Value"
                    , encoderName ++ "\n" ++ indent "= " ++ str
                    ]


generateEncoder : Module -> Result Error String
generateEncoder mod =
    concatResults (generateEncoderFromModuleMember mod) mod.members
        |> Result.map
            (\members ->
                unlines
                    [ "-- encoders -------------------------------------------------------------"
                    , ""
                    , String.join "\n\n" members
                    ]
            )
