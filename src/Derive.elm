module Derive exposing (generate)

import Derive.Decoder
import Derive.Encoder
import Derive.Html
import Derive.Random
import Derive.Util exposing (Error, concatResults, derivedModuleName, node, nodeValue)
import Elm.Parser
import Elm.Processing
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Exposing exposing (Exposing(..))
import Elm.Syntax.Expression exposing (Expression(..))
import Elm.Syntax.File
import Elm.Syntax.Module exposing (Module(..), moduleName)
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Range exposing (emptyRange)


template : String
template =
    """
module Template exposing (..)

decodeChar : Json.Decode.Decoder Char 
decodeChar = Json.Decode.andThen (\\str -> case String.toList str of
    [c] -> Json.Decode.succeed c
    _ -> Json.Decode.fail "decodeChar: too many charactors for Char type") Json.Decode.string 

decodeAndMap : Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
decodeAndMap =
    Json.Decode.map2 (|>)

decodeResult : Json.Decode.Decoder err -> Json.Decode.Decoder ok -> Json.Decode.Decoder (Result err ok)
decodeResult errDecoder okDecoder =
    Json.Decode.andThen (\\tag -> case tag of 
        "Err" -> Json.Decode.map Err (Json.Decode.field "a" errDecoder)
        "Ok" -> Json.Decode.map Ok (Json.Decode.field "a" okDecoder)
        _ -> Json.Decode.fail ("decodeResult: Invalid tag name: " ++ tag)) (Json.Decode.field "tag" Json.Decode.string)

encodeMaybe : (a -> Json.Encode.Value) -> Maybe a -> Json.Encode.Value
encodeMaybe f encodeMaybeValue = case encodeMaybeValue of 
    Nothing -> Json.Encode.null
    Just justValue -> f justValue

encodeChar : Char -> Json.Encode.Value
encodeChar value = Json.Encode.string (String.fromChar value)

encodeResult : (err -> Json.Encode.Value) -> (ok -> Json.Encode.Value) -> Result err ok -> Json.Encode.Value
encodeResult errEncoder okEncoder value = case value of 
    Err err -> Json.Encode.object [("tag", Json.Encode.string "Err"), ("a", errEncoder err)]
    Ok ok -> Json.Encode.object [("tag", Json.Encode.string "Ok"), ("a", okEncoder ok)]

randomBool : Random.Generator Bool
randomBool = Random.uniform True [False]

randomInt : Random.Generator Int
randomInt = Random.int 0 100

randomString : Random.Generator String
randomString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomChar : Random.Generator Char
randomChar = Random.uniform 'a' (String.toList "bcdefghijklmnopqlstuvwxyz")

randomFloat : Random.Generator Float
randomFloat = Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen = Random.andThen (\\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomArray : Random.Generator a -> Random.Generator (Array.Array a)
randomArray gen = Random.map Array.fromList (randomList gen)

randomSet : Random.Generator comparable -> Random.Generator (Set.Set comparable)
randomSet gen = Random.map Set.fromList (randomList gen)

randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
randomMaybe gen = Random.andThen (\\n -> Random.uniform Nothing [Just n]) gen

randomResult : Random.Generator err -> Random.Generator ok -> Random.Generator (Result err ok)
randomResult errGen okGen = 
    Random.andThen identity (Random.uniform (Random.map Err errGen) [Random.map Ok okGen])
    


randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen = Random.map Dict.fromList (randomList (Random.map2 (\\k v -> (k, v)) randomString gen))

viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
viewList f xs = Html.table []
    [ Html.caption [] [Html.text "List"]
    , Html.tbody [] (List.indexedMap (\\i x -> Html.tr [] [ Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]   ]) xs)
    ]

viewArray : (a -> Html.Html msg) -> Array.Array a -> Html.Html msg
viewArray f xs = viewList f (Array.toList xs)

viewSet : (a -> Html.Html msg) -> Set.Set a -> Html.Html msg
viewSet f xs = viewList f (Set.toList xs)

viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg
viewMaybe f m = case m of
    Nothing -> Html.div [Html.Attributes.class "elm-derive-maybe"] [Html.text "null"]
    Just a -> Html.div [Html.Attributes.class "elm-derive-maybe"] [f a]

viewResult : (err -> Html.Html msg) -> (ok -> Html.Html msg) -> Result err ok -> Html.Html msg 
viewResult errView okView value = case value of 
    Err err -> Html.div [Html.Attributes.class "elm-derive-result"] [errView err] 
    Ok ok -> Html.div [Html.Attributes.class "elm-derive-result"] [okView ok]

viewBool : Bool -> Html.Html msg
viewBool value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| if value then "True" else "False"]

viewInt : Int -> Html.Html msg
viewInt value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromInt value]

viewString : String -> Html.Html msg
viewString value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text value]

viewChar : Char -> Html.Html msg
viewChar value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromChar value]

viewFloat : Float -> Html.Html msg
viewFloat value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromFloat value]

viewDict : (a -> Html.Html msg) -> Dict.Dict String a -> Html.Html msg
viewDict f dict = Html.table []
    [ Html.caption [] [Html.text "Dict"]
    , Html.tbody [] (List.map (\\(k, v) -> Html.tr [] [Html.td [] [Html.text k], Html.td [] [f v]]) (Dict.toList dict))
    ]

viewTuple : (a -> Html.Html msg) -> (b -> Html.Html msg) -> (a, b) -> Html.Html msg
viewTuple fa fb (a, b) = Html.table []
    [ Html.caption [] [Html.text "Dict"]
    , Html.tbody [] 
        [ Html.tr [] 
            [ Html.td [] [Html.text "fst"] 
            , Html.td [] [fa a]    
            ]
        , Html.tr [] 
            [ Html.td [] [Html.text "snd"] 
            , Html.td [] [fb b]    
            ]
        ]
    ]


"""


