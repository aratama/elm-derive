module TodoList.Derive exposing (..)
import Json.Encode  
import Json.Decode  
import Random  
import TodoList  exposing (..)

encodeTask : Task -> Json.Encode.Value
encodeTask  =
    (\value -> Json.Encode.object [("id", Json.Encode.int value.id), ("description", Json.Encode.string value.description), ("completed", Json.Encode.bool value.completed)])

encodeTodoList : TodoList -> Json.Encode.Value
encodeTodoList  =
    (\value -> Json.Encode.object [("tasks", (Json.Encode.list encodeTask) value.tasks), ("field", Json.Encode.string value.field)])

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

decodeTask : Json.Decode.Decoder Task
decodeTask  =
    Json.Decode.map3 Task (Json.Decode.int) (Json.Decode.string) (Json.Decode.bool)

decodeTodoList : Json.Decode.Decoder TodoList
decodeTodoList  =
    Json.Decode.map2 TodoList ((Json.Decode.list decodeTask)) (Json.Decode.string)

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