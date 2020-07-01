port module Port exposing (..)


port requestFile : String -> Cmd msg


port receiveFile : ({ path : String, source : String } -> msg) -> Sub msg


port writeFile : { path : String, source : String } -> Cmd msg


port exit : () -> Cmd msg


port exitWithError : String -> Cmd msg
