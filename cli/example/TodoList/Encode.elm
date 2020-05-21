-- generated automatically by elm-gencode
module TodoList.Type.Encode exposing (..)

import Json.Encode
import TodoList.Type exposing (..)

encodeTask : Task -> Json.Encode.Value
encodeTask value = Json.Encode.object
    [ ("description", Json.Encode.string value.description)
    , ("completed", Json.Encode.bool value.completed)
    , ("edits", (Maybe.withDefault Json.Encode.null << Maybe.map Json.Encode.string) value.edits)
    , ("id", Json.Encode.int value.id)
    ]

encodeModel : Model -> Json.Encode.Value
encodeModel value = Json.Encode.object
    [ ("tasks", Json.Encode.list encodeTask value.tasks)
    , ("field", Json.Encode.string value.field)
    , ("uid", Json.Encode.int value.uid)
    , ("visibility", Json.Encode.string value.visibility)
    ]
