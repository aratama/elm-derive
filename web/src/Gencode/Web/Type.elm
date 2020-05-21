module Gencode.Web.Type exposing (..)


type alias Model =
    { source : String
    , encoderVisible : Bool
    , decoderVisible : Bool
    , loadStorageVisible : Bool
    }
