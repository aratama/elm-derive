-- generated automatically by elm-derive

module Derive.Web.Type.Derive exposing (..)

import Dict
import Json.Encode
import Json.Decode
import Random
import Derive.Web.Type exposing (..)

viewModel : Model -> Html msg
viewModel value = 
    Html.table [] 
        [     [ Html.tr []
            ,     [ Html.td [] [Html.text "source"]
                , Html.td [] [Html.text (\str -> Html.div [Html.Attributes.class "elm-derive-string"] [Html.text str]) source]
                ]
            ]
        ,     [ Html.tr []
            ,     [ Html.td [] [Html.text "encoderVisible"]
                , Html.td [] [Html.text Html.text encoderVisible]
                ]
            ]
        ,     [ Html.tr []
            ,     [ Html.td [] [Html.text "decoderVisible"]
                , Html.td [] [Html.text Html.text decoderVisible]
                ]
            ]
        ,     [ Html.tr []
            ,     [ Html.td [] [Html.text "loadStorageVisible"]
                , Html.td [] [Html.text Html.text loadStorageVisible]
                ]
            ]
        ]



-- sample data geenerators ----------------------------------"

generateBool : Random.Generator Bool 
generateBool = Random.uniform True [False]

generateInt : Random.Generator Int
generateInt = Random.int 0 100

generateString : Random.Generator String 
generateString = Random.uniform "a" ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]

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

