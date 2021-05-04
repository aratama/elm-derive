module Type.Derive exposing (..)

import Array
import Dict
import Html
import Html.Attributes
import Json.Decode
import Json.Encode
import Random
import Random.Extra
import Set
import Type exposing (..)


encodeTodoList : TodoList -> Json.Encode.Value
encodeTodoList =
    \value0 ->
        Json.Encode.object
            [ ( "tasks", (Json.Encode.list encodeTask) value0.tasks )
            , ( "field", Json.Encode.string value0.field )
            , ( "uid", Json.Encode.int value0.uid )
            , ( "visibility", Json.Encode.string value0.visibility )
            ]


encodeTask : Task -> Json.Encode.Value
encodeTask =
    \value0 ->
        Json.Encode.object
            [ ( "description", Json.Encode.string value0.description )
            , ( "completed", Json.Encode.bool value0.completed )
            , ( "edits", (encodeMaybe Json.Encode.string) value0.edits )
            , ( "id", Json.Encode.int value0.id )
            ]


encodeTree : Tree -> Json.Encode.Value
encodeTree val =
    case val of
        Leaf a ->
            Json.Encode.object [ ( "tag", Json.Encode.string "Leaf" ), ( "a", Json.Encode.string a ) ]

        Branch a b ->
            Json.Encode.object [ ( "tag", Json.Encode.string "Branch" ), ( "a", encodeTree a ), ( "b", encodeTree b ) ]


encodeColor : Color -> Json.Encode.Value
encodeColor val =
    case val of
        Red ->
            Json.Encode.object [ ( "tag", Json.Encode.string "Red" ) ]

        Green ->
            Json.Encode.object [ ( "tag", Json.Encode.string "Green" ) ]

        Blue ->
            Json.Encode.object [ ( "tag", Json.Encode.string "Blue" ) ]


encodeVector : Vector -> Json.Encode.Value
encodeVector val =
    case val of
        Vector a ->
            Json.Encode.object
                [ ( "tag", Json.Encode.string "Vector" )
                , ( "a"
                  , (\value0 ->
                        Json.Encode.object [ ( "x", Json.Encode.float value0.x ), ( "y", Json.Encode.float value0.y ) ]
                    )
                        a
                  )
                ]


encodeGrid : Grid -> Json.Encode.Value
encodeGrid =
    Json.Encode.list (Json.Encode.list Json.Encode.int)


encodeDictionary : Dictionary -> Json.Encode.Value
encodeDictionary =
    Json.Encode.dict Basics.identity Json.Encode.int


encodeEmptyRecord : EmptyRecord -> Json.Encode.Value
encodeEmptyRecord =
    \value0 -> Json.Encode.object []


encodePair : Pair -> Json.Encode.Value
encodePair =
    \( fst, snd ) -> Json.Encode.list Basics.identity [ Json.Encode.int fst, Json.Encode.string snd ]


encodeCharType : CharType -> Json.Encode.Value
encodeCharType =
    encodeChar


encodeUnitType : UnitType -> Json.Encode.Value
encodeUnitType =
    \() -> Json.Encode.list Basics.identity []


encodeSomeRecord : SomeRecord -> Json.Encode.Value
encodeSomeRecord =
    \value0 -> Json.Encode.object [ ( "a", Json.Encode.int value0.a ), ( "b", Json.Encode.string value0.b ) ]


encodeSmallNestedRecord : SmallNestedRecord -> Json.Encode.Value
encodeSmallNestedRecord =
    \value0 -> Json.Encode.object [ ( "b", Json.Encode.int value0.b ) ]


encodeNestedRecord : NestedRecord -> Json.Encode.Value
encodeNestedRecord =
    \value0 ->
        Json.Encode.object
            [ ( "a"
              , (\value1 ->
                    Json.Encode.object
                        [ ( "b"
                          , (\value2 ->
                                Json.Encode.object
                                    [ ( "c"
                                      , (\value3 ->
                                            Json.Encode.object
                                                [ ( "d"
                                                  , (\value4 ->
                                                        Json.Encode.object [ ( "e", Json.Encode.string value4.e ) ]
                                                    )
                                                        value3.d
                                                  )
                                                , ( "f", Json.Encode.int value3.f )
                                                ]
                                        )
                                            value2.c
                                      )
                                    ]
                            )
                                value1.b
                          )
                        ]
                )
                    value0.a
              )
            ]


