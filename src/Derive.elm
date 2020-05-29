module Derive exposing (generate, run)

import Derive.Decoder
import Derive.Encoder
import Derive.Generator
import Derive.Html
import Derive.Parser
import Derive.Type exposing (Module)
import Derive.Util exposing (Error, unlines)
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
        , "import Html"
        , "import Html.Attributes"
        , "import " ++ String.join "." mod.name ++ " exposing (..)"
        , ""
        ]


generate : Module -> Result Error String
generate mod =
    List.foldl
        (Result.map2 (\a b -> b ++ "\n" ++ a ++ "\n"))
        (Ok <| header mod)
        [ Derive.Encoder.generateEncoder mod
        , Derive.Decoder.generateDecoder mod
        , Derive.Generator.generateGenerator mod
        , Derive.Html.generateViewModule mod

        --, Derive.Eq.generateEq mod
        ]
