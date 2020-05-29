-- generated automatically by elm-derive

module TodoList.Derive exposing (..)

import Dict
import Html
import Html.Attributes
import Json.Encode
import Json.Decode
import Json.Decode.Pipeline
import Random
import Random.Extra
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
        ])

encodeTree : Tree -> Json.Encode.Value
encodeTree variant
    = case variant of
        Leaf a -> Json.Encode.object
            [ ("tag", Json.Encode.string "Leaf")
            , ("a", Json.Encode.string a)
            ]
        Branch a b -> Json.Encode.object
            [ ("tag", Json.Encode.string "Branch")
            , ("a", encodeTree a)
            , ("b", encodeTree b)
            ]

encodeColor : Color -> Json.Encode.Value
encodeColor variant
    = case variant of
        Red -> Json.Encode.string "Red"
        Green -> Json.Encode.string "Green"
        Blue -> Json.Encode.string "Blue"

encodeVector : Vector -> Json.Encode.Value
encodeVector variant
    = case variant of
        Vector a -> Json.Encode.object
            [ ("tag", Json.Encode.string "Vector")
            , ("a", (\value -> Json.Encode.object 
                    [ ("x", Json.Encode.float value.x)
                    , ("y", Json.Encode.float value.y)
                    ]) a)
            ]

encodeGrid : Grid -> Json.Encode.Value
encodeGrid
    = (Json.Encode.list (Json.Encode.list Json.Encode.int))

encodeDictionary : Dictionary -> Json.Encode.Value
encodeDictionary
    = (Json.Encode.dict identity Json.Encode.int)

-- decoders -------------------------------------------------------------

decodeTask : Json.Decode.Decoder Task
decodeTask = Json.Decode.map Task (Json.Decode.int)
    |> andMap (Json.Decode.string)
    |> andMap (Json.Decode.bool)

decodeTodoList : Json.Decode.Decoder TodoList
decodeTodoList = Json.Decode.map TodoList ((Json.Decode.list decodeTask))
    |> andMap (Json.Decode.string)

decodeTree : Json.Decode.Decoder Tree
decodeTree = Json.Decode.field "tag" Json.Decode.string |> Json.Decode.andThen
    (\tag -> case tag of
        "Leaf" -> Json.Decode.map Leaf (Json.Decode.string)
            
        "Branch" -> Json.Decode.map Branch (decodeTree)
            |> andMap (decodeTree)
        _ -> Json.Decode.fail ("Unexpected tag name: " ++ tag)
    )

decodeColor : Json.Decode.Decoder Color
decodeColor = Json.Decode.string |> Json.Decode.andThen
    (\variant -> case variant of
        "Red" -> Json.Decode.succeed Red
        "Green" -> Json.Decode.succeed Green
        "Blue" -> Json.Decode.succeed Blue
        _ -> Json.Decode.fail ("Unexpected Variant: " ++ variant)
    )

decodeVector : Json.Decode.Decoder Vector
decodeVector = Json.Decode.field "tag" Json.Decode.string |> Json.Decode.andThen
    (\tag -> case tag of
        "Vector" -> Json.Decode.map Vector (Json.Decode.map  (\x y -> { x = x, y = y })  ((Json.Decode.field "x" (Json.Decode.float)))
            |> andMap ((Json.Decode.field "y" (Json.Decode.float))))
            
        _ -> Json.Decode.fail ("Unexpected tag name: " ++ tag)
    )

decodeGrid : Json.Decode.Decoder Grid
decodeGrid = (Json.Decode.list (Json.Decode.list Json.Decode.int))

decodeDictionary : Json.Decode.Decoder Dictionary
decodeDictionary = (Json.Decode.dict Json.Decode.int)



andMap : Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
andMap =
    Json.Decode.map2 (|>)



-- random data generators ----------------------------------"

randomBool : Random.Generator Bool 
randomBool = Random.uniform True [False]

randomInt : Random.Generator Int
randomInt = Random.int 0 100

