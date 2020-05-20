-- generated automatically by elm-autoencoder
module TodoList.Type.Decode exposing (..)

import Json.Decode
import TodoList.Type exposing (..)

decodeTask : Json.Decode.Decoder Task
decodeTask = Json.Decode.map4 Task
    (Json.Decode.field "description" Json.Decode.string)
    (Json.Decode.field "completed" Json.Decode.bool)
    (Json.Decode.field "edits" (Json.Decode.maybe Json.Decode.string))
    (Json.Decode.field "id" Json.Decode.int)

decodeModel : Json.Decode.Decoder Model
decodeModel = Json.Decode.map4 Model
    (Json.Decode.field "tasks" (Json.Decode.list decodeTask))
    (Json.Decode.field "field" Json.Decode.string)
    (Json.Decode.field "uid" Json.Decode.int)
    (Json.Decode.field "visibility" Json.Decode.string)
