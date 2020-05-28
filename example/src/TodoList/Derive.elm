-- generated automatically by elm-derive


module TodoList.Derive exposing (..)

import Dict
import Html
import Html.Attributes
import Json.Decode
import Json.Encode
import Random
import TodoList exposing (..)


viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
viewList f xs =
    Html.table []
        [ Html.caption [] [ Html.text "" ]
        , Html.tbody [] (List.indexedMap (\i x -> Html.tr [] [ Html.td [] [ Html.text <| String.fromInt i ], Html.td [] [ f x ] ]) xs)
        ]


viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg
viewMaybe f m =
    case m of
        Nothing ->
            Html.div [] [ Html.text "null" ]

        Just a ->
            f a


viewBool : Bool -> Html.Html msg
viewBool value =
    Html.input
        [ Html.Attributes.value <|
            if value then
                "True"

            else
                "False"
        ]
        []


viewInt : Int -> Html.Html msg
viewInt value =
    Html.input [ Html.Attributes.value <| String.fromInt value ] []


viewString : String -> Html.Html msg
viewString value =
    Html.input [ Html.Attributes.value value ] []


viewFloat : Float -> Html.Html msg
viewFloat value =
    Html.input [ Html.Attributes.value <| String.fromFloat value ] []


viewTask : Task -> Html.Html msg
viewTask value =
    Html.table []
        [ Html.caption [] []
        , Html.tbody []
            [ Html.tr []
                [ Html.td [] [ Html.text <| "description" ]
                , Html.td [] [ viewString value.description ]
                ]
            , Html.tr []
                [ Html.td [] [ Html.text <| "completed" ]
                , Html.td [] [ viewBool value.completed ]
                ]
            , Html.tr []
                [ Html.td [] [ Html.text <| "id" ]
                , Html.td [] [ viewInt value.id ]
                ]
            ]
        ]


viewModel : Model -> Html.Html msg
viewModel value =
    Html.table []
        [ Html.caption [] []
        , Html.tbody []
            [ Html.tr []
                [ Html.td [] [ Html.text <| "tasks" ]
                , Html.td [] [ viewList viewTask value.tasks ]
                ]
            , Html.tr []
                [ Html.td [] [ Html.text <| "field" ]
                , Html.td [] [ viewString value.field ]
                ]
            , Html.tr []
                [ Html.td [] [ Html.text <| "tree" ]
                , Html.td [] [ viewTree value.tree ]
                ]
            ]
        ]


viewTree : Tree -> Html.Html msg
viewTree value =
    Html.div [ Html.Attributes.class "elm-derive-type" ] <|
        case value of
            Leaf a ->
                [ Html.div [ Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-0" ] [ Html.text "Leaf" ]
                , Html.div [ Html.Attributes.class "elm-variant-fields" ]
                    [ viewString a
                    ]
                ]

            Branch a b ->
                [ Html.div [ Html.Attributes.class "elm-derive-variant", Html.Attributes.class "elm-derive-variant-1" ] [ Html.text "Branch" ]
                , Html.div [ Html.Attributes.class "elm-variant-fields" ]
                    [ viewTree a
                    , viewTree b
                    ]
                ]



-- sample data geenerators ----------------------------------"


generateBool : Random.Generator Bool
generateBool =
    Random.uniform True [ False ]


generateInt : Random.Generator Int
generateInt =
    Random.int 0 100


generateString : Random.Generator String
generateString =
    Random.uniform "Alpha" [ "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "GOlf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu" ]


generateFloat : Random.Generator Float
generateFloat =
    Random.float 0 1


generateTask : Random.Generator Task
generateTask =
    Random.map3 (\description completed id -> { description = description, completed = completed, id = id })
        generateString
        generateBool
        generateInt


generateModel : Random.Generator Model
generateModel =
    Random.map3 (\tasks field tree -> { tasks = tasks, field = field, tree = tree })
        (Random.andThen (\n -> Random.list (3 + n) generateTask) (Random.int 0 7))
        generateString
        generateTree


generateTree : Random.Generator Tree
generateTree =
    let
        leaf () =
            Random.map Leaf generateString

        branch () =
            Random.map2 Branch generateTree generateTree
    in
    Random.uniform leaf [ branch ]
        |> Random.andThen ((|>) ())



-- encoders -------------------------------------------------------------


encodeTask : Task -> Json.Encode.Value
encodeTask =
    \value ->
        Json.Encode.object
            [ ( "description", Json.Encode.string value.description )
            , ( "completed", Json.Encode.bool value.completed )
            , ( "id", Json.Encode.int value.id )
            ]


encodeModel : Model -> Json.Encode.Value
encodeModel =
    \value ->
        Json.Encode.object
            [ ( "tasks", Json.Encode.list encodeTask value.tasks )
            , ( "field", Json.Encode.string value.field )
            , ( "tree", encodeTree value.tree )
            ]


encodeTree : Tree -> Json.Encode.Value
encodeTree value =
    case value of
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



-- decoders -------------------------------------------------------------


decodeTask : Json.Decode.Decoder Task
decodeTask =
    Json.Decode.map3 Task
        (Json.Decode.field "description" Json.Decode.string)
        (Json.Decode.field "completed" Json.Decode.bool)
        (Json.Decode.field "id" Json.Decode.int)


decodeModel : Json.Decode.Decoder Model
decodeModel =
    Json.Decode.map3 Model
        (Json.Decode.field "tasks" (Json.Decode.list decodeTask))
        (Json.Decode.field "field" Json.Decode.string)
        (Json.Decode.field "tree" decodeTree)


decodeTree : Json.Decode.Decoder Tree
decodeTree =
    Json.Decode.field "tag" Json.Decode.string
        |> Json.Decode.andThen
            (\tag ->
                case tag of
                    "Leaf" ->
                        Json.Decode.map Leaf
                            (Json.Decode.field "a" Json.Decode.string)

                    "Branch" ->
                        Json.Decode.map2 Branch
                            (Json.Decode.field "a" decodeTree)
                            (Json.Decode.field "b" decodeTree)

                    _ ->
                        Json.Decode.fail ("Unexpected tag name: " ++ tag)
            )
