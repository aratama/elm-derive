module TodoList.Derive exposing (..)
-- This module is generated by elm-derive, do not edit this manually
import Dict  
import Html  
import Html.Attributes  
import Json.Encode  
import Json.Decode  
import Json.Decode.Extra  
import Random  
import Random.Extra  
import Array  
import Set  
import TodoList  exposing (..)

encodeId : Id -> Json.Encode.Value
encodeId  =
    Json.Encode.int

encodeTask : Task -> Json.Encode.Value
encodeTask  =
    (\value0 -> Json.Encode.object [("id", encodeId value0.id), ("description", Json.Encode.string value0.description), ("posix", Json.Encode.int value0.posix), ("completed", Json.Encode.bool value0.completed)])

encodeTodoList : TodoList -> Json.Encode.Value
encodeTodoList  =
    (\value0 -> Json.Encode.object [("tasks", (Json.Encode.list encodeTask) value0.tasks), ("field", Json.Encode.string value0.field), ("showCompleted", Json.Encode.bool value0.showCompleted)])

decodeId : Json.Decode.Decoder Id
decodeId  =
    Json.Decode.int

decodeTask : Json.Decode.Decoder Task
decodeTask  =
    (Json.Decode.succeed (\id description posix completed -> {id = id, description = description, posix = posix, completed = completed}) |> Json.Decode.Extra.andMap (Json.Decode.field "id" decodeId) |> Json.Decode.Extra.andMap (Json.Decode.field "description" Json.Decode.string) |> Json.Decode.Extra.andMap (Json.Decode.field "posix" Json.Decode.int) |> Json.Decode.Extra.andMap (Json.Decode.field "completed" Json.Decode.bool))

decodeTodoList : Json.Decode.Decoder TodoList
decodeTodoList  =
    (Json.Decode.succeed (\tasks field showCompleted -> {tasks = tasks, field = field, showCompleted = showCompleted}) |> Json.Decode.Extra.andMap (Json.Decode.field "tasks" (Json.Decode.list decodeTask)) |> Json.Decode.Extra.andMap (Json.Decode.field "field" Json.Decode.string) |> Json.Decode.Extra.andMap (Json.Decode.field "showCompleted" Json.Decode.bool))

randomId : Random.Generator Id
randomId  =
    randomInt

randomTask : Random.Generator Task
randomTask  =
    (Random.constant (\id description posix completed -> {id = id, description = description, posix = posix, completed = completed}) |> Random.Extra.andMap randomId |> Random.Extra.andMap randomString |> Random.Extra.andMap randomInt |> Random.Extra.andMap Random.Extra.bool)

randomTodoList : Random.Generator TodoList
randomTodoList  =
    (Random.constant (\tasks field showCompleted -> {tasks = tasks, field = field, showCompleted = showCompleted}) |> Random.Extra.andMap (randomList randomTask) |> Random.Extra.andMap randomString |> Random.Extra.andMap Random.Extra.bool)

compareId : Id -> (Id -> Order)
compareId  =
    compare

compareTask : Task -> (Task -> Order)
compareTask  =
    (\lhs0 rhs0 -> case compareId lhs0.id rhs0.id of
      EQ  ->
        case compare lhs0.description rhs0.description of
          EQ  ->
            case compare lhs0.posix rhs0.posix of
              EQ  ->
                compareBool lhs0.completed rhs0.completed
              o2 ->
                o2
          o1 ->
            o1
      o0 ->
        o0)

compareTodoList : TodoList -> (TodoList -> Order)
compareTodoList  =
    (\lhs0 rhs0 -> case (compareList compareTask) lhs0.tasks rhs0.tasks of
      EQ  ->
        case compare lhs0.field rhs0.field of
          EQ  ->
            compareBool lhs0.showCompleted rhs0.showCompleted
          o1 ->
            o1
      o0 ->
        o0)

viewId : Id -> Html.Html msg
viewId  =
    viewInt

