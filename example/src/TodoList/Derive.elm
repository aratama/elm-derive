-- generated automatically by elm-derive


module TodoList.Derive exposing (..)

import Dict
import Html
import Html.Attributes
import Json.Decode
import Json.Decode.Pipeline
import Json.Encode
import Random
import Random.Extra
import TodoList exposing (..)



-- encoders -------------------------------------------------------------


encodeTask : Task -> Json.Encode.Value
encodeTask =
    \value ->
        Json.Encode.object
            [ ( "id", Json.Encode.int value.id )
            , ( "description", Json.Encode.string value.description )
            , ( "completed", Json.Encode.bool value.completed )
            ]


encodeTodoList : TodoList -> Json.Encode.Value
encodeTodoList =
    \value ->
        Json.Encode.object
            [ ( "tasks", Json.Encode.list encodeTask value.tasks )
            , ( "field", Json.Encode.string value.field )
            ]


encodeTree : Tree -> Json.Encode.Value
encodeTree variant =
    case variant of
        Leaf a ->
            Json.Encode.object
                [ ( "tag", Json.Encode.string "Leaf" )
                , ( "a", Json.Encode.string a )
                ]

        Branch a b ->
            Json.Encode.object
                [ ( "tag", Json.Encode.string "Branch" )
                , ( "a", encodeTree a )
                , ( "b", encodeTree b )
                ]


encodeColor : Color -> Json.Encode.Value
encodeColor variant =
    case variant of
        Red ->
            Json.Encode.string "Red"

        Green ->
            Json.Encode.string "Green"

        Blue ->
            Json.Encode.string "Blue"


encodeVector : Vector -> Json.Encode.Value
encodeVector variant =
    case variant of
        Vector a ->
            Json.Encode.object
                [ ( "tag", Json.Encode.string "Vector" )
                , ( "a"
                  , (\value ->
                        Json.Encode.object
                            [ ( "x", Json.Encode.float value.x )
                            , ( "y", Json.Encode.float value.y )
                            ]
                    )
                        a
                  )
                ]


encodeGrid : Grid -> Json.Encode.Value
encodeGrid =
    Json.Encode.list (Json.Encode.list Json.Encode.int)


encodeDictionary : Dictionary -> Json.Encode.Value
encodeDictionary =
    Json.Encode.dict identity Json.Encode.int


encodeMany : Many -> Json.Encode.Value
encodeMany =
    \value ->
        Json.Encode.object
            [ ( "a", Json.Encode.int value.a )
            , ( "b", Json.Encode.string value.b )
            , ( "c", Json.Encode.float value.c )
            , ( "d", Json.Encode.bool value.d )
            , ( "e", Json.Encode.int value.e )
            , ( "f", Json.Encode.string value.f )
            , ( "g", Json.Encode.float value.g )
            , ( "h", Json.Encode.bool value.h )
            , ( "i", Json.Encode.int value.i )
            , ( "j", Json.Encode.string value.j )
            , ( "k", Json.Encode.float value.k )
            , ( "l", Json.Encode.bool value.l )
            , ( "m", Json.Encode.int value.m )
            , ( "n", Json.Encode.string value.n )
            , ( "o", Json.Encode.float value.o )
            , ( "p", Json.Encode.bool value.p )
            , ( "q", Json.Encode.int value.q )
            , ( "r", Json.Encode.string value.r )
            , ( "s", Json.Encode.float value.s )
            , ( "t", Json.Encode.bool value.t )
            ]



-- decoders -------------------------------------------------------------


decodeTask : Json.Decode.Decoder Task
decodeTask =
    Json.Decode.succeed Task
        |> Json.Decode.Pipeline.required "id" Json.Decode.int
        |> Json.Decode.Pipeline.required "description" Json.Decode.string
        |> Json.Decode.Pipeline.required "completed" Json.Decode.bool


decodeTodoList : Json.Decode.Decoder TodoList
decodeTodoList =
    Json.Decode.succeed TodoList
        |> Json.Decode.Pipeline.required "tasks" (Json.Decode.list decodeTask)
        |> Json.Decode.Pipeline.required "field" Json.Decode.string


