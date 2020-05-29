module Derive.Util exposing (Error, alphabet, alphabets, asList, concatResults, errorToString, indent, toErrors, unlines)


type alias Error =
    List String


indent : String -> String
indent xs =
    String.lines xs |> List.map (\x -> "    " ++ x) |> unlines


toErrors : List (Result b a) -> List b
toErrors =
    List.filterMap
        (\r ->
            case r of
                Ok _ ->
                    Nothing

                Err err ->
                    Just err
        )


asList : List String -> String
asList list =
    case list of
        x :: xs ->
            "[ " ++ x ++ "\n" ++ unlines (List.map (\y -> ", " ++ y) xs) ++ "\n]"

        [] ->
            "[]"


unlines : List String -> String
unlines =
    String.join "\n"


concatResults : (from -> Result (List err) to) -> List from -> Result (List err) (List to)
concatResults f inputs =
    let
        result : List (Result (List err) to)
        result =
            List.map f inputs

        errors : List (List err)
        errors =
            toErrors result

        values : List to
        values =
            List.filterMap Result.toMaybe result
    in
    if List.isEmpty errors then
        Ok <| values

    else
        Err <| List.concat errors


errorToString : Error -> String
errorToString err =
    let
        total =
            List.length err
    in
    unlines <| List.indexedMap (\i e -> "Error (" ++ String.fromInt i ++ " / " ++ String.fromInt total ++ "):\n " ++ e ++ "\n") err


alphabets : Int -> List Char
alphabets n =
    List.range 0 (n - 1)
        |> List.map alphabet


alphabet : Int -> Char
alphabet i =
    Char.fromCode (97 + i)
