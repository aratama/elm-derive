module Derive exposing (..)

import Derive.Decoder
import Derive.Encoder
import Derive.Generator
import Derive.Parser
import Derive.Type exposing (..)
import Derive.Util exposing (..)
import Parser


run source =
    Parser.run Derive.Parser.parser source


header : Module -> String
header mod =
    unlines
        [ "-- generated automatically by elm-derive"
        , ""
        , "module " ++ String.join "." mod.name ++ ".Derive exposing (..)"
        , ""
        , "import Json.Encode"
        , "import Json.Decode"
        , "import Random"
        , "import Dict"
        , "import " ++ String.join "." mod.name ++ " exposing (..)"
        , ""
        ]


generate : Module -> Result Error String
generate mod =
    List.foldl
        (\generator current ->
            Result.map2 (\a b -> b ++ "\n" ++ a ++ "\n") generator current
        )
        (Ok <| header mod)
        [ Derive.Encoder.generateEncoder mod
        , Derive.Decoder.generateDecoder mod
        , Derive.Generator.generateGenerator mod
        ]
