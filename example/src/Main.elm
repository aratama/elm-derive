port module Main exposing (..)

import Browser
import Html
import Html.Attributes as Html
import Html.Events as Html
import Iso8601
import Json.Decode
import Json.Encode
import Random
import Task
import Time
import TodoList exposing (..)
import TodoList.Derive


type Msg
    = Generated TodoList
    | Input String
    | Add Time.Posix
    | Checked Bool
    | Completed Id Bool
    | RequestTime


type alias Model =
    Maybe TodoList


port save : Json.Encode.Value -> Cmd msg


withSave : ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
withSave ( model, cmd ) =
    case model of
        Just todoList ->
            ( model, Cmd.batch [ save <| TodoList.Derive.encodeTodoList todoList, cmd ] )

        _ ->
            ( model, cmd )


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
update msg model =
    case msg of
        Generated todoList ->
            withSave ( Just todoList, Cmd.none )

        Input str ->
            case model of
                Just todoList ->
                    withSave ( Just { todoList | field = str }, Cmd.none )

                _ ->
                    ( model, Cmd.none )

        RequestTime ->
            ( model, Task.perform Add Time.now )

        Add posix ->
            case model of
                Just todoList ->
                    let
                        task =
                            { id = List.length todoList.tasks
                            , description = todoList.field
                            , posix = Time.posixToMillis posix
                            , completed = False
                            }
                    in
                    withSave
                        ( Just
                            { todoList
                                | field = ""
                                , tasks = todoList.tasks ++ [ task ]
                            }
                        , Cmd.none
                        )

                _ ->
                    ( model, Cmd.none )

        Checked showCompleted ->
            case model of
                Just todoList ->
                    withSave ( Just { todoList | showCompleted = showCompleted }, Cmd.none )

                _ ->
                    ( model, Cmd.none )

        Completed id completed ->
            case model of
                Just todoList ->
                    withSave
                        ( Just
                            { todoList
                                | tasks =
                                    List.map
                                        (\task ->
                                            if task.id == id then
                                                { task | completed = completed }

                                            else
                                                task
                                        )
                                        todoList.tasks
                            }
                        , Cmd.none
                        )

                _ ->
                    ( model, Cmd.none )


view : Model -> Html.Html Msg
view maybeTodoList =
    case maybeTodoList of
        Nothing ->
            Html.text "Loading..."

        Just todoList ->
            Html.div []
                [ Html.input [ Html.value todoList.field, Html.onInput Input ] []
                , Html.button [ Html.onClick RequestTime ] [ Html.text "Add" ]
                , Html.label []
                    [ Html.input [ Html.type_ "checkbox", Html.onCheck Checked, Html.checked todoList.showCompleted ] []
                    , Html.text "Show Completed"
                    ]
                , Html.table [] <|
                    List.map
                        (\task ->
                            Html.tr []
                                [ Html.td [] [ Html.input [ Html.type_ "checkbox", Html.checked task.completed, Html.onCheck (Completed task.id) ] [] ]
                                , Html.td [] [ Html.text task.description ]
                                , Html.td [] [ Html.text <| Iso8601.fromTime <| Time.millisToPosix task.posix ]
                                ]
                        )
                        (if todoList.showCompleted then
                            todoList.tasks

                         else
                            List.filter (not << .completed) todoList.tasks
                        )
                ]
