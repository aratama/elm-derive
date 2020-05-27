module Derive exposing (..)

import Derive.Decoder
import Derive.Encoder
import Derive.Eq
import Derive.Generator
import Derive.Html
import Derive.Parser
import Derive.Show
import Derive.Type exposing (..)
import Derive.Util exposing (..)
import Parser


run : String -> Result (List Parser.DeadEnd) Module
run source =
    Parser.run Derive.Parser.parser source


header : Module -> String
header mod =
    unlines
        [ "-- generated automatically by elm-derive"
        , ""
        , "module " ++ String.join "." mod.name ++ ".Derive exposing (..)"
        , ""
        , "import Dict"
        , "import Json.Encode"
        , "import Json.Decode"
        , "import Random"
        , "import " ++ String.join "." mod.name ++ " exposing (..)"
        , ""
        ]


generate : Module -> Result Error String
generate mod =
    List.foldl
        (Result.map2 (\a b -> b ++ "\n" ++ a ++ "\n"))
        (Ok <| header mod)
        [ Derive.Html.generateViewModule mod
        , Derive.Generator.generateGenerator mod
        , Derive.Encoder.generateEncoder mod
        , Derive.Decoder.generateDecoder mod

        --, Derive.Eq.generateEq mod
        --, Derive.Show.generateShow mod
        ]
