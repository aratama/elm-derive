module Main exposing (..)

import Browser
import Html
import Random
import TodoList
import TodoList.Derive


type Msg
    = Generated TodoList.Model


type alias Model =
    Maybe TodoList.Model


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> ( Nothing, Random.generate Generated TodoList.Derive.generateModel )
        , view = view
        , update =
            \msg _ ->
                case msg of
                    Generated initial ->
                        ( Just initial, Cmd.none )
        , subscriptions = \_ -> Sub.none
        }


view : Model -> Html.Html msg
view maybeModel =
    case maybeModel of
        Nothing ->
            Html.div [] []

        Just model ->
            Html.article []
                [ Html.h1 [] [ Html.text "Todo List" ]
                , TodoList.Derive.viewModel model
                ]


viewTask : TodoList.Task -> Html.Html msg
viewTask task =
    Html.li [] [ Html.text <| String.fromInt task.id ]
