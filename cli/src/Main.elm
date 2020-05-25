module Main exposing (main)

import Derive
import Derive.Util exposing (..)
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
                    case Derive.run source of
                        Err err ->
                            { tag = "Parse Error", value = unlines <| List.map (Parser.Extra.deadEndToString source) err }

                        Ok mod ->
                            case Derive.generate mod of
                                Err err ->
                                    { tag = "Generation Error", value = String.join " " err }

                                Ok generated ->
                                    { tag = "ok", value = generated }
                )
        , update = \_ model -> ( model, Cmd.none )
        , subscriptions = always Sub.none
        }