randomString : Random.Generator String 
randomString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomFloat : Random.Generator Float
randomFloat = Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen = Random.andThen (\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
randomMaybe gen = Random.andThen (\n -> Random.uniform Nothing [Just n]) gen

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen = Random.map Dict.fromList (randomList (Random.map2 (\k v -> (k, v)) randomString gen))


randomTask : Random.Generator Task
randomTask = 
    Random.map  (\id description completed -> { id = id, description = description, completed = completed })  (randomInt)
        |> Random.Extra.andMap (randomString)
        |> Random.Extra.andMap (randomBool)

randomTodoList : Random.Generator TodoList
randomTodoList = 
    Random.map  (\tasks field -> { tasks = tasks, field = field })  ((randomList randomTask))
        |> Random.Extra.andMap (randomString)

randomTree : Random.Generator Tree
randomTree = 
    let
        leaf () = Random.map Leaf (randomString)
            
        branch () = Random.map Branch (randomTree)
            |> Random.Extra.andMap (randomTree)
    in
        Random.uniform leaf [branch]
            |> Random.andThen ((|>) ())

randomColor : Random.Generator Color
randomColor = 
    let
        red () = Random.constant Red
        green () = Random.constant Green
        blue () = Random.constant Blue
    in
        Random.uniform red [green, blue]
            |> Random.andThen ((|>) ())

randomVector : Random.Generator Vector
randomVector = 
    let
        vector () = Random.map Vector (Random.map  (\x y -> { x = x, y = y })  (randomFloat)
            |> Random.Extra.andMap (randomFloat))
            
    in
        Random.constant vector
            |> Random.andThen ((|>) ())

randomGrid : Random.Generator Grid
randomGrid = 
    (randomList (randomList randomInt))

randomDictionary : Random.Generator Dictionary
randomDictionary = 
    (randomDict randomInt)



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
        ]
    ])

viewTree : Tree -> Html.Html msg
viewTree = 
    \typeValue -> Html.div [Html.Attributes.class "elm-derive-type"] <|
        case typeValue of
            Leaf a -> 
                [ Html.div [Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-0"] [ Html.text "Leaf"]
                , Html.div [Html.Attributes.class "elm-derive-variant-fields"]
                    [ viewString a
                    
                    ]
                ]
            Branch a b -> 
                [ Html.div [Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-1"] [ Html.text "Branch"]
                , Html.div [Html.Attributes.class "elm-derive-variant-fields"]
                    [ viewTree a
                    , viewTree b
                    ]
                ]

viewColor : Color -> Html.Html msg
viewColor = 
    \typeValue -> Html.div [Html.Attributes.class "elm-derive-type"] <|
        case typeValue of
            Red  -> 
                [ Html.div [Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-0"] [ Html.text "Red"]
                , Html.div [Html.Attributes.class "elm-derive-variant-fields"]
                    []
                ]
            Green  -> 
                [ Html.div [Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-1"] [ Html.text "Green"]
                , Html.div [Html.Attributes.class "elm-derive-variant-fields"]
                    []
                ]
            Blue  -> 
                [ Html.div [Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-2"] [ Html.text "Blue"]
                , Html.div [Html.Attributes.class "elm-derive-variant-fields"]
                    []
                ]

viewVector : Vector -> Html.Html msg
viewVector = 
    \typeValue -> Html.div [Html.Attributes.class "elm-derive-type"] <|
        case typeValue of
            Vector a -> 
                [ Html.div [Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-0"] [ Html.text "Vector"]
                , Html.div [Html.Attributes.class "elm-derive-variant-fields"]
                    [ (\value -> Html.table [] [
                        Html.caption [] [Html.text "Record"], Html.tbody [] 
                        [ Html.tr []
                            [ Html.td [] [Html.text <| "x"]
                            , Html.td [] [viewFloat value.x]
                            ]
                        , Html.tr []
                            [ Html.td [] [Html.text <| "y"]
                            , Html.td [] [viewFloat value.y]
                            ]
                        ]
                    ]) a
                    
                    ]
                ]

viewGrid : Grid -> Html.Html msg
viewGrid = 
    (viewList (viewList viewInt))

viewDictionary : Dictionary -> Html.Html msg
viewDictionary = 
    (viewDict viewInt)

