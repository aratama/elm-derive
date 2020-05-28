-- generated automatically by elm-derive

module TodoList.Derive exposing (..)

import Dict
import Json.Encode
import Json.Decode
import Random
import Html
import Html.Attributes
import TodoList exposing (..)

-- encoders -------------------------------------------------------------

encodeTask : Task -> Json.Encode.Value
encodeTask
    = (\value -> Json.Encode.object 
        [ ("id", Json.Encode.int value.id)
        , ("description", Json.Encode.string value.description)
        , ("completed", Json.Encode.bool value.completed)
        ])

encodeTodoList : TodoList -> Json.Encode.Value
encodeTodoList
    = (\value -> Json.Encode.object 
        [ ("tasks", (Json.Encode.list encodeTask) value.tasks)
        , ("field", Json.Encode.string value.field)
        , ("dict", encodeDictionary value.dict)
        ])

encodeDictionary : Dictionary -> Json.Encode.Value
encodeDictionary
    = (Json.Encode.dict identity Json.Encode.int)

-- decoders -------------------------------------------------------------

decodeTask : Json.Decode.Decoder Task
decodeTask = Json.Decode.map3 Task
    (Json.Decode.field "id" (Json.Decode.int))
    (Json.Decode.field "description" (Json.Decode.string))
    (Json.Decode.field "completed" (Json.Decode.bool))

decodeTodoList : Json.Decode.Decoder TodoList
decodeTodoList = Json.Decode.map3 TodoList
    (Json.Decode.field "tasks" ((Json.Decode.list decodeTask)))
    (Json.Decode.field "field" (Json.Decode.string))
    (Json.Decode.field "dict" (decodeDictionary))

decodeDictionary : Json.Decode.Decoder Dictionary
decodeDictionary = (Json.Decode.dict Json.Decode.int)



-- sample data geenerators ----------------------------------"

generateBool : Random.Generator Bool 
generateBool = Random.uniform True [False]

generateInt : Random.Generator Int
generateInt = Random.int 0 100

generateString : Random.Generator String 
generateString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

generateFloat : Random.Generator Float
generateFloat = Random.float 0 1

generateList : Random.Generator a -> Random.Generator (List a)
generateList gen = Random.andThen (\n -> Random.list (3 + n) gen) (Random.int 0 7)

generateMaybe : Random.Generator a -> Random.Generator (Maybe a)
generateMaybe gen = Random.andThen (\n -> Random.uniform Nothing [Just n]) gen

generateDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
generateDict gen = Random.map Dict.fromList (generateList (Random.map2 (\k v -> (k, v)) generateString gen))

generateTask : Random.Generator Task
generateTask = 
    Random.map3 (\id description completed -> { id = id, description = description, completed = completed }) 
        (generateInt)
        (generateString)
        (generateBool)

generateTodoList : Random.Generator TodoList
generateTodoList = 
    Random.map3 (\tasks field dict -> { tasks = tasks, field = field, dict = dict }) 
        ((generateList generateTask))
        (generateString)
        (generateDictionary)

generateDictionary : Random.Generator Dictionary
generateDictionary = 
    (generateDict generateInt)



viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
viewList f xs = Html.table [] 
    [ Html.caption [] [Html.text "List"]
    , Html.tbody [] (List.indexedMap (\i x -> Html.tr [] [ Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]   ]) xs)
    ]

viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg
viewMaybe f m = case m of 
    Nothing -> Html.div [Html.Attributes.class "elm-derive-maybe"] [Html.text "null"]
    Just a -> Html.div [Html.Attributes.class "elm-derive-maybe"] [f a]

viewBool : Bool -> Html.Html msg
viewBool value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| if value then "True" else "False"]

viewInt : Int -> Html.Html msg
viewInt value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromInt value]

viewString : String -> Html.Html msg
viewString value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text value]

viewFloat : Float -> Html.Html msg
viewFloat value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromFloat value]

viewDict : (a -> Html.Html msg) -> Dict.Dict String a -> Html.Html msg
viewDict f dict = Html.table [] 
    [ Html.caption [] [Html.text "Dict"]
    , Html.tbody [] (List.map (\(k, v) -> Html.tr [] [Html.td [] [Html.text k], Html.td [] [f v]]) (Dict.toList dict))
    ]

viewTask : Task -> Html.Html msg
viewTask = 
    (\value -> Html.table [] [
        Html.caption [] [Html.text "Record"], Html.tbody [] 
        [ Html.tr []
            [ Html.td [] [Html.text <| "id"]
            , Html.td [] [viewInt value.id]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "description"]
            , Html.td [] [viewString value.description]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "completed"]
            , Html.td [] [viewBool value.completed]
            ]
        ]
    ])

viewTodoList : TodoList -> Html.Html msg
viewTodoList = 
    (\value -> Html.table [] [
        Html.caption [] [Html.text "Record"], Html.tbody [] 
        [ Html.tr []
            [ Html.td [] [Html.text <| "tasks"]
            , Html.td [] [(viewList viewTask) value.tasks]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "field"]
            , Html.td [] [viewString value.field]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "dict"]
            , Html.td [] [viewDictionary value.dict]
            ]
        ]
    ])

viewDictionary : Dictionary -> Html.Html msg
viewDictionary = 
    (viewDict viewInt)

