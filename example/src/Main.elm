port module Main exposing (..)

import Browser
import Html
import Json.Decode
import Json.Encode
import Random
import TodoList exposing (..)
import TodoList.Derive


type Msg
    = Generated TodoList


type alias Model =
    Maybe TodoList


port save : Json.Encode.Value -> Cmd msg


main : Program Json.Encode.Value Model Msg
main =
    Browser.element
        { init =
            \flag ->
                case Json.Decode.decodeValue TodoList.Derive.decodeTodoList flag of
                    Err _ ->
                        ( Nothing, Random.generate Generated TodoList.Derive.randomTodoList )

                    Ok todoList ->
                        ( Just todoList, Cmd.none )
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg _ =
    case msg of
        Generated todoList ->
            ( Just todoList, save <| TodoList.Derive.encodeTodoList todoList )


view : Model -> Html.Html msg
view maybeTodoList =
    case maybeTodoList of
        Nothing ->
            Html.text "Loading..."

        Just todoList ->
            TodoList.Derive.viewTodoList todoList
