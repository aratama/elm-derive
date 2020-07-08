port module Main exposing (..)

import Browser
import Browser.Events exposing (Visibility)
import Html
import Html.Attributes as Html
import Html.Events as Html
import Iso8601
import Json.Decode
import Json.Encode
import Task
import Time
import TodoList exposing (Id, TodoList, Visibility(..))
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
                        ( { tasks = [], field = "", visibility = Active }, Cmd.none )

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
                    , tasks = task :: model.tasks
                  }
                , Cmd.none
                )

        Checked checked ->
            withSave
                ( { model
                    | visibility =
                        if checked then
                            All

                        else
                            Active
                  }
                , Cmd.none
                )

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
        [ Html.div [ Html.class "upper" ]
            [ Html.div []
                [ Html.input [ Html.class "field", Html.value model.field, Html.onInput Input, Html.placeholder "What needs to be done?" ] []
                , Html.button [ Html.onClick RequestTime ] [ Html.text "Add" ]
                ]
            , Html.label []
                [ Html.input
                    [ Html.type_ "checkbox"
                    , Html.onCheck Checked
                    , Html.checked <|
                        case model.visibility of
                            All ->
                                True

                            Active ->
                                False
                    ]
                    []
                , Html.text "Show Completed"
                ]
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
                (case model.visibility of
                    All ->
                        model.tasks

                    Active ->
                        List.filter (not << .completed) model.tasks
                )
        ]
