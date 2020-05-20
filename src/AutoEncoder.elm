module AutoEncoder exposing (run)

import AutoEncoder.LocalStorage
import AutoEncoder.Parser
import AutoEncoder.Type exposing (..)
import Parser


run source =
    Parser.run AutoEncoder.Parser.parser source
