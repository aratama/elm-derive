module Derive.Web.Type.Derive exposing (..)
import Dict  
import Html  
import Html.Attributes  
import Json.Encode  
import Json.Decode  
import Random  
import Derive.Web.Type  exposing (..)

encodeModel : Model -> Json.Encode.Value
encodeModel  =
    (\value -> Json.Encode.object [("source", Json.Encode.string value.source), ("encoderVisible", Json.Encode.bool value.encoderVisible), ("decoderVisible", Json.Encode.bool value.decoderVisible), ("loadStorageVisible", Json.Encode.bool value.loadStorageVisible)])

decodeModel : Json.Decode.Decoder Model
decodeModel  =
    Json.Decode.map4 Model (Json.Decode.string) (Json.Decode.bool) (Json.Decode.bool) (Json.Decode.bool)