encodeHugeRecord : HugeRecord -> Json.Encode.Value
encodeHugeRecord =
    \value0 ->
        Json.Encode.object
            [ ( "a", Json.Encode.int value0.a )
            , ( "b", Json.Encode.string value0.b )
            , ( "c", encodeChar value0.c )
            , ( "d", Json.Encode.float value0.d )
            , ( "e", (Json.Encode.list Json.Encode.string) value0.e )
            , ( "f", Json.Encode.bool value0.f )
            , ( "g", (Json.Encode.dict Basics.identity Json.Encode.int) value0.g )
            , ( "h", (Json.Encode.array Json.Encode.int) value0.h )
            , ( "i", (\() -> Json.Encode.list Basics.identity []) value0.i )
            , ( "j"
              , (\( fst, snd ) -> Json.Encode.list Basics.identity [ Json.Encode.int fst, Json.Encode.string snd ])
                    value0.j
              )
            , ( "k", encodeColor value0.k )
            , ( "l", encodeTree value0.l )
            , ( "m", encodeTask value0.m )
            , ( "n", encodeEmptyRecord value0.n )
            ]


encodeArrayType : ArrayType -> Json.Encode.Value
encodeArrayType =
    Json.Encode.array Json.Encode.string


encodeSetType : SetType -> Json.Encode.Value
encodeSetType =
    Json.Encode.set Json.Encode.string


encodeResultType : ResultType -> Json.Encode.Value
encodeResultType =
    encodeResult Json.Encode.string Json.Encode.int


decodeTodoList : Json.Decode.Decoder TodoList
decodeTodoList =
    Json.Decode.succeed
        (\tasks field uid visibility -> { tasks = tasks, field = field, uid = uid, visibility = visibility })
        |> decodeAndMap (Json.Decode.field "tasks" (Json.Decode.list decodeTask))
        |> decodeAndMap (Json.Decode.field "field" Json.Decode.string)
        |> decodeAndMap (Json.Decode.field "uid" Json.Decode.int)
        |> decodeAndMap (Json.Decode.field "visibility" Json.Decode.string)


decodeTask : Json.Decode.Decoder Task
decodeTask =
    Json.Decode.succeed
        (\description completed edits id -> { description = description, completed = completed, edits = edits, id = id }
        )
        |> decodeAndMap (Json.Decode.field "description" Json.Decode.string)
        |> decodeAndMap (Json.Decode.field "completed" Json.Decode.bool)
        |> decodeAndMap (Json.Decode.field "edits" (Json.Decode.maybe Json.Decode.string))
        |> decodeAndMap (Json.Decode.field "id" Json.Decode.int)


decodeTree =
    Json.Decode.andThen
        (\tag ->
            case tag of
                "Leaf" ->
                    Json.Decode.map Leaf (Json.Decode.field "a" Json.Decode.string)

                "Branch" ->
                    Json.Decode.map2 Branch (Json.Decode.field "a" decodeTree) (Json.Decode.field "b" decodeTree)

                _ ->
                    Json.Decode.fail ("Unexpected tag name: " ++ tag)
        )
        (Json.Decode.field "tag" Json.Decode.string)


decodeColor =
    Json.Decode.andThen
        (\tag ->
            case tag of
                "Red" ->
                    Json.Decode.succeed Red

                "Green" ->
                    Json.Decode.succeed Green

                "Blue" ->
                    Json.Decode.succeed Blue

                _ ->
                    Json.Decode.fail ("Unexpected tag name: " ++ tag)
        )
        (Json.Decode.field "tag" Json.Decode.string)


decodeVector =
    Json.Decode.andThen
        (\tag ->
            case tag of
                "Vector" ->
                    Json.Decode.map
                        Vector
                        (Json.Decode.field
                            "a"
                            (Json.Decode.succeed (\x y -> { x = x, y = y })
                                |> decodeAndMap (Json.Decode.field "x" Json.Decode.float)
                                |> decodeAndMap (Json.Decode.field "y" Json.Decode.float)
                            )
                        )

                _ ->
                    Json.Decode.fail ("Unexpected tag name: " ++ tag)
        )
        (Json.Decode.field "tag" Json.Decode.string)


decodeGrid : Json.Decode.Decoder Grid
decodeGrid =
    Json.Decode.list (Json.Decode.list Json.Decode.int)


decodeDictionary : Json.Decode.Decoder Dictionary
decodeDictionary =
    Json.Decode.dict Json.Decode.int


decodeEmptyRecord : Json.Decode.Decoder EmptyRecord
decodeEmptyRecord =
    Json.Decode.succeed {}


decodePair : Json.Decode.Decoder Pair
decodePair =
    Json.Decode.map2 Tuple.pair (Json.Decode.index 0 Json.Decode.int) (Json.Decode.index 1 Json.Decode.string)


decodeCharType : Json.Decode.Decoder CharType
decodeCharType =
    decodeChar


decodeUnitType : Json.Decode.Decoder UnitType
decodeUnitType =
    Json.Decode.succeed ()


decodeSomeRecord : Json.Decode.Decoder SomeRecord
decodeSomeRecord =
    Json.Decode.succeed (\a b -> { a = a, b = b })
        |> decodeAndMap (Json.Decode.field "a" Json.Decode.int)
        |> decodeAndMap (Json.Decode.field "b" Json.Decode.string)


decodeSmallNestedRecord : Json.Decode.Decoder SmallNestedRecord
decodeSmallNestedRecord =
    Json.Decode.map (\b -> { b = b }) (Json.Decode.field "b" Json.Decode.int)


