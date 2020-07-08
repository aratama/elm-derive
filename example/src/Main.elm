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
import TodoList exposing (Id, Model, Visibility(..))
import TodoList.Derive


type Msg
    = Input String
    | Add Time.Posix
    | ChangeVisibility String
    | CheckCompleted Id Bool
    | RequestTime


main : Program Json.Encode.Value Model Msg
main =
    Browser.element
        { init =
            \flag ->
                case Json.Decode.decodeValue TodoList.Derive.decodeModel flag of
                    Err _ ->
                        ( { tasks = [], field = "", visibility = Active }, Cmd.none )

                    Ok model ->
                        ( model, Cmd.none )
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }


withSave : ( Model, Cmd Msg ) -> ( Model, Cmd Msg )
withSave ( model, cmd ) =
    ( model, Cmd.batch [ save <| TodoList.Derive.encodeModel model, cmd ] )


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

        ChangeVisibility visibility ->
            withSave
                ( { model
                    | visibility = Maybe.withDefault model.visibility <| stringToVisibility visibility
                  }
                , Cmd.none
                )

        CheckCompleted id completed ->
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
            , Html.div [] <|
                List.map
                    (\visibility ->
                        Html.label []
                            [ Html.input
                                [ Html.type_ "radio"
                                , Html.name "visibility"
                                , Html.value <| visibilityToString visibility
                                , Html.onInput ChangeVisibility
                                , Html.checked <| model.visibility == visibility
                                ]
                                []
                            , Html.text <| showVisibility visibility
                            ]
                    )
                    [ All, Active, Completed ]
            ]
        , Html.table [] <|
            List.map
                (\task ->
                    Html.tr []
                        [ Html.td [] [ Html.input [ Html.type_ "checkbox", Html.checked task.completed, Html.onCheck (CheckCompleted task.id) ] [] ]
                        , Html.td [] [ Html.text task.description ]
                        , Html.td [] [ Html.text <| Iso8601.fromTime <| Time.millisToPosix task.posix ]
                        ]
                )
                (case model.visibility of
                    All ->
                        model.tasks

                    Active ->
                        List.filter (not << .completed) model.tasks

                    Completed ->
                        List.filter .completed model.tasks
                )
        ]


visibilityToString : Visibility -> String
visibilityToString visibility =
    Json.Encode.encode 2 <| TodoList.Derive.encodeVisibility visibility


stringToVisibility : String -> Maybe Visibility
stringToVisibility str =
    Result.toMaybe <| Json.Decode.decodeString TodoList.Derive.decodeVisibility str


showVisibility : Visibility -> String
showVisibility visibility =
    case visibility of
        All ->
            "All"

        Active ->
            "Active"

        Completed ->
            "Completed"


port save : Json.Encode.Value -> Cmd msg