decodeTree : Json.Decode.Decoder Tree
decodeTree =
    Json.Decode.field "tag" Json.Decode.string
        |> Json.Decode.andThen
            (\tag ->
                case tag of
                    "Leaf" ->
                        Json.Decode.map Leaf Json.Decode.string

                    "Branch" ->
                        Json.Decode.map Branch decodeTree
                            |> andMap decodeTree

                    _ ->
                        Json.Decode.fail ("Unexpected tag name: " ++ tag)
            )


decodeColor : Json.Decode.Decoder Color
decodeColor =
    Json.Decode.string
        |> Json.Decode.andThen
            (\variant ->
                case variant of
                    "Red" ->
                        Json.Decode.succeed Red

                    "Green" ->
                        Json.Decode.succeed Green

                    "Blue" ->
                        Json.Decode.succeed Blue

                    _ ->
                        Json.Decode.fail ("Unexpected Variant: " ++ variant)
            )


decodeVector : Json.Decode.Decoder Vector
decodeVector =
    Json.Decode.field "tag" Json.Decode.string
        |> Json.Decode.andThen
            (\tag ->
                case tag of
                    "Vector" ->
                        Json.Decode.map Vector
                            (Json.Decode.map (\x y -> { x = x, y = y }) (Json.Decode.field "x" Json.Decode.float)
                                |> andMap (Json.Decode.field "y" Json.Decode.float)
                            )

                    _ ->
                        Json.Decode.fail ("Unexpected tag name: " ++ tag)
            )


decodeGrid : Json.Decode.Decoder Grid
decodeGrid =
    Json.Decode.list (Json.Decode.list Json.Decode.int)


decodeDictionary : Json.Decode.Decoder Dictionary
decodeDictionary =
    Json.Decode.dict Json.Decode.int


decodeMany : Json.Decode.Decoder Many
decodeMany =
    Json.Decode.succeed Many
        |> Json.Decode.Pipeline.required "a" Json.Decode.int
        |> Json.Decode.Pipeline.required "b" Json.Decode.string
        |> Json.Decode.Pipeline.required "c" Json.Decode.float
        |> Json.Decode.Pipeline.required "d" Json.Decode.bool
        |> Json.Decode.Pipeline.required "e" Json.Decode.int
        |> Json.Decode.Pipeline.required "f" Json.Decode.string
        |> Json.Decode.Pipeline.required "g" Json.Decode.float
        |> Json.Decode.Pipeline.required "h" Json.Decode.bool
        |> Json.Decode.Pipeline.required "i" Json.Decode.int
        |> Json.Decode.Pipeline.required "j" Json.Decode.string
        |> Json.Decode.Pipeline.required "k" Json.Decode.float
        |> Json.Decode.Pipeline.required "l" Json.Decode.bool
        |> Json.Decode.Pipeline.required "m" Json.Decode.int
        |> Json.Decode.Pipeline.required "n" Json.Decode.string
        |> Json.Decode.Pipeline.required "o" Json.Decode.float
        |> Json.Decode.Pipeline.required "p" Json.Decode.bool
        |> Json.Decode.Pipeline.required "q" Json.Decode.int
        |> Json.Decode.Pipeline.required "r" Json.Decode.string
        |> Json.Decode.Pipeline.required "s" Json.Decode.float
        |> Json.Decode.Pipeline.required "t" Json.Decode.bool


andMap : Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
andMap =
    Json.Decode.map2 (|>)



-- random data generators ----------------------------------"


randomBool : Random.Generator Bool
randomBool =
    Random.uniform True [ False ]


randomInt : Random.Generator Int
randomInt =
    Random.int 0 100


randomString : Random.Generator String
randomString =
    Random.uniform "Alpha" [ "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu" ]


randomFloat : Random.Generator Float
randomFloat =
    Random.float 0 1


randomList : Random.Generator a -> Random.Generator (List a)
randomList gen =
    Random.andThen (\n -> Random.list (3 + n) gen) (Random.int 0 7)


randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
randomMaybe gen =
    Random.andThen (\n -> Random.uniform Nothing [ Just n ]) gen


randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen =
    Random.map Dict.fromList (randomList (Random.map2 (\k v -> ( k, v )) randomString gen))


randomTask : Random.Generator Task
randomTask =
    Random.map (\id description completed -> { id = id, description = description, completed = completed }) randomInt
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap randomBool


randomTodoList : Random.Generator TodoList
randomTodoList =
    Random.map (\tasks field -> { tasks = tasks, field = field }) (randomList randomTask)
        |> Random.Extra.andMap randomString


