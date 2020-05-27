-- generated automatically by elm-derive

module TodoList.Derive exposing (..)

import Dict
import Json.Encode
import Json.Decode
import Random
import Html
import Html.Attributes
import TodoList exposing (..)

viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
viewList f xs = Html.table [] [Html.caption [] [Html.text "List"], Html.tbody [] (List.indexedMap (\i x -> Html.tr [] [ Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]   ]) xs)]

viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg
viewMaybe f m = case m of 
    Nothing -> Html.div [] [Html.text "null"]
    Just a -> f a

viewBool : Bool -> Html.Html msg
viewBool value = Html.input [Html.Attributes.value <| if value then "True" else "False"] []

viewInt : Int -> Html.Html msg
viewInt value = Html.input [Html.Attributes.value <| String.fromInt value] []

viewString : String -> Html.Html msg
viewString value = Html.input [Html.Attributes.value value] []

viewFloat : Float -> Html.Html msg
viewFloat value = Html.input [Html.Attributes.value <| String.fromFloat value] []

viewTask : Task -> Html.Html msg
viewTask value = 
    Html.table [] [
        Html.caption [] [Html.text "typeToString TODO"], Html.tbody [] 
        [ Html.tr []
            [ Html.td [] [Html.text <| "description"]
            , Html.td [] [viewString value.description]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "completed"]
            , Html.td [] [viewBool value.completed]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "edits"]
            , Html.td [] [viewMaybe viewString value.edits]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "id"]
            , Html.td [] [viewInt value.id]
            ]
        ]
    ]

viewModel : Model -> Html.Html msg
viewModel value = 
    Html.table [] [
        Html.caption [] [Html.text "typeToString TODO"], Html.tbody [] 
        [ Html.tr []
            [ Html.td [] [Html.text <| "tasks"]
            , Html.td [] [viewList viewTask value.tasks]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "field"]
            , Html.td [] [viewString value.field]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "uid"]
            , Html.td [] [viewInt value.uid]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "visibility"]
            , Html.td [] [viewString value.visibility]
            ]
        ]
    ]



-- sample data geenerators ----------------------------------"

generateBool : Random.Generator Bool 
generateBool = Random.uniform True [False]

generateInt : Random.Generator Int
generateInt = Random.int 0 100

generateString : Random.Generator String 
generateString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "GOlf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

generateFloat : Random.Generator Float
generateFloat = Random.float 0 1


generateTask : Random.Generator Task
generateTask = 
    Random.map4 (\description completed edits id -> { description = description, completed = completed, edits = edits, id = id }) 
        (generateString)
        (generateBool)
        ((Random.andThen (\n -> Random.uniform Nothing [Just n]) generateString))
        (generateInt)

generateModel : Random.Generator Model
generateModel = 
    Random.map4 (\tasks field uid visibility -> { tasks = tasks, field = field, uid = uid, visibility = visibility }) 
        (Random.andThen (\n -> Random.list (3 + n) (generateTask)) (Random.int 0 7))
        (generateString)
        (generateInt)
        (generateString)

-- encoders -------------------------------------------------------------

encodeTask : Task -> Json.Encode.Value
encodeTask
    = (\value -> Json.Encode.object 
        [ ("description", Json.Encode.string value.description)
        , ("completed", Json.Encode.bool value.completed)
        , ("edits", (Maybe.withDefault Json.Encode.null << Maybe.map Json.Encode.string) value.edits)
        , ("id", Json.Encode.int value.id)
        ])

encodeModel : Model -> Json.Encode.Value
encodeModel
    = (\value -> Json.Encode.object 
        [ ("tasks", Json.Encode.list encodeTask value.tasks)
        , ("field", Json.Encode.string value.field)
        , ("uid", Json.Encode.int value.uid)
        , ("visibility", Json.Encode.string value.visibility)
        ])

-- decoders -------------------------------------------------------------

decodeTask : Json.Decode.Decoder Task
decodeTask = Json.Decode.map4 Task
    (Json.Decode.field "description" (Json.Decode.string))
    (Json.Decode.field "completed" (Json.Decode.bool))
    (Json.Decode.field "edits" ((Json.Decode.maybe Json.Decode.string)))
    (Json.Decode.field "id" (Json.Decode.int))

decodeModel : Json.Decode.Decoder Model
decodeModel = Json.Decode.map4 Model
    (Json.Decode.field "tasks" ((Json.Decode.list decodeTask)))
    (Json.Decode.field "field" (Json.Decode.string))
    (Json.Decode.field "uid" (Json.Decode.int))
    (Json.Decode.field "visibility" (Json.Decode.string))