decodeNestedRecord : Json.Decode.Decoder NestedRecord
decodeNestedRecord =
    Json.Decode.map
        (\a -> { a = a })
        (Json.Decode.field
            "a"
            (Json.Decode.map
                (\b -> { b = b })
                (Json.Decode.field
                    "b"
                    (Json.Decode.map
                        (\c -> { c = c })
                        (Json.Decode.field
                            "c"
                            (Json.Decode.succeed (\d f -> { d = d, f = f })
                                |> decodeAndMap
                                    (Json.Decode.field
                                        "d"
                                        (Json.Decode.map (\e -> { e = e }) (Json.Decode.field "e" Json.Decode.string))
                                    )
                                |> decodeAndMap (Json.Decode.field "f" Json.Decode.int)
                            )
                        )
                    )
                )
            )
        )


decodeHugeRecord : Json.Decode.Decoder HugeRecord
decodeHugeRecord =
    Json.Decode.succeed
        (\a b c d e f g h i j k l m n ->
            { a = a, b = b, c = c, d = d, e = e, f = f, g = g, h = h, i = i, j = j, k = k, l = l, m = m, n = n }
        )
        |> decodeAndMap (Json.Decode.field "a" Json.Decode.int)
        |> decodeAndMap (Json.Decode.field "b" Json.Decode.string)
        |> decodeAndMap (Json.Decode.field "c" decodeChar)
        |> decodeAndMap (Json.Decode.field "d" Json.Decode.float)
        |> decodeAndMap (Json.Decode.field "e" (Json.Decode.list Json.Decode.string))
        |> decodeAndMap (Json.Decode.field "f" Json.Decode.bool)
        |> decodeAndMap (Json.Decode.field "g" (Json.Decode.dict Json.Decode.int))
        |> decodeAndMap (Json.Decode.field "h" (Json.Decode.array Json.Decode.int))
        |> decodeAndMap (Json.Decode.field "i" (Json.Decode.succeed ()))
        |> decodeAndMap
            (Json.Decode.field
                "j"
                (Json.Decode.map2
                    Tuple.pair
                    (Json.Decode.index 0 Json.Decode.int)
                    (Json.Decode.index 1 Json.Decode.string)
                )
            )
        |> decodeAndMap (Json.Decode.field "k" decodeColor)
        |> decodeAndMap (Json.Decode.field "l" decodeTree)
        |> decodeAndMap (Json.Decode.field "m" decodeTask)
        |> decodeAndMap (Json.Decode.field "n" decodeEmptyRecord)


decodeArrayType : Json.Decode.Decoder ArrayType
decodeArrayType =
    Json.Decode.array Json.Decode.string


decodeSetType : Json.Decode.Decoder SetType
decodeSetType =
    Json.Decode.map Set.fromList (Json.Decode.list Json.Decode.string)


decodeResultType : Json.Decode.Decoder ResultType
decodeResultType =
    decodeResult Json.Decode.string Json.Decode.int


randomTodoList : Random.Generator TodoList
randomTodoList =
    Random.constant
        (\tasks field uid visibility -> { tasks = tasks, field = field, uid = uid, visibility = visibility })
        |> Random.Extra.andMap (randomList randomTask)
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap randomInt
        |> Random.Extra.andMap randomString


randomTask : Random.Generator Task
randomTask =
    Random.constant
        (\description completed edits id -> { description = description, completed = completed, edits = edits, id = id }
        )
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap Random.Extra.bool
        |> Random.Extra.andMap (Random.Extra.maybe Random.Extra.bool randomString)
        |> Random.Extra.andMap randomInt


randomTree : Random.Generator Tree
randomTree =
    let
        leaf () =
            Random.map Leaf randomString

        branch () =
            Random.map2 Branch randomTree randomTree
    in
    Random.andThen ((|>) ()) (Random.uniform leaf [ branch ])


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
    Random.andThen ((|>) ()) (Random.uniform red [ green, blue ])


randomVector : Random.Generator Vector
randomVector =
    let
        vector () =
            Random.map
                Vector
                (Random.constant (\x y -> { x = x, y = y })
                    |> Random.Extra.andMap randomFloat
                    |> Random.Extra.andMap randomFloat
                )
    in
    Random.andThen ((|>) ()) (Random.uniform vector [])


randomGrid : Random.Generator Grid
randomGrid =
    randomList (randomList randomInt)


randomDictionary : Random.Generator Dictionary
randomDictionary =
    randomDict randomInt


randomEmptyRecord : Random.Generator EmptyRecord
randomEmptyRecord =
    Random.constant {}


randomPair : Random.Generator Pair
randomPair =
    Random.pair randomInt randomString


randomCharType : Random.Generator CharType
randomCharType =
    randomChar


randomUnitType : Random.Generator UnitType
randomUnitType =
    Random.constant ()


