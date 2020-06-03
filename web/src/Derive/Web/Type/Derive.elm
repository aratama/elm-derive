module Derive.Web.Type.Derive exposing (..)
import Dict  
import Html  
import Html.Attributes  
import Json.Encode  
import Json.Decode  
import Random  
import Derive.Web.Type  exposing (..)

randomBool : Random.Generator Bool
randomBool  =
    Random.uniform True [False]

randomInt : Random.Generator Int
randomInt  =
    Random.int 0 100

randomString : Random.Generator String
randomString  =
    Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomFloat : Random.Generator Float
randomFloat  =
    Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen =
    Random.andThen (\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
randomMaybe gen =
    Random.andThen (\n -> Random.uniform Nothing [Just n]) gen

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen =
    Random.map Dict.fromList (randomList (Random.map2 (\k v -> (k, v)) randomString gen))

randomModel : Random.Generator Model
randomModel  =
    Random.map4 (\source encoderVisible decoderVisible loadStorageVisible -> {source = source, encoderVisible = encoderVisible, decoderVisible = decoderVisible, loadStorageVisible = loadStorageVisible}) randomString randomBool randomBool randomBool