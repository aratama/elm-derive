module Main exposing (main)

import Browser
import Derive
import Derive.Decoder
import Derive.Encoder
import Derive.Generator
import Derive.Type exposing (..)
import Derive.Util
import Derive.Web.Type
import Derive.Web.Type.Derive
import Html
import Html.Attributes exposing (class)
import Html.Events
import Json.Decode
import Json.Encode
import List.Extra as List
import Parser exposing (Problem(..))
import Parser.Extra
import SyntaxHighlight


sampleSource : String
sampleSource =
    """-- # Elm Encoder/Decoder Auto Generator (Prototype)
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
-- 
-- elm-derive has a CLI. Try the following command in your terminal:
-- 
-- $ npx aratama/elm-derive src/Type/TodoList.Elm
-- 
-- Have fun at Elm programming!

module TodoList.Type exposing (..)

import Maybe exposing (..)
import Dict exposing (..)

type alias TodoList =
    { tasks : List Task
    , field : String
    , uid : Int
    , visibility : String
    }

type alias Task = 
    { description : String
    , completed : Bool
    , edits : (Maybe String)
    , id : Int
    }

type Tree 
    = Leaf String 
    | Branch Tree Tree


type Color = Red | Green | Blue

type Vector = Vector { x: Float, y: Float }"""


type alias Model =
    { source : String }


type Msg
    = Input String


update msg model =
    case msg of
        Input s ->
            { model | source = s }


encode : Derive.Web.Type.Model -> Json.Encode.Value
encode m =
    Derive.Web.Type.Derive.encodeModel m


decode : Json.Encode.Value -> Result Json.Decode.Error Derive.Web.Type.Model
decode value =
    Json.Decode.decodeValue Derive.Web.Type.Derive.decodeModel value


main : Program () Model Msg
main =
    Browser.sandbox
        { init = { source = sampleSource }
        , view = view
        , update = update
        }


errorToString err =
    let
        total =
            List.length err
    in
    String.join "\n" <| List.indexedMap (\i e -> "Error (" ++ String.fromInt i ++ " / " ++ String.fromInt total ++ "):\n " ++ e ++ "\n") err


view : Model -> Html.Html Msg
view model =
    Html.div [ class "root" ]
        [ SyntaxHighlight.useTheme SyntaxHighlight.oneDark
        , Html.div [ class "left" ]
            [ Html.textarea [ Html.Events.onInput Input ] [ Html.text <| model.source ]
            ]
        , Html.div [ class "right" ] <|
            case Derive.run model.source of
                Err err ->
                    [ Html.pre [ class "syntactic-error" ]
                        [ Html.text <|
                            String.join "\n"
                                [ "Syntactic Error: "
                                , ""
                                , String.join "\n" <| List.map (Parser.Extra.deadEndToString model.source) err
                                ]
                        ]
                    ]

                Ok result ->
                    [ case Derive.generate result of
                        Err err ->
                            Html.pre [ class "generation-error" ] [ Html.text <| errorToString err ]

                        Ok generated ->
                            Html.div [ class "generated" ]
                                [ SyntaxHighlight.elm generated
                                    |> Result.map (SyntaxHighlight.toBlockHtml (Just 1))
                                    |> Result.withDefault
                                        (Html.pre [] [ Html.code [] [ Html.text generated ] ])
                                ]
                    ]
        ]


showCode generator result =
    case generator result of
        Err err ->
            Html.pre [ class "generation-error" ] [ Html.text <| errorToString err ]

        Ok generated ->
            Html.div [ class "generated" ]
                [ SyntaxHighlight.elm generated
                    |> Result.map (SyntaxHighlight.toBlockHtml (Just 1))
                    |> Result.withDefault
                        (Html.pre [] [ Html.code [] [ Html.text generated ] ])
                ]
