-- generated automatically by elm-autoencoder
module AutoEncoder.Web.Type.Encode exposing (..)

import Json.Encode
import AutoEncoder.Web.Type exposing (..)

encodeModel : Model -> Json.Encode.Value
encodeModel value = Json.Encode.object
    [ ("source", Json.Encode.string value.source)
    , ("encoderVisible", Json.Encode.bool value.encoderVisible)
    , ("decoderVisible", Json.Encode.bool value.decoderVisible)
    , ("loadStorageVisible", Json.Encode.bool value.loadStorageVisible)
    ]
