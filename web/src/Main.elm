module Main exposing (main)

import Browser
import Gencode
import Gencode.Decoder
import Gencode.Encoder
import Gencode.Generator
import Gencode.Type exposing (..)
import Gencode.Util
import Gencode.Web.Type
import Gencode.Web.Type.Gencode
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
-- elm-gencode has a CLI. Try the following command in your terminal:
-- 
-- $ npx aratama/elm-gencode src/Type/TodoList.Elm
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

type Vector = Vector { x: Float, y: Float }
"""


type alias Model =
    { source : String }


type Msg
    = Input String


update msg model =
    case msg of
        Input s ->
            { model | source = s }


encode : Gencode.Web.Type.Model -> Json.Encode.Value
encode m =
    Gencode.Web.Type.Gencode.encodeModel m


decode : Json.Encode.Value -> Result Json.Decode.Error Gencode.Web.Type.Model
decode value =
    Json.Decode.decodeValue Gencode.Web.Type.Gencode.decodeModel value


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
            [ Html.div [ class "generated" ]
                [ SyntaxHighlight.elm (String.trim model.source)
                    |> Result.map (SyntaxHighlight.toBlockHtml (Just 1))
                    |> Result.withDefault
                        (Html.pre [] [ Html.code [] [ Html.text (String.trim model.source) ] ])
                ]
            , Html.textarea [ Html.Events.onInput Input ] [ Html.text <| String.trim model.source ]
            ]
        , Html.div [] <|
            case Gencode.run model.source of
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
                    let
                        r : Result Gencode.Util.Error String
                        r =
                            List.foldl
                                (\generator current ->
                                    case current of
                                        Err err ->
                                            Err err

                                        Ok generated ->
                                            case generator result of
                                                Err err ->
                                                    Err err

                                                Ok generated_ ->
                                                    Ok <| generated ++ "\n" ++ generated_ ++ "\n"
                                )
                                (Ok "")
                                [ Gencode.Encoder.generateEncoder
                                , Gencode.Decoder.generateDecoder
                                , Gencode.Generator.generateGenerator
                                ]
                    in
                    [ case r of
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