viewTask : Task -> Html.Html msg
viewTask  =
    (\value0 -> Html.table [] [Html.tbody [] [Html.tr [] [Html.td [] [Html.text "id"], Html.td [] [viewId value0.id]], Html.tr [] [Html.td [] [Html.text "description"], Html.td [] [viewString value0.description]], Html.tr [] [Html.td [] [Html.text "posix"], Html.td [] [viewInt value0.posix]], Html.tr [] [Html.td [] [Html.text "completed"], Html.td [] [viewBool value0.completed]]]])

viewTodoList : TodoList -> Html.Html msg
viewTodoList  =
    (\value0 -> Html.table [] [Html.tbody [] [Html.tr [] [Html.td [] [Html.text "tasks"], Html.td [] [(viewList viewTask) value0.tasks]], Html.tr [] [Html.td [] [Html.text "field"], Html.td [] [viewString value0.field]], Html.tr [] [Html.td [] [Html.text "showCompleted"], Html.td [] [viewBool value0.showCompleted]]]])

decodeChar : Json.Decode.Decoder Char
decodeChar  =
    Json.Decode.andThen (\str -> case String.toList str of
      [c] ->
        Json.Decode.succeed c
      _ ->
        Json.Decode.fail "decodeChar: too many charactors for Char type")
     Json.Decode.string

decodeResult : Json.Decode.Decoder err -> (Json.Decode.Decoder ok -> Json.Decode.Decoder (Result err ok))
decodeResult errDecoder okDecoder =
    Json.Decode.andThen (\tag -> case tag of
      "Err" ->
        Json.Decode.map Err (Json.Decode.field "a" errDecoder)
      "Ok" ->
        Json.Decode.map Ok (Json.Decode.field "a" okDecoder)
      _ ->
        Json.Decode.fail ("decodeResult: Invalid tag name: " ++ tag))
     (Json.Decode.field "tag" Json.Decode.string)

encodeMaybe : (a -> Json.Encode.Value) -> (Maybe a -> Json.Encode.Value)
encodeMaybe f encodeMaybeValue =
    case encodeMaybeValue of
      Nothing  ->
        Json.Encode.null
      Just justValue ->
        f justValue

encodeChar : Char -> Json.Encode.Value
encodeChar value =
    Json.Encode.string (String.fromChar value)

encodeResult : (err -> Json.Encode.Value) -> ((ok -> Json.Encode.Value) -> (Result err ok -> Json.Encode.Value))
encodeResult errEncoder okEncoder value =
    case value of
      Err err ->
        Json.Encode.object [("tag", Json.Encode.string "Err"), ("a", errEncoder err)]
      Ok ok ->
        Json.Encode.object [("tag", Json.Encode.string "Ok"), ("a", okEncoder ok)]

randomInt : Random.Generator Int
randomInt  =
    Random.int 0 100

randomString : Random.Generator String
randomString  =
    Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomChar : Random.Generator Char
randomChar  =
    Random.uniform 'a' (String.toList "bcdefghijklmnopqlstuvwxyz")

randomFloat : Random.Generator Float
randomFloat  =
    Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen =
    Random.andThen (\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomArray : Random.Generator a -> Random.Generator (Array.Array a)
randomArray gen =
    Random.map Array.fromList (randomList gen)

randomSet : Random.Generator comparable -> Random.Generator (Set.Set comparable)
randomSet gen =
    Random.map Set.fromList (randomList gen)

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen =
    Random.map Dict.fromList (randomList (Random.map2 (\k v -> (k, v)) randomString gen))

viewList : (a -> Html.Html msg) -> (List a -> Html.Html msg)
viewList f xs =
    Html.table []
     [Html.caption [] [Html.text "List"]
    , Html.tbody [] (List.indexedMap (\i x -> Html.tr [] [Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]]) xs)]

viewArray : (a -> Html.Html msg) -> (Array.Array a -> Html.Html msg)
viewArray f xs =
    viewList f (Array.toList xs)

viewSet : (a -> Html.Html msg) -> (Set.Set a -> Html.Html msg)
viewSet f xs =
    viewList f (Set.toList xs)