randomTree : Random.Generator Tree
randomTree =
    let
        leaf () =
            Random.map Leaf randomString

        branch () =
            Random.map Branch randomTree
                |> Random.Extra.andMap randomTree
    in
    Random.uniform leaf [ branch ]
        |> Random.andThen ((|>) ())


randomColor : Random.Generator Color
randomColor =
    let
        red () =
            Random.constant Red

        green () =
            Random.constant Green

        blue () =
            Random.constant Blue
    in
    Random.uniform red [ green, blue ]
        |> Random.andThen ((|>) ())


randomVector : Random.Generator Vector
randomVector =
    let
        vector () =
            Random.map Vector
                (Random.map (\x y -> { x = x, y = y }) randomFloat
                    |> Random.Extra.andMap randomFloat
                )
    in
    Random.constant vector
        |> Random.andThen ((|>) ())


randomGrid : Random.Generator Grid
randomGrid =
    randomList (randomList randomInt)


randomDictionary : Random.Generator Dictionary
randomDictionary =
    randomDict randomInt


randomMany : Random.Generator Many
randomMany =
    Random.map (\a b c d e f g h i j k l m n o p q r s t -> { a = a, b = b, c = c, d = d, e = e, f = f, g = g, h = h, i = i, j = j, k = k, l = l, m = m, n = n, o = o, p = p, q = q, r = r, s = s, t = t }) randomInt
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap randomFloat
        |> Random.Extra.andMap randomBool
        |> Random.Extra.andMap randomInt
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap randomFloat
        |> Random.Extra.andMap randomBool
        |> Random.Extra.andMap randomInt
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap randomFloat
        |> Random.Extra.andMap randomBool
        |> Random.Extra.andMap randomInt
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap randomFloat
        |> Random.Extra.andMap randomBool
        |> Random.Extra.andMap randomInt
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap randomFloat
        |> Random.Extra.andMap randomBool


viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
viewList f xs =
    Html.table []
        [ Html.caption [] [ Html.text "List" ]
        , Html.tbody [] (List.indexedMap (\i x -> Html.tr [] [ Html.td [] [ Html.text <| String.fromInt i ], Html.td [] [ f x ] ]) xs)
        ]


viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg
viewMaybe f m =
    case m of
        Nothing ->
            Html.div [ Html.Attributes.class "elm-derive-maybe" ] [ Html.text "null" ]

        Just a ->
            Html.div [ Html.Attributes.class "elm-derive-maybe" ] [ f a ]


viewBool : Bool -> Html.Html msg
viewBool value =
    Html.div [ Html.Attributes.class "elm-derive-primitive" ]
        [ Html.text <|
            if value then
                "True"

            else
                "False"
        ]


viewInt : Int -> Html.Html msg
viewInt value =
    Html.div [ Html.Attributes.class "elm-derive-primitive" ] [ Html.text <| String.fromInt value ]


viewString : String -> Html.Html msg
viewString value =
    Html.div [ Html.Attributes.class "elm-derive-primitive" ] [ Html.text value ]


viewFloat : Float -> Html.Html msg
viewFloat value =
    Html.div [ Html.Attributes.class "elm-derive-primitive" ] [ Html.text <| String.fromFloat value ]


viewDict : (a -> Html.Html msg) -> Dict.Dict String a -> Html.Html msg
viewDict f dict =
    Html.table []
        [ Html.caption [] [ Html.text "Dict" ]
        , Html.tbody [] (List.map (\( k, v ) -> Html.tr [] [ Html.td [] [ Html.text k ], Html.td [] [ f v ] ]) (Dict.toList dict))
        ]


viewTask : Task -> Html.Html msg
viewTask =
    \value ->
        Html.table []
            [ Html.caption [] [ Html.text "Record" ]
            , Html.tbody []
                [ Html.tr []
                    [ Html.td [] [ Html.text <| "id" ]
                    , Html.td [] [ viewInt value.id ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "description" ]
                    , Html.td [] [ viewString value.description ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "completed" ]
                    , Html.td [] [ viewBool value.completed ]
                    ]
                ]
            ]


viewTodoList : TodoList -> Html.Html msg
viewTodoList =
    \value ->
        Html.table []
            [ Html.caption [] [ Html.text "Record" ]
            , Html.tbody []
                [ Html.tr []
                    [ Html.td [] [ Html.text <| "tasks" ]
                    , Html.td [] [ viewList viewTask value.tasks ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "field" ]
                    , Html.td [] [ viewString value.field ]
                    ]
                ]
            ]


