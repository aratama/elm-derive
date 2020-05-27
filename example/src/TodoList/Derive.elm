-- generated automatically by elm-derive

module TodoList.Derive exposing (..)

import Dict
import Json.Encode
import Json.Decode
import Random
import TodoList exposing (..)

-- Todo


-- sample data geenerators ----------------------------------"

generateBool : Random.Generator Bool 
generateBool = Random.uniform True [False]

generateInt : Random.Generator Int
generateInt = Random.int 0 100

generateString : Random.Generator String 
generateString = Random.uniform "a" ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]

generateFloat : Random.Generator Float
generateFloat = Random.float 0 1


generateTask : Random.Generator Task
generateTask = 
    Random.map4 (\description completed edits id -> { description = description, completed = completed, edits = edits, id = id }) 
        (generateString)
        (generateBool)
        (Random.constant Nothing)
        (generateInt)

generateModel : Random.Generator Model
generateModel = 
    Random.map4 (\tasks field uid visibility -> { tasks = tasks, field = field, uid = uid, visibility = visibility }) 
        (Random.andThen (\n -> Random.list (3 + n) (generateTask)) (Random.int 0 7))
        (generateString)
        (generateInt)
        (generateString)

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