randomSomeRecord : Random.Generator SomeRecord
randomSomeRecord =
    Random.constant (\a b -> { a = a, b = b }) |> Random.Extra.andMap randomInt |> Random.Extra.andMap randomString


randomSmallNestedRecord : Random.Generator SmallNestedRecord
randomSmallNestedRecord =
    Random.map (\b -> { b = b }) randomInt


randomNestedRecord : Random.Generator NestedRecord
randomNestedRecord =
    Random.map
        (\a -> { a = a })
        (Random.map
            (\b -> { b = b })
            (Random.map
                (\c -> { c = c })
                (Random.constant (\d f -> { d = d, f = f })
                    |> Random.Extra.andMap (Random.map (\e -> { e = e }) randomString)
                    |> Random.Extra.andMap randomInt
                )
            )
        )


randomHugeRecord : Random.Generator HugeRecord
randomHugeRecord =
    Random.constant
        (\a b c d e f g h i j k l m n ->
            { a = a, b = b, c = c, d = d, e = e, f = f, g = g, h = h, i = i, j = j, k = k, l = l, m = m, n = n }
        )
        |> Random.Extra.andMap randomInt
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap randomChar
        |> Random.Extra.andMap randomFloat
        |> Random.Extra.andMap (randomList randomString)
        |> Random.Extra.andMap Random.Extra.bool
        |> Random.Extra.andMap (randomDict randomInt)
        |> Random.Extra.andMap (randomArray randomInt)
        |> Random.Extra.andMap (Random.constant ())
        |> Random.Extra.andMap (Random.pair randomInt randomString)
        |> Random.Extra.andMap randomColor
        |> Random.Extra.andMap randomTree
        |> Random.Extra.andMap randomTask
        |> Random.Extra.andMap randomEmptyRecord


randomArrayType : Random.Generator ArrayType
randomArrayType =
    randomArray randomString


randomSetType : Random.Generator SetType
randomSetType =
    randomSet randomString


randomResultType : Random.Generator ResultType
randomResultType =
    Random.Extra.result Random.Extra.bool randomString randomInt


compareTodoList : TodoList -> TodoList -> Order
compareTodoList =
    \lhs0 rhs0 ->
        case (compareList compareTask) lhs0.tasks rhs0.tasks of
            EQ ->
                case compare lhs0.field rhs0.field of
                    EQ ->
                        case compare lhs0.uid rhs0.uid of
                            EQ ->
                                compare lhs0.visibility rhs0.visibility

                            o2 ->
                                o2

                    o1 ->
                        o1

            o0 ->
                o0


compareTask : Task -> Task -> Order
compareTask =
    \lhs0 rhs0 ->
        case compare lhs0.description rhs0.description of
            EQ ->
                case compareBool lhs0.completed rhs0.completed of
                    EQ ->
                        case (compareMaybe compare) lhs0.edits rhs0.edits of
                            EQ ->
                                compare lhs0.id rhs0.id

                            o2 ->
                                o2

                    o1 ->
                        o1

            o0 ->
                o0


compareTree : Tree -> Tree -> Order
compareTree lhs rhs =
    case ( lhs, rhs ) of
        ( Leaf la, Leaf ra ) ->
            compare la ra

        ( Leaf la, _ ) ->
            LT

        ( _, Leaf la ) ->
            GT

        ( Branch la lb, Branch ra rb ) ->
            case compareTree la ra of
                EQ ->
                    compareTree lb rb

                order ->
                    order


compareColor : Color -> Color -> Order
compareColor lhs rhs =
    case ( lhs, rhs ) of
        ( Red, Red ) ->
            EQ

        ( Red, _ ) ->
            LT

        ( _, Red ) ->
            GT

        ( Green, Green ) ->
            EQ

        ( Green, _ ) ->
            LT

        ( _, Green ) ->
            GT

        ( Blue, Blue ) ->
            EQ


compareVector : Vector -> Vector -> Order
compareVector (Vector lhs) (Vector rhs) =
    (\lhs0 rhs0 ->
        case compare lhs0.x rhs0.x of
            EQ ->
                compare lhs0.y rhs0.y

            o0 ->
                o0
    )
        lhs
        rhs


compareGrid : Grid -> Grid -> Order
compareGrid =
    compareList (compareList compare)


compareDictionary : Dictionary -> Dictionary -> Order
compareDictionary =
    compareDict compare


compareEmptyRecord : EmptyRecord -> EmptyRecord -> Order
compareEmptyRecord =
    \lhs0 rhs0 -> EQ


comparePair : Pair -> Pair -> Order
comparePair =
    compareTuple compare compare


compareCharType : CharType -> CharType -> Order
compareCharType =
    compare


compareUnitType : UnitType -> UnitType -> Order
compareUnitType =
    \_ _ -> EQ


compareSomeRecord : SomeRecord -> SomeRecord -> Order
compareSomeRecord =
    \lhs0 rhs0 ->
        case compare lhs0.a rhs0.a of
            EQ ->
                compare lhs0.b rhs0.b

            o0 ->
                o0