viewTree : Tree -> Html.Html msg
viewTree =
    \typeValue ->
        Html.div [ Html.Attributes.class "elm-derive-type" ] <|
            case typeValue of
                Leaf a ->
                    [ Html.div [ Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-0" ] [ Html.text "Leaf" ]
                    , Html.div [ Html.Attributes.class "elm-derive-variant-fields" ]
                        [ viewString a
                        ]
                    ]

                Branch a b ->
                    [ Html.div [ Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-1" ] [ Html.text "Branch" ]
                    , Html.div [ Html.Attributes.class "elm-derive-variant-fields" ]
                        [ viewTree a
                        , viewTree b
                        ]
                    ]


viewColor : Color -> Html.Html msg
viewColor =
    \typeValue ->
        Html.div [ Html.Attributes.class "elm-derive-type" ] <|
            case typeValue of
                Red ->
                    [ Html.div [ Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-0" ] [ Html.text "Red" ]
                    , Html.div [ Html.Attributes.class "elm-derive-variant-fields" ]
                        []
                    ]

                Green ->
                    [ Html.div [ Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-1" ] [ Html.text "Green" ]
                    , Html.div [ Html.Attributes.class "elm-derive-variant-fields" ]
                        []
                    ]

                Blue ->
                    [ Html.div [ Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-2" ] [ Html.text "Blue" ]
                    , Html.div [ Html.Attributes.class "elm-derive-variant-fields" ]
                        []
                    ]


viewVector : Vector -> Html.Html msg
viewVector =
    \typeValue ->
        Html.div [ Html.Attributes.class "elm-derive-type" ] <|
            case typeValue of
                Vector a ->
                    [ Html.div [ Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-0" ] [ Html.text "Vector" ]
                    , Html.div [ Html.Attributes.class "elm-derive-variant-fields" ]
                        [ (\value ->
                            Html.table []
                                [ Html.caption [] [ Html.text "Record" ]
                                , Html.tbody []
                                    [ Html.tr []
                                        [ Html.td [] [ Html.text <| "x" ]
                                        , Html.td [] [ viewFloat value.x ]
                                        ]
                                    , Html.tr []
                                        [ Html.td [] [ Html.text <| "y" ]
                                        , Html.td [] [ viewFloat value.y ]
                                        ]
                                    ]
                                ]
                          )
                            a
                        ]
                    ]


viewGrid : Grid -> Html.Html msg
viewGrid =
    viewList (viewList viewInt)


viewDictionary : Dictionary -> Html.Html msg
viewDictionary =
    viewDict viewInt


viewMany : Many -> Html.Html msg
viewMany =
    \value ->
        Html.table []
            [ Html.caption [] [ Html.text "Record" ]
            , Html.tbody []
                [ Html.tr []
                    [ Html.td [] [ Html.text <| "a" ]
                    , Html.td [] [ viewInt value.a ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "b" ]
                    , Html.td [] [ viewString value.b ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "c" ]
                    , Html.td [] [ viewFloat value.c ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "d" ]
                    , Html.td [] [ viewBool value.d ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "e" ]
                    , Html.td [] [ viewInt value.e ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "f" ]
                    , Html.td [] [ viewString value.f ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "g" ]
                    , Html.td [] [ viewFloat value.g ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "h" ]
                    , Html.td [] [ viewBool value.h ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "i" ]
                    , Html.td [] [ viewInt value.i ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "j" ]
                    , Html.td [] [ viewString value.j ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "k" ]
                    , Html.td [] [ viewFloat value.k ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "l" ]
                    , Html.td [] [ viewBool value.l ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "m" ]
                    , Html.td [] [ viewInt value.m ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "n" ]
                    , Html.td [] [ viewString value.n ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "o" ]
                    , Html.td [] [ viewFloat value.o ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "p" ]
                    , Html.td [] [ viewBool value.p ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "q" ]
                    , Html.td [] [ viewInt value.q ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "r" ]
                    , Html.td [] [ viewString value.r ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "s" ]
                    , Html.td [] [ viewFloat value.s ]
                    ]
                , Html.tr []
                    [ Html.td [] [ Html.text <| "t" ]
                    , Html.td [] [ viewBool value.t ]
                    ]
                ]
            ]
