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
generateString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "GOlf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

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
                case typeDef.variants of
                    [] ->
                        Err [ "generateMember" ]

                    v :: vs ->
                        typeDef.variants
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
                                                                    "Random.map" ++ String.fromInt (List.length variant.fields) ++ " " ++ variant.name ++ " " ++ String.join " " fields
                                                        in
                                                        String.toLower variant.name ++ " () = " ++ map
                                                    )
                                                    variantResults
                                        , "in"
                                        , indent <|
                                            if List.length variantResults == 1 then
                                                String.toLower v.name

                                            else
                                                "Random.uniform " ++ String.toLower v.name ++ " [" ++ String.join ", " (List.map (String.toLower << .name) vs) ++ "]"
                                        , indent <| indent "|> Random.andThen ((|>) ())"
                                        ]
                                )

            else
                let
                    -- select non-recursive variants
                    nonRecursiveVariants : List Variant
                    nonRecursiveVariants =
                        List.filter (\variant -> List.all (\field -> field /= TypeRef typeDef.name []) variant.fields) typeDef.variants
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

        TypeRef "Int" [] ->
            Ok "generateInt"

        TypeRef "Bool" [] ->
            Ok "generateBool"

        TypeRef "Float" [] ->
            Ok "generateFloat"

        TypeRef "String" [] ->
            Ok "generateString"

        TypeRef "List" [ content ] ->
            generateType mod content
                |> Result.map
                    (\s ->
                        "Random.andThen (\\n -> Random.list (3 + n) (" ++ s ++ ")) (Random.int 0 7)"
                    )

        TypeRef "Maybe" [ content ] ->
            generateType mod content
                |> Result.map
                    (\s ->
                        "(Random.andThen (\\n -> Random.uniform Nothing [Just n]) " ++ s ++ ")"
                    )

        TypeRef name [] ->
            if List.isEmpty (List.filter (\member -> moduleMemberName member == name) mod.members) then
                Err [ "Type not found: " ++ name ]

            else
                Ok <| "generate" ++ name

        _ ->
            Ok "Generaor TODO:  Unsuported Type in TypeSegmentList "
