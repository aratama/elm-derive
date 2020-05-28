-- generated automatically by elm-derive

module Derive.Web.Type.Derive exposing (..)

import Dict
import Json.Encode
import Json.Decode
import Random
import Html
import Html.Attributes
import Derive.Web.Type exposing (..)

viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
viewList f xs = Html.table [] 
    [ Html.caption [] [Html.text "List"]
    , Html.tbody [] (List.indexedMap (\i x -> Html.tr [] [ Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]   ]) xs)
    ]

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

viewModel : Model -> Html.Html msg
viewModel value = 
    Html.table [] [
        Html.caption [] [Html.text "typeToString TODO"], Html.tbody [] 
        [ Html.tr []
            [ Html.td [] [Html.text <| "source"]
            , Html.td [] [viewString value.source]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "encoderVisible"]
            , Html.td [] [viewBool value.encoderVisible]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "decoderVisible"]
            , Html.td [] [viewBool value.decoderVisible]
            ]
        , Html.tr []
            [ Html.td [] [Html.text <| "loadStorageVisible"]
            , Html.td [] [viewBool value.loadStorageVisible]
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


generateModel : Random.Generator Model
generateModel = 
    Random.map4 (\source encoderVisible decoderVisible loadStorageVisible -> { source = source, encoderVisible = encoderVisible, decoderVisible = decoderVisible, loadStorageVisible = loadStorageVisible }) 
        (generateString)
        (generateBool)
        (generateBool)
        (generateBool)

-- encoders -------------------------------------------------------------

encodeModel : Model -> Json.Encode.Value
encodeModel
    = (\value -> Json.Encode.object 
        [ ("source", Json.Encode.string value.source)
        , ("encoderVisible", Json.Encode.bool value.encoderVisible)
        , ("decoderVisible", Json.Encode.bool value.decoderVisible)
        , ("loadStorageVisible", Json.Encode.bool value.loadStorageVisible)
        ])

-- decoders -------------------------------------------------------------

decodeModel : Json.Decode.Decoder Model
decodeModel = Json.Decode.map4 Model
    (Json.Decode.field "source" (Json.Decode.string))
    (Json.Decode.field "encoderVisible" (Json.Decode.bool))
    (Json.Decode.field "decoderVisible" (Json.Decode.bool))
    (Json.Decode.field "loadStorageVisible" (Json.Decode.bool))

