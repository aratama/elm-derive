module Main exposing (main)

import Browser
import Derive
import Derive.Util exposing (..)
import Elm.Parser
import Elm.Processing
import Elm.Writer
import Html
import Html.Attributes exposing (class)
import Html.Events
import List.Extra as List
import Parser exposing (Problem(..))
import Parser.Extra
import SyntaxHighlight


sampleSource : String
sampleSource =
    """{- 
# elm-derive 

elm-derive is an experimental encoder/decoder generator for Elm. 
Put your great type definitions below.
This generator supports a subset of Elm syntax.

And you can use the following types as a field type:

* Primitive Types (Int/Float/String/Bool)
* Records
* List a
* Maybe a
* Dict String a

elm-derive has a CLI. Try the following command in your terminal:

    $ npx aratama/elm-derive src/Your/Some/Module.Elm

See https://github.com/aratama/elm-derive for more information.
Have fun at Meta-programming in Elm! 
-}

module Example exposing (..)

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

type alias Grid = List (List Int)

type alias Dictionary = Dict String Int 
"""


type alias Model =
    { source : String
    }


type Msg
    = Input String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Input s ->
            { model | source = s }


main : Program () Model Msg
main =
    Browser.sandbox
        { init = { source = sampleSource }
        , view = view
        , update = update
        }


view : Model -> Html.Html Msg
view model =
    Html.div [ class "root" ]
        [ SyntaxHighlight.useTheme SyntaxHighlight.oneDark
        , Html.div [ class "left" ]
            [ Html.textarea [ Html.Events.onInput Input ] [ Html.text <| model.source ]
            ]
        , Html.div [ class "right" ] <|
            case Elm.Parser.parse model.source of
                Err err ->
                    [ Html.pre [ class "syntactic-error" ]
                        [ Html.text <|
                            unlines
                                [ "Syntactic Error: "
                                , ""
                                , unlines <| List.map (Parser.Extra.deadEndToString model.source) err
                                ]
                        ]
                    ]

                Ok rawFile ->
                    let
                        file =
                            Elm.Processing.process Elm.Processing.init rawFile

                        result =
                            Derive.generate file
                    in
                    [ case result of
                        Err err ->
                            Html.pre [ class "generation-error" ] [ Html.text <| errorToString err ]

                        Ok generated ->
                            let
                                str =
                                    Elm.Writer.write (Elm.Writer.writeFile generated)
                            in
                            Html.div [ class "generated" ]
                                [ SyntaxHighlight.elm str
                                    |> Result.map (SyntaxHighlight.toBlockHtml (Just 1))
                                    |> Result.withDefault
                                        (Html.pre [] [ Html.code [] [ Html.text str ] ])
                                ]
                    ]
        ]
