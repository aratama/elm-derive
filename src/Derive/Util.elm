module Derive.Util exposing (..)


type alias Error =
    List String


indent : String -> String
indent xs =
    String.lines xs |> List.map (\x -> "    " ++ x) |> String.join "\n"


toErrors : List (Result Error String) -> List Error
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
    (case list of
        x :: xs ->
            "[ " ++ x ++ "\n" ++ String.join "\n" (List.map (\y -> ", " ++ y) xs)

        [] ->
            ""
    )
        ++ "\n]"


unlines : List String -> String
unlines =
    String.join "\n"


concatResults : (a -> Result Error String) -> List a -> Result Error (List String)
concatResults f inputs =
    let
        result : List (Result Error String)
        result =
            List.map f inputs

        errors : List Error
        errors =
            toErrors result

        values : List String
        values =
            List.filterMap Result.toMaybe result
    in
    if List.isEmpty errors then
        Ok <| values

    else
        Err <| List.concat errors
