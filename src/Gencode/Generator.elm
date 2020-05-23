module Gencode.Generator exposing (..)

import Gencode.Type exposing (..)
import Gencode.Util exposing (..)


generateGenerator : Module -> Result Error String
generateGenerator mod =
    concatResults (generateTopLevel mod) mod.members
        |> Result.map
            (\results ->
                unlines
                    [ "-- sample data geenerators ----------------------------------"
                    , ""
                    , "type alias Context = { generator: Generator a }"
                    , ""
                    , String.join "\n\n" results
                    ]
            )


generateTopLevel : Module -> ModuleMember -> Result Error String
generateTopLevel mod member =
    let
        name =
            moduleMemberName member
    in
    generateMember mod member
        |> Result.map
            (\gen ->
                unlines
                    [ "generate" ++ name ++ " : Context -> " ++ name
                    , "generate" ++ name ++ " context = "
                    , indent gen
                    ]
            )


generateMember : Module -> ModuleMember -> Result Error String
generateMember mod member =
    case member of
        TypeAliasMember typeAlias ->
            generateType mod typeAlias.body

        TypeMember typeDef ->
            let
                -- select non-recursive variants
                nonRecursiveVariants : List Variant
                nonRecursiveVariants =
                    List.filter (\variant -> List.all (\field -> field /= TypeSegmentType (TypeSegment typeDef.head)) variant.fields) typeDef.body
            in
            case List.head nonRecursiveVariants of
                Nothing ->
                    Err [ "Recursize Type" ]

                Just variant ->
                    concatResults (generateType mod) variant.fields
                        |> Result.map (\values -> "(" ++ variant.name ++ " " ++ String.join " " values ++ ")")
                        |> Result.map (\values -> typeDef.head ++ " " ++ values)


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
