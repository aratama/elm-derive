port module Port exposing (..)

import Json.Encode
import TodoList exposing (..)
import TodoList.Derive exposing (..)


port save : Json.Encode.Value -> Cmd msg
