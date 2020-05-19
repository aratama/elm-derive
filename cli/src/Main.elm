module Main exposing (main)

import Browser
import AutoEncoder
import Html
import Html.Attributes exposing (class)
import Html.Events
import AutoEncoder.Encoder
import AutoEncoder.Decoder
import Parser exposing (Problem(..))
import TodoList.Type
import TodoList.Type.Decode
import TodoList.Type.Encode
import List.Extra as List
import Platform
import Port
import Parser.Extra

type alias Model = { source : String }

type Msg = Input String

type alias Flag = String

update msg model = case msg of 
    Input s -> ({ model | source = s }, Cmd.none)

main : Program Flag Model Msg
main = Platform.worker 
    { init = \source -> ({ source = source }, Cmd.batch [
        Port.outputEncoder <| case AutoEncoder.run source of 
            Err err -> 
                String.join "\n" <| List.map (Parser.Extra.deadEndToString source) err
            Ok result ->
                
                case AutoEncoder.Encoder.generateEncoder result of 
                    Err err -> String.join "\n"  <| List.map (\e -> "[Error] " ++ e) err 
                    Ok generated -> generated,


        Port.outputDecoder <| case AutoEncoder.run source of 
            Err err -> 
                String.join "\n" <| List.map (Parser.Extra.deadEndToString source) err
            Ok result ->
                
                case AutoEncoder.Decoder.generateDecoder result of 
                    Err err -> String.join "\n"  <| List.map (\e -> "[Error] " ++ e) err 
                    Ok generated -> generated]
    )
                
    , update = update 
    , subscriptions = \model -> Sub.none
    }