viewMaybe : (a -> Html.Html msg) -> (Maybe a -> Html.Html msg)
viewMaybe f m =
    case m of
      Nothing  ->
        Html.div [Html.Attributes.class "elm-derive-maybe"] [Html.text "null"]
      Just a ->
        Html.div [Html.Attributes.class "elm-derive-maybe"] [f a]

viewResult : (err -> Html.Html msg) -> ((ok -> Html.Html msg) -> (Result err ok -> Html.Html msg))
viewResult errView okView value =
    case value of
      Err err ->
        Html.div [Html.Attributes.class "elm-derive-result"] [errView err]
      Ok ok ->
        Html.div [Html.Attributes.class "elm-derive-result"] [okView ok]

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

viewChar : Char -> Html.Html msg
viewChar value =
    Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromChar value]

viewFloat : Float -> Html.Html msg
viewFloat value =
    Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromFloat value]

viewDict : (a -> Html.Html msg) -> (Dict.Dict String a -> Html.Html msg)
viewDict f dict =
    Html.table []
     [Html.caption [] [Html.text "Dict"]
    , Html.tbody [] (List.map (\(k, v) -> Html.tr [] [Html.td [] [Html.text k], Html.td [] [f v]]) (Dict.toList dict))]

viewTuple : (a -> Html.Html msg) -> ((b -> Html.Html msg) -> ((a, b) -> Html.Html msg))
viewTuple fa fb (a, b) =
    Html.table []
     [Html.caption [] [Html.text "Dict"]
    , Html.tbody []
     [Html.tr []
     [Html.td [] [Html.text "fst"]
    , Html.td [] [fa a]]
    , Html.tr []
     [Html.td [] [Html.text "snd"]
    , Html.td [] [fb b]]]]

compareList : (a -> (a -> Order)) -> (List a -> (List a -> Order))
compareList f lhs rhs =
    case (lhs, rhs) of
      ([], []) ->
        EQ
      (x :: xs, []) ->
        GT
      ([], y :: ys) ->
        LT
      (x :: xs, y :: ys) ->
        case f x y of
          EQ  ->
            compareList f xs ys
          ret ->
            ret

compareMaybe : (a -> (a -> Order)) -> (Maybe a -> (Maybe a -> Order))
compareMaybe f lhs rhs =
    case (lhs, rhs) of
      (Nothing , Nothing ) ->
        EQ
      (Nothing , Just _) ->
        GT
      (Just _, Nothing ) ->
        LT
      (Just x, Just y) ->
        f x y

compareBool : Bool -> (Bool -> Order)
compareBool lhs rhs =
    case (lhs, rhs) of
      (False , False ) ->
        EQ
      (False , True ) ->
        LT
      (True , False ) ->
        GT
      (True , True ) ->
        EQ

compareSet : (comparable -> (comparable -> Order)) -> (Set.Set comparable -> (Set.Set comparable -> Order))
compareSet f lhs rhs =
    compareList f (Set.toList lhs) (Set.toList rhs)

compareArray : (a -> (a -> Order)) -> (Array.Array a -> (Array.Array a -> Order))
compareArray f lhs rhs =
    compareList f (Array.toList lhs) (Array.toList rhs)

compareDict : (a -> (a -> Order)) -> (Dict.Dict comparable a -> (Dict.Dict comparable a -> Order))
compareDict f lhs rhs =
    compareList (\ls rs -> compareTuple compare f ls rs) (Dict.toList lhs) (Dict.toList rhs)

compareTuple : (a -> (a -> Order)) -> ((b -> (b -> Order)) -> ((a, b) -> ((a, b) -> Order)))
compareTuple f g (la, lb) (ra, rb) =
    case f la ra of
      EQ  ->
        g lb rb
      ord ->
        ord

compareResult : (err -> (err -> Order)) -> ((ok -> (ok -> Order)) -> (Result err ok -> (Result err ok -> Order)))
compareResult f g lhs rhs =
    case (lhs, rhs) of
      (Err l, Err r) ->
        f l r
      (Err _, _) ->
        LT
      (_, Err _) ->
        GT
      (Ok l, Ok r) ->
        g l r