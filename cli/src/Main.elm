module Main exposing (main)

import Derive
import Derive.Util exposing (..)
import Elm.Parser
import Elm.Processing
import Elm.Writer
import List.Extra as List
import Parser exposing (Problem(..))
import Parser.Extra
import Platform
import Port


main : Program String {} a
main =
    Platform.worker
        { init =
            \source ->
                ( {}
                , Port.outputEncoder <|
                    case Elm.Parser.parse source of
                        Err err ->
                            { tag = "Parse Error", value = unlines <| List.map (Parser.Extra.deadEndToString source) err }

                        Ok rawFile ->
                            let
                                file =
                                    Elm.Processing.process Elm.Processing.init rawFile

                                result =
                                    Derive.generate file
                            in
                            case result of
                                Err err ->
                                    { tag = "Generation Error", value = String.join " " err }

                                Ok generated ->
                                    { tag = "ok", value = Elm.Writer.write (Elm.Writer.writeFile generated) }
                )
        , update = \_ model -> ( model, Cmd.none )
        , subscriptions = always Sub.none
        }
