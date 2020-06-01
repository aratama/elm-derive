module Derive.Random exposing (generateRandom)

import Derive.Type exposing (Module, ModuleMember(..), Type(..), Variant, moduleMemberName)
import Derive.Util exposing (Error, concatResults, indent, unlines)


mapFunction : String -> List String -> String
mapFunction constructor generators =
    case generators of
        g :: gs ->
            unlines
                [ "Random.map " ++ constructor ++ " (" ++ g ++ ")"
                , indent <| unlines (List.map (\gen -> "|> Random.Extra.andMap (" ++ gen ++ ")") gs)
                ]

        [] ->
            "<<<INTERNAL ERROR>>>"


generateRandom : Module -> Result Error String
generateRandom mod =
    concatResults (generateRandomModuleMember mod) mod.members
        |> Result.map
            (\results ->
                unlines
                    [ """
-- random data generators ----------------------------------"

randomBool : Random.Generator Bool 
randomBool = Random.uniform True [False]

randomInt : Random.Generator Int
randomInt = Random.int 0 100

randomString : Random.Generator String 
randomString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomFloat : Random.Generator Float
randomFloat = Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen = Random.andThen (\\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
randomMaybe gen = Random.andThen (\\n -> Random.uniform Nothing [Just n]) gen

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen = Random.map Dict.fromList (randomList (Random.map2 (\\k v -> (k, v)) randomString gen))

"""
                    , String.join "\n\n" results
                    ]
            )


generateRandomModuleMember : Module -> ModuleMember -> Result Error String
generateRandomModuleMember mod member =
    let
        name =
            moduleMemberName member
    in
    generateRandomMember mod member
        |> Result.map
            (\gen ->
                unlines
                    [ "random" ++ name ++ " : Random.Generator " ++ name
                    , "random" ++ name ++ " = "
                    , indent gen
                    ]
            )


generateRandomMember : Module -> ModuleMember -> Result Error String
generateRandomMember mod member =
    case member of
        TypeAliasMember typeAlias ->
            generateRandomType mod typeAlias.body

        TypeMember typeDef ->
            let
                recursive =
                    True
            in
            if recursive then
                case typeDef.variants of
                    [] ->
                        Err [ "generateRandomMember" ]

                    v :: vs ->
                        typeDef.variants
                            |> concatResults
                                (\variant ->
                                    concatResults (generateRandomType mod) variant.fields
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
                                                                    mapFunction variant.name fields
                                                        in
                                                        String.toLower variant.name ++ " () = " ++ map
                                                    )
                                                    variantResults
                                        , "in"
                                        , indent <|
                                            if List.length variantResults == 1 then
                                                "Random.constant " ++ String.toLower v.name

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
                        concatResults (generateRandomType mod) variant.fields
                            |> Result.map (\values -> "(" ++ variant.name ++ " " ++ String.join " " values ++ ")")
                            |> Result.map (\values -> values)


generateRandomType : Module -> Type -> Result Error String
generateRandomType mod t =
    case t of
        RecordType record ->
            concatResults (generateRandomType mod) (List.map .typeName record)
                |> Result.map
                    (\values ->
                        if List.length values == 0 then
                            "Random.constant {}"

                        else
                            let
                                constructor =
                                    " (\\" ++ (String.join " " <| List.map .name record) ++ " -> { " ++ (String.join ", " <| List.map (\f -> f.name ++ " = " ++ f.name) record) ++ " }) "
                            in
                            mapFunction constructor values
                    )

        TypeRef "Int" [] ->
            Ok "randomInt"

        TypeRef "Bool" [] ->
            Ok "randomBool"

        TypeRef "Float" [] ->
            Ok "randomFloat"

        TypeRef "String" [] ->
            Ok "randomString"

        TypeRef "List" [ content ] ->
            generateRandomType mod content
                |> Result.map (\s -> "(randomList " ++ s ++ ")")

        TypeRef "Maybe" [ content ] ->
            generateRandomType mod content
                |> Result.map (\s -> "(randomMaybe " ++ s ++ ")")

        TypeRef "Dict" [ TypeRef "String" [], content ] ->
            generateRandomType mod content
                |> Result.map (\s -> "(randomDict " ++ s ++ ")")

        TypeRef name [] ->
            if List.isEmpty (List.filter (\member -> moduleMemberName member == name) mod.members) then
                Err [ "Type not found: " ++ name ]

            else
                Ok <| "random" ++ name

        _ ->
            Ok "Random TODO:  Unsuported Type in TypeSegmentList "