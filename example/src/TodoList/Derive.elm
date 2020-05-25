-- generated automatically by elm-derive

module TodoList.Derive exposing (..)

import Json.Encode
import Json.Decode
import Random
import Dict
import TodoList exposing (..)

-- encoders -------------------------------------------------------------

encodeTask : Task -> Json.Encode.Value
encodeTask
    = (\value -> Json.Encode.object 
        [ ("description", Json.Encode.string value.description)
        , ("completed", Json.Encode.bool value.completed)
        , ("edits", (Maybe.withDefault Json.Encode.null << Maybe.map Json.Encode.string) value.edits)
        , ("id", Json.Encode.int value.id)
        ])

encodeModel : Model -> Json.Encode.Value
encodeModel
    = (\value -> Json.Encode.object 
        [ ("tasks", Json.Encode.list encodeTask value.tasks)
        , ("field", Json.Encode.string value.field)
        , ("uid", Json.Encode.int value.uid)
        , ("visibility", Json.Encode.string value.visibility)
        ])

-- decoders -------------------------------------------------------------

decodeTask : Json.Decode.Decoder Task
decodeTask = Json.Decode.map4 Task
    (Json.Decode.field "description" (Json.Decode.string))
    (Json.Decode.field "completed" (Json.Decode.bool))
    (Json.Decode.field "edits" ((Json.Decode.maybe Json.Decode.string)))
    (Json.Decode.field "id" (Json.Decode.int))
decodeModel : Json.Decode.Decoder Model
decodeModel = Json.Decode.map4 Model
    (Json.Decode.field "tasks" ((Json.Decode.list decodeTask)))
    (Json.Decode.field "field" (Json.Decode.string))
    (Json.Decode.field "uid" (Json.Decode.int))
    (Json.Decode.field "visibility" (Json.Decode.string))


-- sample data geenerators ----------------------------------"
type alias Context = { int : Dict.Dict String (Random.Generator Int) }


{-
defaultContext : Context
defaultContext = {
    todoList = 
        { tasks = taskGenerator
        , field = stringGenerator
        , uid = intDefaultGenerator
        , visibility = stringGenerator
    },
    string: Dict.fromList [
        ("*", Random.int 0 100)
    ]
}
-}

-- stringGeneratorFromList : Random.Generator String 
-- stringGeneratorFromList = ["Json", "Ken"]

generateTask : Context -> Task
generateTask context = 
    { description = "hoge", completed = False, edits = Nothing, id = 0 }

generateModel : Context -> Model
generateModel context = 
    { tasks = [], field = "hoge", uid = 0, visibility = "hoge" }
