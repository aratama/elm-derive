module Gencode exposing (run)

import Gencode.Parser
import Gencode.Type exposing (..)
import Parser


run source =
    Parser.run Gencode.Parser.parser source
