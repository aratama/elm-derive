module Main exposing (..)

import Browser
import Html
import Json.Decode
import Json.Encode
import Port
import Random
import TodoList exposing (..)
import TodoList.Derive


type Msg
    = Generated TodoList


main : Program Json.Encode.Value (Maybe TodoList) Msg
main =
    Browser.element
        { init =
            \flag ->
                case Json.Decode.decodeValue TodoList.Derive.decodeTodoList flag of
                    Err _ ->
                        ( Nothing, Random.generate Generated TodoList.Derive.generateTodoList )

                    Ok todoList ->
                        ( Just todoList, Cmd.none )
        , view = view
        , update =
            \msg model ->
                case msg of
                    Generated initial ->
                        ( Just initial, Port.save <| TodoList.Derive.encodeTodoList initial )
        , subscriptions = \_ -> Sub.none
        }


view : Maybe TodoList -> Html.Html msg
view maybeTodoList =
    case maybeTodoList of
        Nothing ->
            Html.text ""

        Just todoList ->
            Html.article []
                [ Html.h1 [] [ Html.text "Todo List" ]
                , TodoList.Derive.viewTodoList todoList
                ]
