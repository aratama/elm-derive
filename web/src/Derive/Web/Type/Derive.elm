-- generated automatically by elm-derive

module Derive.Web.Type.Derive exposing (..)

import Json.Encode
import Json.Decode
import Random
import Dict
import Derive.Web.Type exposing (..)

-- encoders -------------------------------------------------------------

encodeModel : Model -> Json.Encode.Value
encodeModel
    = (\value -> Json.Encode.object 
        [ ("source", Json.Encode.string value.source)
        , ("encoderVisible", Json.Encode.bool value.encoderVisible)
        , ("decoderVisible", Json.Encode.bool value.decoderVisible)
        , ("loadStorageVisible", Json.Encode.bool value.loadStorageVisible)
        ])

-- decoders -------------------------------------------------------------

decodeModel : Json.Decode.Decoder Model
decodeModel = Json.Decode.map4 Model
    (Json.Decode.field "source" (Json.Decode.string))
    (Json.Decode.field "encoderVisible" (Json.Decode.bool))
    (Json.Decode.field "decoderVisible" (Json.Decode.bool))
    (Json.Decode.field "loadStorageVisible" (Json.Decode.bool))


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

generateModel : Context -> Model
generateModel context = 
    { source = "hoge", encoderVisible = False, decoderVisible = False, loadStorageVisible = False }
