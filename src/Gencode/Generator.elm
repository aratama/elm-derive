module Gencode.Generator exposing (..)

import Gencode.Type exposing (..)
import Gencode.Util exposing (..)


generateMember : Module -> ModuleMember -> Result Error String
generateMember mod member =
    case member of
        TypeAliasMember typeAlias ->
            generateType mod typeAlias.body

        TypeMember typeDef ->
            let
                hs : List (Result Error String)
                hs =
                    List.map
                        (\variant ->
                            concatResults (generateType mod) variant.fields
                                |> Result.map (\values -> "(" ++ variant.name ++ " " ++ String.join " " values ++ ")")
                        )
                        typeDef.body
            in
            concatResults identity hs
                |> Result.map
                    (\values ->
                        case List.head values of
                            Nothing ->
                                "No Variants?"

                            Just v ->
                                v
                    )


generateType : Module -> Type -> Result Error String
generateType mod t =
    case t of
        RecordType record ->
            concatResults (generateType mod) (List.map .typeName record)
                |> Result.map (\values -> "{ " ++ (String.join ", " <| List.map2 (\f v -> f.name ++ " = " ++ v) record values) ++ " }")

        TypeSegmentType segmentTree ->
            let
                go seg =
                    case seg of
                        TypeSegment segment ->
                            case segment of
                                "Int" ->
                                    Ok "0"

                                "Bool" ->
                                    Ok "False"

                                "Float" ->
                                    Ok "0.0"

                                "String" ->
                                    Ok "\"hoge\""

                                _ ->
                                    case findType segment mod of
                                        Nothing ->
                                            Err [ "Unsupported type: " ++ Debug.toString segment ]

                                        Just member ->
                                            generateMember mod member

                        TypeSegmentList segments ->
                            case segments of
                                [ x ] ->
                                    go x

                                [ TypeSegment "List", _ ] ->
                                    Ok "[]"

                                [ TypeSegment "Maybe", _ ] ->
                                    Ok "Nothing"

                                _ ->
                                    Err [ "Unsuported Type: " ++ Debug.toString segments ]
            in
            go segmentTree
