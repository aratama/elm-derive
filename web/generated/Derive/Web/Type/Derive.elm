module Derive.Web.Type.Derive exposing (..)

import Array
import Derive.Web.Type exposing (..)
import Dict
import Html
import Html.Attributes
import Json.Decode
import Json.Decode.Extra
import Json.Encode
import Random
import Random.Extra
import Set


encodeModel : Model -> Json.Encode.Value
encodeModel =
    \value0 ->
        Json.Encode.object
            [ ( "source", Json.Encode.string value0.source )
            , ( "encoderVisible", Json.Encode.bool value0.encoderVisible )
            , ( "decoderVisible", Json.Encode.bool value0.decoderVisible )
            , ( "loadStorageVisible", Json.Encode.bool value0.loadStorageVisible )
            ]


decodeModel =
    Json.Decode.succeed
        (\source encoderVisible decoderVisible loadStorageVisible ->
            { source = source
            , encoderVisible = encoderVisible
            , decoderVisible = decoderVisible
            , loadStorageVisible = loadStorageVisible
            }
        )
        |> Json.Decode.Extra.andMap (Json.Decode.field "source" Json.Decode.string)
        |> Json.Decode.Extra.andMap (Json.Decode.field "encoderVisible" Json.Decode.bool)
        |> Json.Decode.Extra.andMap (Json.Decode.field "decoderVisible" Json.Decode.bool)
        |> Json.Decode.Extra.andMap (Json.Decode.field "loadStorageVisible" Json.Decode.bool)


randomModel : Random.Generator Model
randomModel =
    Random.constant
        (\source encoderVisible decoderVisible loadStorageVisible ->
            { source = source
            , encoderVisible = encoderVisible
            , decoderVisible = decoderVisible
            , loadStorageVisible = loadStorageVisible
            }
        )
        |> Random.Extra.andMap randomString
        |> Random.Extra.andMap Random.Extra.bool
        |> Random.Extra.andMap Random.Extra.bool
        |> Random.Extra.andMap Random.Extra.bool


compareModel : Model -> Model -> Order
compareModel =
    \lhs0 rhs0 ->
        case compare lhs0.source rhs0.source of
            EQ ->
                case compareBool lhs0.encoderVisible rhs0.encoderVisible of
                    EQ ->
                        case compareBool lhs0.decoderVisible rhs0.decoderVisible of
                            EQ ->
                                compareBool lhs0.loadStorageVisible rhs0.loadStorageVisible

                            o2 ->
                                o2

                    o1 ->
                        o1

            o0 ->
                o0


viewModel : Model -> Html.Html msg
viewModel =
    \value0 ->
        Html.table
            []
            [ Html.tbody
                []
                [ Html.tr [] [ Html.td [] [ Html.text "source" ], Html.td [] [ viewString value0.source ] ]
                , Html.tr
                    []
                    [ Html.td [] [ Html.text "encoderVisible" ], Html.td [] [ viewBool value0.encoderVisible ] ]
                , Html.tr
                    []
                    [ Html.td [] [ Html.text "decoderVisible" ], Html.td [] [ viewBool value0.decoderVisible ] ]
                , Html.tr
                    []
                    [ Html.td [] [ Html.text "loadStorageVisible" ], Html.td [] [ viewBool value0.loadStorageVisible ] ]
                ]
            ]


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