module Main exposing (main)

import Derive
import Derive.Decoder
import Derive.Encoder
import List.Extra as List
import Parser exposing (Problem(..))
import Parser.Extra
import Platform
import Port


type alias Model =
    { source : String }


type Msg
    = Input String


type alias Flag =
    String


update msg model =
    case msg of
        Input s ->
            ( { model | source = s }, Cmd.none )


main : Program Flag Model Msg
main =
    Platform.worker
        { init =
            \source ->
                ( { source = source }
                , Cmd.batch
                    [ Port.outputEncoder <|
                        case Derive.run source of
                            Err err ->
                                String.join "\n" <| List.map (Parser.Extra.deadEndToString source) err

                            Ok result ->
                                let
                                    encoder =
                                        case Derive.Encoder.generateEncoder result of
                                            Err err ->
                                                String.join "\n" <| List.map (\e -> "[Error] " ++ e) err

                                            Ok generated ->
                                                generated

                                    decoder =
                                        case Derive.Decoder.generateDecoder result of
                                            Err err ->
                                                String.join "\n" <| List.map (\e -> "[Error] " ++ e) err

                                            Ok generated ->
                                                generated
                                in
                                encoder ++ decoder
                    ]
                )
        , update = update
        , subscriptions = \model -> Sub.none
        }
