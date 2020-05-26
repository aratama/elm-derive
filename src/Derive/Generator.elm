module Derive.Generator exposing (..)

import Derive.Type exposing (..)
import Derive.Util exposing (..)


generateGenerator : Module -> Result Error String
generateGenerator mod =
    concatResults (generateTopLevel mod) mod.members
        |> Result.map
            (\results ->
                unlines
                    [ """
-- sample data geenerators ----------------------------------"

generateBool : Random.Generator Bool 
generateBool = Random.uniform True [False]

generateInt : Random.Generator Int
generateInt = Random.int 0 100

generateString : Random.Generator String 
generateString = Random.uniform "a" ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]

generateFloat : Random.Generator Float
generateFloat = Random.float 0 1

"""
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
                    [ "generate" ++ name ++ " : Random.Generator " ++ name
                    , "generate" ++ name ++ " = "
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
                recursive =
                    True
            in
            if recursive then
                case typeDef.body of
                    [] ->
                        Err [ "generateMember" ]

                    v :: vs ->
                        typeDef.body
                            |> concatResults
                                (\variant ->
                                    concatResults (generateType mod) variant.fields
                                        |> Result.map (\generators -> { variant = variant, fields = generators })
                                )
                            |> Result.map
                                (\variantResults ->
                                    unlines
                                        [ "let"
                                        , indent <|
                                            unlines <|
                                                List.map
                                                    (\{ variant, fields } ->
                                                        let
                                                            map =
                                                                if List.length variant.fields == 0 then
                                                                    "Random.constant " ++ variant.name

                                                                else if List.length variant.fields == 1 then
                                                                    "Random.map " ++ variant.name ++ " " ++ String.join " " fields

                                                                else
                                                                    "Random.map" ++ String.fromInt (List.length variant.fields) ++ " " ++ String.join " " fields
                                                        in
                                                        String.toLower variant.name ++ " = " ++ map
                                                    )
                                                    variantResults
                                        , "in"
                                        , indent <|
                                            if List.length variantResults == 1 then
                                                String.toLower v.name

                                            else
                                                "Random.map2 Random.uniform " ++ String.toLower v.name ++ " [" ++ String.join ", " (List.map (String.toLower << .name) vs) ++ "]"
                                        ]
                                )

            else
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
                            |> Result.map (\values -> values)


generateType : Module -> Type -> Result Error String
generateType mod t =
    case t of
        RecordType record ->
            concatResults (generateType mod) (List.map .typeName record)
                |> Result.map
                    (\values ->
                        if List.length values == 0 then
                            "Random.constant {}"

                        else
                            unlines
                                [ "Random.map" ++ String.fromInt (List.length values) ++ " (\\" ++ (String.join " " <| List.map .name record) ++ " -> { " ++ (String.join ", " <| List.map (\f -> f.name ++ " = " ++ f.name) record) ++ " }) "
                                , indent <| unlines <| List.map (\v -> "(" ++ v ++ ")") values
                                ]
                    )

        TypeSegmentType segmentTree ->
            let
                go seg =
                    case seg of
                        TypeSegment segment ->
                            case segment of
                                "Int" ->
                                    Ok "generateInt"

                                "Bool" ->
                                    Ok "generateBool"

                                "Float" ->
                                    Ok "generateFloat"

                                "String" ->
                                    Ok "generateString"

                                _ ->
                                    case findType segment mod of
                                        Nothing ->
                                            Err [ "Unsupported type in TypeSegment" ]

                                        Just _ ->
                                            Ok <| "generate" ++ segment

                        TypeSegmentList segments ->
                            case segments of
                                [ TypeSegment "Float" ] ->
                                    Ok "generateFloat"

                                [ x ] ->
                                    go x

                                [ TypeSegment "List", target ] ->
                                    generateType mod (TypeSegmentType target)
                                        |> Result.map
                                            (\s ->
                                                "Random.andThen (\\n -> Random.list (3 + n) (" ++ s ++ ")) (Random.int 0 7)"
                                            )

                                [ TypeSegment "Maybe", _ ] ->
                                    Ok "Random.constant Nothing"

                                _ ->
                                    Err [ "Unsuported Type in TypeSegmentList " ]
            in
            go segmentTree
