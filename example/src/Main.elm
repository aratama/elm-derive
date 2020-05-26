module Main exposing (..)

import TodoList
import Browser 

import TodoList
import TodoList.Derive
import Random
import Html

main : Program () TodoList.Model ()
main = case Random.step TodoList.Derive.generateModel (Random.initialSeed 42) of 
    (initial, _) ->
        Browser.element 
            { init = \flags -> (initial, Cmd.none )
            , view = view
            , update = \msg model -> ( model, Cmd.none )
            , subscriptions = \_ -> Sub.none
            }



view : TodoList.Model -> Html.Html msg 
view model = Html.ul [] (List.map viewTask model.tasks)


viewTask : TodoList.Task -> Html.Html msg 
viewTask task = Html.li [] [Html.text <| String.fromInt task.id]