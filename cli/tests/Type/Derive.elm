module Type.Derive exposing (..)
import Dict  
import Html  
import Html.Attributes  
import Json.Encode  
import Json.Decode  
import Random  
import Type  exposing (..)

viewTodoList : TodoList -> Html.Html msg
viewTodoList  =
    (\value -> Html.table [] [Html.tbody [] [Html.tr [] [Html.td [] [Html.text "tasks"], Html.td [] [(viewList viewTask) value.tasks]], Html.tr [] [Html.td [] [Html.text "field"], Html.td [] [viewString value.field]], Html.tr [] [Html.td [] [Html.text "uid"], Html.td [] [viewInt value.uid]], Html.tr [] [Html.td [] [Html.text "visibility"], Html.td [] [viewString value.visibility]]]])

viewTask : Task -> Html.Html msg
viewTask  =
    (\value -> Html.table [] [Html.tbody [] [Html.tr [] [Html.td [] [Html.text "description"], Html.td [] [viewString value.description]], Html.tr [] [Html.td [] [Html.text "completed"], Html.td [] [viewBool value.completed]], Html.tr [] [Html.td [] [Html.text "edits"], Html.td [] [(viewMaybe viewString) value.edits]], Html.tr [] [Html.td [] [Html.text "id"], Html.td [] [viewInt value.id]]]])

viewTree : Tree -> Html.Html msg
viewTree  =
    (\customTypeValue -> case customTypeValue of
      Leaf a ->
        Html.table [] [Html.tr [] [viewString a]]
      Branch a b ->
        Html.table [] [Html.tr [] [viewTree a], Html.tr [] [viewTree b]])

viewColor : Color -> Html.Html msg
viewColor  =
    (\customTypeValue -> case customTypeValue of
      Red  ->
        Html.table [] []
      Green  ->
        Html.table [] []
      Blue  ->
        Html.table [] [])

viewVector : Vector -> Html.Html msg
viewVector  =
    (\customTypeValue -> case customTypeValue of
      Vector a ->
        Html.table [] [Html.tr [] [(\value -> Html.table [] [Html.tbody [] [Html.tr [] [Html.td [] [Html.text "x"], Html.td [] [viewFloat value.x]], Html.tr [] [Html.td [] [Html.text "y"], Html.td [] [viewFloat value.y]]]]) a]])

viewGrid : Grid -> Html.Html msg
viewGrid  =
    (viewList (viewList viewInt))

viewDictionary : Dictionary -> Html.Html msg
viewDictionary  =
    (viewDict viewInt)

encodeTodoList : TodoList -> Json.Encode.Value
encodeTodoList  =
    (\value -> Json.Encode.object [("tasks", (Json.Encode.list encodeTask) value.tasks), ("field", Json.Encode.string value.field), ("uid", Json.Encode.int value.uid), ("visibility", Json.Encode.string value.visibility)])

encodeTask : Task -> Json.Encode.Value
encodeTask  =
    (\value -> Json.Encode.object [("description", Json.Encode.string value.description), ("completed", Json.Encode.bool value.completed), ("edits", (Json.Encode.maybe Json.Encode.string) value.edits), ("id", Json.Encode.int value.id)])

encodeTree : Tree -> Json.Encode.Value
encodeTree val =
    case val of
      Leaf a ->
        Json.Encode.object [("tag", Json.Encode.string "Leaf"), ("a", Json.Encode.string a)]
      Branch a b ->
        Json.Encode.object [("tag", Json.Encode.string "Branch"), ("a", encodeTree a), ("b", encodeTree b)]

encodeColor : Color -> Json.Encode.Value
encodeColor val =
    case val of
      Red  ->
        Json.Encode.object [("tag", Json.Encode.string "Red")]
      Green  ->
        Json.Encode.object [("tag", Json.Encode.string "Green")]
      Blue  ->
        Json.Encode.object [("tag", Json.Encode.string "Blue")]

encodeVector : Vector -> Json.Encode.Value
encodeVector val =
    case val of
      Vector a ->
        Json.Encode.object [("tag", Json.Encode.string "Vector"), ("a", (\value -> Json.Encode.object [("x", Json.Encode.float value.x), ("y", Json.Encode.float value.y)]) a)]

encodeGrid : Grid -> Json.Encode.Value
encodeGrid  =
    (Json.Encode.list (Json.Encode.list Json.Encode.int))

encodeDictionary : Dictionary -> Json.Encode.Value
encodeDictionary  =
    (Json.Encode.dict identity Json.Encode.int)

decodeTodoList : Json.Decode.Decoder TodoList
decodeTodoList  =
    Json.Decode.map4 TodoList (Json.Decode.field "tasks" ((Json.Decode.list decodeTask))) (Json.Decode.field "field" (Json.Decode.string)) (Json.Decode.field "uid" (Json.Decode.int)) (Json.Decode.field "visibility" (Json.Decode.string))

decodeTask : Json.Decode.Decoder Task
decodeTask  =
    Json.Decode.map4 Task (Json.Decode.field "description" (Json.Decode.string)) (Json.Decode.field "completed" (Json.Decode.bool)) (Json.Decode.field "edits" ((Json.Decode.maybe Json.Decode.string))) (Json.Decode.field "id" (Json.Decode.int))