compareSmallNestedRecord : SmallNestedRecord -> SmallNestedRecord -> Order
compareSmallNestedRecord =
    \lhs0 rhs0 -> compare lhs0.b rhs0.b


compareNestedRecord : NestedRecord -> NestedRecord -> Order
compareNestedRecord =
    \lhs0 rhs0 ->
        (\lhs1 rhs1 ->
            (\lhs2 rhs2 ->
                (\lhs3 rhs3 ->
                    case (\lhs4 rhs4 -> compare lhs4.e rhs4.e) lhs3.d rhs3.d of
                        EQ ->
                            compare lhs3.f rhs3.f

                        o0 ->
                            o0
                )
                    lhs2.c
                    rhs2.c
            )
                lhs1.b
                rhs1.b
        )
            lhs0.a
            rhs0.a


compareHugeRecord : HugeRecord -> HugeRecord -> Order
compareHugeRecord =
    \lhs0 rhs0 ->
        case compare lhs0.a rhs0.a of
            EQ ->
                case compare lhs0.b rhs0.b of
                    EQ ->
                        case compare lhs0.c rhs0.c of
                            EQ ->
                                case compare lhs0.d rhs0.d of
                                    EQ ->
                                        case (compareList compare) lhs0.e rhs0.e of
                                            EQ ->
                                                case compareBool lhs0.f rhs0.f of
                                                    EQ ->
                                                        case (compareDict compare) lhs0.g rhs0.g of
                                                            EQ ->
                                                                case (compareArray compare) lhs0.h rhs0.h of
                                                                    EQ ->
                                                                        case (\_ _ -> EQ) lhs0.i rhs0.i of
                                                                            EQ ->
                                                                                case
                                                                                    (compareTuple compare compare)
                                                                                        lhs0.j
                                                                                        rhs0.j
                                                                                of
                                                                                    EQ ->
                                                                                        case compareColor lhs0.k rhs0.k
                                                                                        of
                                                                                            EQ ->
                                                                                                case
                                                                                                    compareTree
                                                                                                        lhs0.l
                                                                                                        rhs0.l
                                                                                                of
                                                                                                    EQ ->
                                                                                                        case
                                                                                                            compareTask
                                                                                                                lhs0.m
                                                                                                                rhs0.m
                                                                                                        of
                                                                                                            EQ ->
                                                                                                                compareEmptyRecord
                                                                                                                    lhs0.n
                                                                                                                    rhs0.n

                                                                                                            o12 ->
                                                                                                                o12

                                                                                                    o11 ->
                                                                                                        o11

                                                                                            o10 ->
                                                                                                o10

                                                                                    o9 ->
                                                                                        o9

                                                                            o8 ->
                                                                                o8

                                                                    o7 ->
                                                                        o7

                                                            o6 ->
                                                                o6

                                                    o5 ->
                                                        o5

                                            o4 ->
                                                o4

                                    o3 ->
                                        o3

                            o2 ->
                                o2

                    o1 ->
                        o1

            o0 ->
                o0


compareArrayType : ArrayType -> ArrayType -> Order
compareArrayType =
    compareArray compare


compareSetType : SetType -> SetType -> Order
compareSetType =
    compareSet compare


compareResultType : ResultType -> ResultType -> Order
compareResultType =
    compareResult compare compare


viewTodoList : TodoList -> Html.Html msg
viewTodoList =
    \value0 ->
        Html.table
            []
            [ Html.tbody
                []
                [ Html.tr [] [ Html.td [] [ Html.text "tasks" ], Html.td [] [ (viewList viewTask) value0.tasks ] ]
                , Html.tr [] [ Html.td [] [ Html.text "field" ], Html.td [] [ viewString value0.field ] ]
                , Html.tr [] [ Html.td [] [ Html.text "uid" ], Html.td [] [ viewInt value0.uid ] ]
                , Html.tr [] [ Html.td [] [ Html.text "visibility" ], Html.td [] [ viewString value0.visibility ] ]
                ]
            ]


viewTask : Task -> Html.Html msg
viewTask =
    \value0 ->
        Html.table
            []
            [ Html.tbody
                []
                [ Html.tr [] [ Html.td [] [ Html.text "description" ], Html.td [] [ viewString value0.description ] ]
                , Html.tr [] [ Html.td [] [ Html.text "completed" ], Html.td [] [ viewBool value0.completed ] ]
                , Html.tr [] [ Html.td [] [ Html.text "edits" ], Html.td [] [ (viewMaybe viewString) value0.edits ] ]
                , Html.tr [] [ Html.td [] [ Html.text "id" ], Html.td [] [ viewInt value0.id ] ]
                ]
            ]


