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
import Process
import SyntaxHighlight
import Task
import Time


sampleSource : String
sampleSource =
    """{- 
**elm-derive** is an experimental code generator for Elm. 
Put your great type definitions below and elm-derive will cook it.
You can use the following types as a field type:

* Primitive Types (Int/Float/String/Bool/Char)
* Custom Types / Records / Tuple / Unit
* List a / Array a / Set comparable / Dict String a
* Maybe a / Result err ok

elm-derive has a CLI. Try the following command in your terminal:

    $ npx aratama/elm-derive src/Your/Some/Module.Elm

See https://github.com/aratama/elm-derive for more information.
Have fun at Meta-programming in Elm! 
-}

module Example exposing (..)

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
"""


type alias Model =
    { source : String
    , lastInputTIme : Time.Posix
    , rendered : List (Html.Html Msg)
    }


type Msg
    = Input String
    | Now Time.Posix
    | Derive Time.Posix


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Input s ->
            ( { model | source = s }, Task.perform Now Time.now )

        Now now ->
            ( { model | lastInputTIme = now }, Task.perform Derive (Task.andThen (always Time.now) (Process.sleep 1000)) )

        Derive now ->
            if 500 <= Time.posixToMillis now - Time.posixToMillis model.lastInputTIme then
                ( { model | rendered = render model.source }, Cmd.none )

            else
                ( model, Cmd.none )


render : String -> List (Html.Html Msg)
render source =
    case Elm.Parser.parse source of
        Err err ->
            [ Html.pre [ class "syntactic-error" ]
                [ Html.text <|
                    unlines
                        [ "Syntactic Error: "
                        , ""
                        , unlines <| List.map (Parser.Extra.deadEndToString source) err
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


main : Program () Model Msg
main =
    Browser.element
        { init =
            always
                ( { source = sampleSource
                  , lastInputTIme = Time.millisToPosix 0
                  , rendered = render sampleSource
                  }
                , Cmd.none
                )
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }


view : Model -> Html.Html Msg
view model =
    Html.div [ class "root" ]
        [ SyntaxHighlight.useTheme SyntaxHighlight.oneDark
        , Html.div [ class "left" ]
            [ Html.textarea [ Html.Events.onInput Input ] [ Html.text <| model.source ]
            ]
        , Html.div [ class "right" ] model.rendered
        ]