generate : Elm.Syntax.File.File -> Result Error Elm.Syntax.File.File
generate file =
    case Elm.Parser.parse template of
        Err _ ->
            Err [ "template parse error" ]

        Ok templateRawFile ->
            let
                templateFile =
                    Elm.Processing.process Elm.Processing.init templateRawFile
            in
            [ Derive.Html.generateView
            , Derive.Encoder.generateEncoder
            , Derive.Decoder.generateDecoder
            , Derive.Random.generateRandom
            ]
                |> concatResults (\gen -> gen file)
                |> Result.map
                    (\results ->
                        { moduleDefinition =
                            node
                                (NormalModule
                                    { moduleName = node (derivedModuleName file)
                                    , exposingList = node (All emptyRange)
                                    }
                                )
                        , imports =
                            [ node
                                { moduleName = node [ "Dict" ]
                                , moduleAlias = Nothing
                                , exposingList = Nothing
                                }
                            , node
                                { moduleName = node [ "Html" ]
                                , moduleAlias = Nothing
                                , exposingList = Nothing
                                }
                            , node
                                { moduleName = node [ "Html", "Attributes" ]
                                , moduleAlias = Nothing
                                , exposingList = Nothing
                                }
                            , node
                                { moduleName = node [ "Json", "Encode" ]
                                , moduleAlias = Nothing
                                , exposingList = Nothing
                                }
                            , node
                                { moduleName = node [ "Json", "Decode" ]
                                , moduleAlias = Nothing
                                , exposingList = Nothing
                                }
                            , node
                                { moduleName = node [ "Random" ]
                                , moduleAlias = Nothing
                                , exposingList = Nothing
                                }
                            , node
                                { moduleName = node [ "Array" ]
                                , moduleAlias = Nothing
                                , exposingList = Nothing
                                }
                            , node
                                { moduleName = node [ "Set" ]
                                , moduleAlias = Nothing
                                , exposingList = Nothing
                                }
                            , node
                                { moduleName = node <| moduleName <| nodeValue file.moduleDefinition
                                , moduleAlias = Nothing
                                , exposingList = Just <| node <| All emptyRange
                                }
                            ]
                        , declarations =
                            List.concat
                                [ List.map node (List.concat results)
                                , templateFile.declarations
                                ]
                        , comments =
                            [ node "-- This module is generated by elm-derive, do not edit this manually"
                            ]
                        }
                    )