viewTree : Tree -> Html.Html msg
viewTree =
    \customTypeValue ->
        case customTypeValue of
            Leaf a ->
                Html.table [] [ Html.tr [] [ viewString a ] ]

            Branch a b ->
                Html.table [] [ Html.tr [] [ viewTree a ], Html.tr [] [ viewTree b ] ]


viewColor : Color -> Html.Html msg
viewColor =
    \customTypeValue ->
        case customTypeValue of
            Red ->
                Html.table [] []

            Green ->
                Html.table [] []

            Blue ->
                Html.table [] []


viewVector : Vector -> Html.Html msg
viewVector =
    \customTypeValue ->
        case customTypeValue of
            Vector a ->
                Html.table
                    []
                    [ Html.tr
                        []
                        [ (\value0 ->
                              Html.table
                                  []
                                  [ Html.tbody
                                      []
                                      [ Html.tr [] [ Html.td [] [ Html.text "x" ], Html.td [] [ viewFloat value0.x ] ]
                                      , Html.tr [] [ Html.td [] [ Html.text "y" ], Html.td [] [ viewFloat value0.y ] ]
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


viewEmptyRecord : EmptyRecord -> Html.Html msg
viewEmptyRecord =
    \value0 -> Html.table [] [ Html.tbody [] [] ]


viewPair : Pair -> Html.Html msg
viewPair =
    viewTuple viewInt viewString


viewCharType : CharType -> Html.Html msg
viewCharType =
    viewChar


viewUnitType : UnitType -> Html.Html msg
viewUnitType =
    \() -> Html.div [] [ Html.text "" ]


viewSomeRecord : SomeRecord -> Html.Html msg
viewSomeRecord =
    \value0 ->
        Html.table
            []
            [ Html.tbody
                []
                [ Html.tr [] [ Html.td [] [ Html.text "a" ], Html.td [] [ viewInt value0.a ] ]
                , Html.tr [] [ Html.td [] [ Html.text "b" ], Html.td [] [ viewString value0.b ] ]
                ]
            ]


viewSmallNestedRecord : SmallNestedRecord -> Html.Html msg
viewSmallNestedRecord =
    \value0 ->
        Html.table [] [ Html.tbody [] [ Html.tr [] [ Html.td [] [ Html.text "b" ], Html.td [] [ viewInt value0.b ] ] ] ]


viewNestedRecord : NestedRecord -> Html.Html msg
viewNestedRecord =
    \value0 ->
        Html.table
            []
            [ Html.tbody
                []
                [ Html.tr
                    []
                    [ Html.td [] [ Html.text "a" ]
                    , Html.td
                        []
                        [ (\value1 ->
                              Html.table
                                  []
                                  [ Html.tbody
                                      []
                                      [ Html.tr
                                          []
                                          [ Html.td [] [ Html.text "b" ]
                                          , Html.td
                                              []
                                              [ (\value2 ->
                                                    Html.table
                                                        []
                                                        [ Html.tbody
                                                            []
                                                            [ Html.tr
                                                                []
                                                                [ Html.td [] [ Html.text "c" ]
                                                                , Html.td
                                                                    []
                                                                    [ (\value3 ->
                                                                          Html.table
                                                                              []
                                                                              [ Html.tbody
                                                                                  []
                                                                                  [ Html.tr
                                                                                      []
                                                                                      [ Html.td [] [ Html.text "d" ]
                                                                                      , Html.td
                                                                                          []
                                                                                          [ (\value4 ->
                                                                                                Html.table
                                                                                                    []
                                                                                                    [ Html.tbody
                                                                                                        []
                                                                                                        [ Html.tr
                                                                                                            []
                                                                                                            [ Html.td
                                                                                                                []
                                                                                                                [ Html.text
                                                                                                                    "e"
                                                                                                                ]
                                                                                                            , Html.td
                                                                                                                []
                                                                                                                [ viewString
                                                                                                                    value4.e
                                                                                                                ]
                                                                                                            ]
                                                                                                        ]
                                                                                                    ]
                                                                                            )
                                                                                              value3.d
                                                                                          ]
                                                                                      ]
                                                                                  , Html.tr
                                                                                      []
                                                                                      [ Html.td [] [ Html.text "f" ]
                                                                                      , Html.td [] [ viewInt value3.f ]
                                                                                      ]
                                                                                  ]
                                                                              ]
                                                                      )
                                                                        value2.c
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
                                                )
                                                  value1.b
                                              ]
                                          ]
                                      ]
                                  ]
                          )
                            value0.a
                        ]
                    ]
                ]
            ]


viewHugeRecord : HugeRecord -> Html.Html msg
viewHugeRecord =
    \value0 ->
        Html.table
            []
            [ Html.tbody
                []
                [ Html.tr [] [ Html.td [] [ Html.text "a" ], Html.td [] [ viewInt value0.a ] ]
                , Html.tr [] [ Html.td [] [ Html.text "b" ], Html.td [] [ viewString value0.b ] ]
                , Html.tr [] [ Html.td [] [ Html.text "c" ], Html.td [] [ viewChar value0.c ] ]
                , Html.tr [] [ Html.td [] [ Html.text "d" ], Html.td [] [ viewFloat value0.d ] ]
                , Html.tr [] [ Html.td [] [ Html.text "e" ], Html.td [] [ (viewList viewString) value0.e ] ]
                , Html.tr [] [ Html.td [] [ Html.text "f" ], Html.td [] [ viewBool value0.f ] ]
                , Html.tr [] [ Html.td [] [ Html.text "g" ], Html.td [] [ (viewDict viewInt) value0.g ] ]
                , Html.tr [] [ Html.td [] [ Html.text "h" ], Html.td [] [ (viewArray viewInt) value0.h ] ]
                , Html.tr
                    []
                    [ Html.td [] [ Html.text "i" ], Html.td [] [ (\() -> Html.div [] [ Html.text "" ]) value0.i ] ]
                , Html.tr [] [ Html.td [] [ Html.text "j" ], Html.td [] [ (viewTuple viewInt viewString) value0.j ] ]
                , Html.tr [] [ Html.td [] [ Html.text "k" ], Html.td [] [ viewColor value0.k ] ]
                , Html.tr [] [ Html.td [] [ Html.text "l" ], Html.td [] [ viewTree value0.l ] ]
                , Html.tr [] [ Html.td [] [ Html.text "m" ], Html.td [] [ viewTask value0.m ] ]
                , Html.tr [] [ Html.td [] [ Html.text "n" ], Html.td [] [ viewEmptyRecord value0.n ] ]
                ]
            ]


viewArrayType : ArrayType -> Html.Html msg
viewArrayType =
    viewArray viewString


viewSetType : SetType -> Html.Html msg
viewSetType =
    viewSet viewString


viewResultType : ResultType -> Html.Html msg
viewResultType =
    viewResult viewString viewInt


encodeMaybe : (a -> Json.Encode.Value) -> Maybe a -> Json.Encode.Value
encodeMaybe f encodeMaybeValue =
    case encodeMaybeValue of
        Nothing ->
            Json.Encode.null

        Just justValue ->
            f justValue


encodeChar : Char -> Json.Encode.Value
encodeChar value =
    Json.Encode.string (String.fromChar value)


encodeResult : (err -> Json.Encode.Value) -> (ok -> Json.Encode.Value) -> Result err ok -> Json.Encode.Value
encodeResult errEncoder okEncoder value =
    case value of
        Err err ->
            Json.Encode.object [ ( "tag", Json.Encode.string "Err" ), ( "a", errEncoder err ) ]

        Ok ok ->
            Json.Encode.object [ ( "tag", Json.Encode.string "Ok" ), ( "a", okEncoder ok ) ]


decodeChar : Json.Decode.Decoder Char
decodeChar =
    Json.Decode.andThen
        (\str ->
            case String.toList str of
                [ c ] ->
                    Json.Decode.succeed c

                _ ->
                    Json.Decode.fail "decodeChar: too many charactors for Char type"
        )
        Json.Decode.string


decodeResult : Json.Decode.Decoder err -> Json.Decode.Decoder ok -> Json.Decode.Decoder (Result err ok)
decodeResult errDecoder okDecoder =
    Json.Decode.andThen
        (\tag ->
            case tag of
                "Err" ->
                    Json.Decode.map Err (Json.Decode.field "a" errDecoder)

                "Ok" ->
                    Json.Decode.map Ok (Json.Decode.field "a" okDecoder)

                _ ->
                    Json.Decode.fail ("decodeResult: Invalid tag name: " ++ tag)
        )
        (Json.Decode.field "tag" Json.Decode.string)


decodeAndMap : Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
decodeAndMap =
    Json.Decode.map2 (|>)


randomInt : Random.Generator Int
randomInt =
    Random.int 0 100


randomString : Random.Generator String
randomString =
    Random.uniform
        "Alpha"
        [ "Bravo"
        , "Charlie"
        , "Delta"
        , "Echo"
        , "Foxtrot"
        , "Golf"
        , "Hotel"
        , "India"
        , "Juliet "
        , "Kilo"
        , "Lima"
        , "Mike"
        , "Novenber"
        , "Oscar"
        , "Papa"
        , "Quebec"
        , "Romeo"
        , "Sierra"
        , "Tango"
        , "Uniform"
        , "Victor"
        , "Whiskey"
        , "X-ray"
        , "Yankee"
        , "Zulu"
        ]


randomChar : Random.Generator Char
randomChar =
    Random.uniform 'a' (String.toList "bcdefghijklmnopqlstuvwxyz")


randomFloat : Random.Generator Float
randomFloat =
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
    Random.map Dict.fromList (randomList (Random.map2 (\k v -> ( k, v )) randomString gen))


viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
viewList f xs =
    Html.table
        []
        [ Html.caption [] [ Html.text "List" ]
        , Html.tbody
            []
            (List.indexedMap
                (\i x -> Html.tr [] [ Html.td [] [ Html.text <| String.fromInt i ], Html.td [] [ f x ] ])
                xs
            )
        ]


viewArray : (a -> Html.Html msg) -> Array.Array a -> Html.Html msg
viewArray f xs =
    viewList f (Array.toList xs)


viewSet : (a -> Html.Html msg) -> Set.Set a -> Html.Html msg
viewSet f xs =
    viewList f (Set.toList xs)


viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg
viewMaybe f m =
    case m of
        Nothing ->
            Html.div [ Html.Attributes.class "elm-derive-maybe" ] [ Html.text "null" ]

        Just a ->
            Html.div [ Html.Attributes.class "elm-derive-maybe" ] [ f a ]


viewResult : (err -> Html.Html msg) -> (ok -> Html.Html msg) -> Result err ok -> Html.Html msg
viewResult errView okView value =
    case value of
        Err err ->
            Html.div [ Html.Attributes.class "elm-derive-result" ] [ errView err ]

        Ok ok ->
            Html.div [ Html.Attributes.class "elm-derive-result" ] [ okView ok ]


viewBool : Bool -> Html.Html msg
viewBool value =
    Html.div
        [ Html.Attributes.class "elm-derive-primitive" ]
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


viewChar : Char -> Html.Html msg
viewChar value =
    Html.div [ Html.Attributes.class "elm-derive-primitive" ] [ Html.text <| String.fromChar value ]


viewFloat : Float -> Html.Html msg
viewFloat value =
    Html.div [ Html.Attributes.class "elm-derive-primitive" ] [ Html.text <| String.fromFloat value ]


viewDict : (a -> Html.Html msg) -> Dict.Dict String a -> Html.Html msg
viewDict f dict =
    Html.table
        []
        [ Html.caption [] [ Html.text "Dict" ]
        , Html.tbody
            []
            (List.map (\( k, v ) -> Html.tr [] [ Html.td [] [ Html.text k ], Html.td [] [ f v ] ]) (Dict.toList dict))
        ]


viewTuple : (a -> Html.Html msg) -> (b -> Html.Html msg) -> ( a, b ) -> Html.Html msg
viewTuple fa fb ( a, b ) =
    Html.table
        []
        [ Html.caption [] [ Html.text "Dict" ]
        , Html.tbody
            []
            [ Html.tr [] [ Html.td [] [ Html.text "fst" ], Html.td [] [ fa a ] ]
            , Html.tr [] [ Html.td [] [ Html.text "snd" ], Html.td [] [ fb b ] ]
            ]
        ]


compareList : (a -> a -> Order) -> List a -> List a -> Order
compareList f lhs rhs =
    case ( lhs, rhs ) of
        ( [], [] ) ->
            EQ

        ( x :: xs, [] ) ->
            GT

        ( [], y :: ys ) ->
            LT

        ( x :: xs, y :: ys ) ->
            case f x y of
                EQ ->
                    compareList f xs ys

                ret ->
                    ret


compareMaybe : (a -> a -> Order) -> Maybe a -> Maybe a -> Order
compareMaybe f lhs rhs =
    case ( lhs, rhs ) of
        ( Nothing, Nothing ) ->
            EQ

        ( Nothing, Just _ ) ->
            GT

        ( Just _, Nothing ) ->
            LT

        ( Just x, Just y ) ->
            f x y


compareBool : Bool -> Bool -> Order
compareBool lhs rhs =
    case ( lhs, rhs ) of
        ( False, False ) ->
            EQ

        ( False, True ) ->
            LT

        ( True, False ) ->
            GT

        ( True, True ) ->
            EQ


compareSet : (comparable -> comparable -> Order) -> Set.Set comparable -> Set.Set comparable -> Order
compareSet f lhs rhs =
    compareList f (Set.toList lhs) (Set.toList rhs)


compareArray : (a -> a -> Order) -> Array.Array a -> Array.Array a -> Order
compareArray f lhs rhs =
    compareList f (Array.toList lhs) (Array.toList rhs)


compareDict : (a -> a -> Order) -> Dict.Dict comparable a -> Dict.Dict comparable a -> Order
compareDict f lhs rhs =
    compareList (\ls rs -> compareTuple compare f ls rs) (Dict.toList lhs) (Dict.toList rhs)


compareTuple : (a -> a -> Order) -> (b -> b -> Order) -> ( a, b ) -> ( a, b ) -> Order
compareTuple f g ( la, lb ) ( ra, rb ) =
    case f la ra of
        EQ ->
            g lb rb

        ord ->
            ord


compareResult : (err -> err -> Order) -> (ok -> ok -> Order) -> Result err ok -> Result err ok -> Order
compareResult f g lhs rhs =
    case ( lhs, rhs ) of
        ( Err l, Err r ) ->
            f l r

        ( Err _, _ ) ->
            LT

        ( _, Err _ ) ->
            GT

        ( Ok l, Ok r ) ->
            g l r
