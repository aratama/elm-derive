module Main exposing (main)

import Browser
import Derive
import Derive.Util exposing (..)
import Elm.Parser
import Elm.Pretty
import Elm.Processing
import Html exposing (Html, a, div, h1, img, input, label, span, text)
import Html.Attributes exposing (checked, class, href, src, target, type_, value)
import Html.Events exposing (onCheck)
import Json.Decode as Decode
import List.Extra as List
import Parser exposing (Problem(..))
import Parser.Extra
import Process
import Task
import Time


sampleSource : String
sampleSource =
    """{- 
elm-derive is an experimental code generator for Elm. 
Put your great type definitions below and elm-derive will cook it.
You can use the following types as a field type:

* Primitive Types (Int / Float / String / Bool / Char)
* Custom Types / Records / Tuple / Unit
* List a / Array a / Set comparable / Dict String a
* Maybe a / Result err ok

elm-derive has a CLI. Try the following command in your terminal:

    $ npx aratama/elm-derive src/Your/Some/Module.Elm

See https://github.com/aratama/elm-derive for more information.
Have fun :)
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
    , rendered : String
    , options : Derive.Options {}
    , deriveEncode : Bool
    , deriveDecode : Bool
    , deriveRandom : Bool
    , deriveView : Bool
    , deriveCompare : Bool
    }


type Msg
    = Input String
    | Now Time.Posix
    | Derive Time.Posix
    | SetDeriveEncode Bool
    | SetDeriveDecode Bool
    | SetDeriveRandom Bool
    | SetDeriveView Bool
    | SetDeriveCompare Bool


throttle : Int
throttle =
    150


derive : Model -> Model
derive model =
    { model
        | rendered =
            render
                { encode = model.deriveEncode
                , decode = model.deriveDecode
                , random = model.deriveRandom
                , html = model.deriveView
                , ord = model.deriveCompare
                }
                model.source
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Input s ->
            ( { model | source = s }, Task.perform Now Time.now )

        Now now ->
            ( { model | lastInputTIme = now }, Task.perform Derive (Task.andThen (always Time.now) (Process.sleep <| toFloat throttle)) )

        Derive now ->
            if throttle <= Time.posixToMillis now - Time.posixToMillis model.lastInputTIme then
                ( derive model, Cmd.none )

            else
                ( model, Cmd.none )

        SetDeriveEncode val ->
            ( derive { model | deriveEncode = val }, Cmd.none )

        SetDeriveDecode val ->
            ( derive { model | deriveDecode = val }, Cmd.none )

        SetDeriveRandom val ->
            ( derive { model | deriveRandom = val }, Cmd.none )

        SetDeriveView val ->
            ( derive { model | deriveView = val }, Cmd.none )

        SetDeriveCompare val ->
            ( derive { model | deriveCompare = val }, Cmd.none )


render : Derive.Options a -> String -> String
render options source =
    case Elm.Parser.parse source of
        Err err ->
            unlines
                [ "Syntactic Error: "
                , ""
                , unlines <| List.map (Parser.Extra.deadEndToString source) err
                ]

        Ok rawFile ->
            let
                file =
                    Elm.Processing.process Elm.Processing.init rawFile

                result =
                    Derive.generate options file
            in
            case result of
                Err err ->
                    errorToString err

                Ok generated ->
                    Elm.Pretty.pretty 120 generated


main : Program () Model Msg
main =
    let
        options =
            { encode = True
            , decode = True
            , random = True
            , html = True
            , ord = True
            }
    in
    Browser.element
        { init =
            always
                ( { source = sampleSource
                  , lastInputTIme = Time.millisToPosix 0
                  , rendered = render options sampleSource
                  , options = options
                  , deriveEncode = True
                  , deriveDecode = True
                  , deriveRandom = True
                  , deriveView = True
                  , deriveCompare = True
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
        [ Html.div [ class "left" ]
            [ Html.node "code-mirror"
                [ Html.Events.on "code-mirror-input" (Decode.map Input <| Decode.field "detail" Decode.string)
                , Html.Attributes.attribute "value" model.source
                ]
                []
            ]
        , Html.div [ class "right" ]
            [ div [ class "control" ]
                [ div [ class "title" ]
                    [ h1 [] [ text "elm-derive" ]
                    , a [ href "https://twitter.com/intent/tweet?text=elm-derive%3A%20Encoder%2FDecoder%20Generator%20from%20Type%20Definitions&url=https://elm-derive.netlify.app/", target "_blank" ]
                        [ img [ class "share", src "twitter.svg" ] []
                        ]
                    ]
                , div []
                    [ deriveOption "Encode" model.deriveEncode SetDeriveEncode
                    , deriveOption "Decode" model.deriveDecode SetDeriveDecode
                    , deriveOption "Random" model.deriveRandom SetDeriveRandom
                    , deriveOption "View" model.deriveView SetDeriveView
                    , deriveOption "Compare" model.deriveCompare SetDeriveCompare
                    ]
                ]
            , div [ class "rendered" ]
                [ Html.node "code-mirror"
                    [ Html.Attributes.attribute "value" model.rendered
                    , Html.Attributes.attribute "readonly" model.rendered
                    ]
                    []
                ]
            ]
        ]


deriveOption : String -> Bool -> (Bool -> Msg) -> Html Msg
deriveOption str val f =
    span [ class "derive-option" ]
        [ input [ type_ "checkbox", checked val, onCheck f ] []
        , label [] [ text str ]
        ]
