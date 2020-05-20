module AutoEncoder.Generate exposing (..)


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
