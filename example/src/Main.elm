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
    = Input String
    | Add Time.Posix
    | Checked Bool
    | Completed Id Bool
    | RequestTime


type alias Model =
    TodoList


port save : Json.Encode.Value -> Cmd msg


withSave : ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
withSave ( model, cmd ) =
    ( model, Cmd.batch [ save <| TodoList.Derive.encodeTodoList model, cmd ] )


main : Program Json.Encode.Value Model Msg
main =
    Browser.element
        { init =
            \flag ->
                case Json.Decode.decodeValue TodoList.Derive.decodeTodoList flag of
                    Err _ ->
                        ( { tasks = [], field = "", showCompleted = False }, Cmd.none )

                    Ok model ->
                        ( model, Cmd.none )
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Input str ->
            withSave ( { model | field = str }, Cmd.none )

        RequestTime ->
            ( model, Task.perform Add Time.now )

        Add posix ->
            let
                task =
                    { id = List.length model.tasks
                    , description = model.field
                    , posix = Time.posixToMillis posix
                    , completed = False
                    }
            in
            withSave
                ( { model
                    | field = ""
                    , tasks = model.tasks ++ [ task ]
                  }
                , Cmd.none
                )

        Checked showCompleted ->
            withSave ( { model | showCompleted = showCompleted }, Cmd.none )

        Completed id completed ->
            withSave
                ( { model
                    | tasks =
                        List.map
                            (\task ->
                                if task.id == id then
                                    { task | completed = completed }

                                else
                                    task
                            )
                            model.tasks
                  }
                , Cmd.none
                )


view : Model -> Html.Html Msg
view model =
    Html.div []
        [ Html.input [ Html.value model.field, Html.onInput Input ] []
        , Html.button [ Html.onClick RequestTime ] [ Html.text "Add" ]
        , Html.label []
            [ Html.input [ Html.type_ "checkbox", Html.onCheck Checked, Html.checked model.showCompleted ] []
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
                (if model.showCompleted then
                    model.tasks

                 else
                    List.filter (not << .completed) model.tasks
                )
        ]
