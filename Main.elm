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

source : String
source = """-- # Elm Encoder/Decoder Auto Generator (Prototype)
-- 
-- Put your great type definitions below.
-- This generator supports a subset of Elm syntax.
-- Note that you can define only type aliases of object as the module member.
--
-- And you can use the following types as a field type:
--
-- * Primitive Types (Int/Float/String/Bool)
-- * List a
-- * Dict String a 
-- * Maybe a

module TodoList.Type exposing (..)

import Maybe exposing (..)
import Dict exposing (..)

type alias Task = 
    { description : String
    , completed : Bool
    , edits : Maybe String
    , id : Int
    }

type alias Model =
    { tasks : List Task
    , field : String
    , uid : Int
    , visibility : String
    }
"""

type alias Model = { source : String }

type Msg = Input String

update msg model = case msg of 
    Input s -> { model | source = s }

main : Program () Model Msg
main = Browser.sandbox 
    { init = { source = source }
    , view = view
    , update = update 
    }


deadEndToString src deadEnd = "(" ++ String.fromInt deadEnd.row ++ "," ++ String.fromInt deadEnd.col ++  ") " ++ problemToString deadEnd.problem ++ "\n\n" 
    ++ Maybe.withDefault "" (List.getAt ((deadEnd.row - 1) // 2) ( String.lines src))

problemToString problem = case problem of 
    Expecting s -> "Expecting " ++ s 
    ExpectingInt -> "ExpectingInt" 
    ExpectingHex -> "ExpectingHex"
    ExpectingOctal -> "ExpectingOctal" 
    ExpectingBinary -> "ExpectingBinary" 
    ExpectingFloat -> "ExpectingFloat"
    ExpectingNumber -> "ExpectingNumber" 
    ExpectingVariable -> "ExpectingVariable" 
    ExpectingSymbol s -> "ExpectingSymbol `" ++ s ++ "`" 
    ExpectingKeyword s -> "ExpectingKeyword `" ++ s ++ "`"
    ExpectingEnd -> "ExpectingEnd"
    UnexpectedChar -> "UnexpectedChar" 
    Problem s -> "Problem `" ++ s ++ "`" 
    BadRepeat -> "BadRepeat"

view : Model -> Html.Html Msg
view model =  
    Html.div [class "root"] 
        [ Html.textarea [Html.Events.onInput Input ] [Html.text <| String.trim source]
        , Html.div [] <| case AutoEncoder.run model.source of 
            Err err -> 
                [Html.pre [] [Html.text <| String.join "\n" <| List.map (deadEndToString model.source) err ] ]
            Ok result ->
                [
                Html.pre [] [Html.text <| case AutoEncoder.Encoder.generateEncoder result of 
                    Err err -> String.join "\n"  <| List.map (\e -> "[Error] " ++ e) err 
                    Ok generated -> generated]
                , Html.pre [] [Html.text <| case  AutoEncoder.Decoder.generateDecoder result of 
                    Err err -> String.join "\n"  <| List.map (\e -> "[Error] " ++ e) err   
                    Ok generated -> generated]
                ]
        ]   
