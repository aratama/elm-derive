module Derive.Generator exposing (..)

import Derive.Type exposing (..)
import Derive.Util exposing (..)


mapFunction : List a -> String
mapFunction fields =
    let
        fieldCount =
            List.length fields
    in
    case fieldCount of
        0 ->
            ""

        1 ->
            "Random.map"

        _ ->
            "Random.map" ++ String.fromInt fieldCount


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
generateString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

generateFloat : Random.Generator Float
generateFloat = Random.float 0 1

generateList : Random.Generator a -> Random.Generator (List a)
generateList gen = Random.andThen (\\n -> Random.list (3 + n) gen) (Random.int 0 7)

generateMaybe : Random.Generator a -> Random.Generator (Maybe a)
generateMaybe gen = Random.andThen (\\n -> Random.uniform Nothing [Just n]) gen

generateDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
generateDict gen = Random.map Dict.fromList (generateList (Random.map2 (\\k v -> (k, v)) generateString gen))
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

                                                                else
                                                                    mapFunction variant.fields ++ " " ++ variant.name ++ " " ++ String.join " " fields
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
                                [ mapFunction values ++ " (\\" ++ (String.join " " <| List.map .name record) ++ " -> { " ++ (String.join ", " <| List.map (\f -> f.name ++ " = " ++ f.name) record) ++ " }) "
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
                |> Result.map (\s -> "(generateList " ++ s ++ ")")

        TypeRef "Maybe" [ content ] ->
            generateType mod content
                |> Result.map (\s -> "(generateMaybe " ++ s ++ ")")

        TypeRef "Dict" [ TypeRef "String" [], content ] ->
            generateType mod content
                |> Result.map (\s -> "(generateDict " ++ s ++ ")")

        TypeRef name [] ->
            if List.isEmpty (List.filter (\member -> moduleMemberName member == name) mod.members) then
                Err [ "Type not found: " ++ name ]

            else
                Ok <| "generate" ++ name

        _ ->
            Ok "Generaor TODO:  Unsuported Type in TypeSegmentList "
