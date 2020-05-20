-- generated automatically by elm-autoencoder
module AutoEncoder.Web.Type.Decode exposing (..)

import Json.Decode
import AutoEncoder.Web.Type exposing (..)

decodeModel : Json.Decode.Decoder Model
decodeModel = Json.Decode.map4 Model
    (Json.Decode.field "source" Json.Decode.string)
    (Json.Decode.field "encoderVisible" Json.Decode.bool)
    (Json.Decode.field "decoderVisible" Json.Decode.bool)
    (Json.Decode.field "loadStorageVisible" Json.Decode.bool)
