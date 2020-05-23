module Derive exposing (run)

import Derive.Parser
import Derive.Type exposing (..)
import Parser


run source =
    Parser.run Derive.Parser.parser source