decodeTree : Json.Decode.Decoder Tree
decodeTree  =
    Json.Decode.andThen (\tag -> case tag of
      "Leaf" ->
        Json.Decode.field "value" (Json.Decode.map Leaf (Json.Decode.string))
      "Branch" ->
        Json.Decode.field "value" (Json.Decode.map2 Branch (decodeTree) (decodeTree))
      _ ->
        Json.Decode.fail ("Unexpected tag name: " ++ tag)) (Json.Decode.field "tag" Json.Decode.string)

decodeColor : Json.Decode.Decoder Color
decodeColor  =
    Json.Decode.andThen (\tag -> case tag of
      "Red" ->
        Json.Decode.field "value" (Json.Decode.succeed Red)
      "Green" ->
        Json.Decode.field "value" (Json.Decode.succeed Green)
      "Blue" ->
        Json.Decode.field "value" (Json.Decode.succeed Blue)
      _ ->
        Json.Decode.fail ("Unexpected tag name: " ++ tag)) (Json.Decode.field "tag" Json.Decode.string)

decodeVector : Json.Decode.Decoder Vector
decodeVector  =
    Json.Decode.andThen (\tag -> case tag of
      "Vector" ->
        Json.Decode.field "value" (Json.Decode.map Vector (Json.Decode.map2 (\x y -> {x = x, y = y}) (Json.Decode.field "x" Json.Decode.float) (Json.Decode.field "y" Json.Decode.float)))
      _ ->
        Json.Decode.fail ("Unexpected tag name: " ++ tag)) (Json.Decode.field "tag" Json.Decode.string)

decodeGrid : Json.Decode.Decoder Grid
decodeGrid  =
    (Json.Decode.list (Json.Decode.list Json.Decode.int))

decodeDictionary : Json.Decode.Decoder Dictionary
decodeDictionary  =
    (Json.Decode.dict Json.Decode.int)

randomTodoList : Random.Generator TodoList
randomTodoList  =
    (Random.map4 (\tasks field uid visibility -> {tasks = tasks, field = field, uid = uid, visibility = visibility}) (randomList randomTask) randomString randomInt randomString)

randomTask : Random.Generator Task
randomTask  =
    (Random.map4 (\description completed edits id -> {description = description, completed = completed, edits = edits, id = id}) randomString randomBool (randomMaybe randomString) randomInt)

randomTree : Random.Generator Tree
randomTree  =
    let
      
      
      leaf () =
          Random.map Leaf randomString
      
      
      branch () =
          Random.map2 Branch randomTree randomTree
    in
      Random.andThen ((|>) ()) (Random.uniform leaf [branch])

randomColor : Random.Generator Color
randomColor  =
    let
      
      
      red () =
          Random.constant Red
      
      
      green () =
          Random.constant Green
      
      
      blue () =
          Random.constant Blue
    in
      Random.andThen ((|>) ()) (Random.uniform red [green, blue])

randomVector : Random.Generator Vector
randomVector  =
    let
      
      
      vector () =
          Random.map Vector (Random.map2 (\x y -> {x = x, y = y}) randomFloat randomFloat)
    in
      Random.andThen ((|>) ()) (Random.uniform vector [])

randomGrid : Random.Generator Grid
randomGrid  =
    (randomList (randomList randomInt))

randomDictionary : Random.Generator Dictionary
randomDictionary  =
    (randomDict randomInt)

randomBool : Random.Generator Bool
randomBool  =
    Random.uniform True [False]

randomInt : Random.Generator Int
randomInt  =
    Random.int 0 100

randomString : Random.Generator String
randomString  =
    Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomFloat : Random.Generator Float
randomFloat  =
    Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen =
    Random.andThen (\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
randomMaybe gen =
    Random.andThen (\n -> Random.uniform Nothing [Just n]) gen

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen =
    Random.map Dict.fromList (randomList (Random.map2 (\k v -> (k, v)) randomString gen))

viewList : (a -> Html.Html msg) -> (List a -> Html.Html msg)
viewList f xs =
    Html.table []
     [Html.caption [] [Html.text "List"]
    , Html.tbody [] (List.indexedMap (\i x -> Html.tr [] [Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]]) xs)]

viewMaybe : (a -> Html.Html msg) -> (Maybe a -> Html.Html msg)
viewMaybe f m =
    case m of
      Nothing  ->
        Html.div [Html.Attributes.class "elm-derive-maybe"] [Html.text "null"]
      Just a ->
        Html.div [Html.Attributes.class "elm-derive-maybe"] [f a]

viewBool : Bool -> Html.Html msg
viewBool value =
    Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| if value then
      "True"
    else
      "False"]

viewInt : Int -> Html.Html msg
viewInt value =
    Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromInt value]

viewString : String -> Html.Html msg
viewString value =
    Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text value]

viewFloat : Float -> Html.Html msg
viewFloat value =
    Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromFloat value]

viewDict : (a -> Html.Html msg) -> (Dict.Dict String a -> Html.Html msg)
viewDict f dict =
    Html.table []
     [Html.caption [] [Html.text "Dict"]
    , Html.tbody [] (List.map (\(k, v) -> Html.tr [] [Html.td [] [Html.text k], Html.td [] [f v]]) (Dict.toList dict))]