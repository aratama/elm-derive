module Derive exposing (Options, generate)

import Derive.Decoder
import Derive.Encoder
import Derive.Html
import Derive.Ord
import Derive.Random
import Derive.Util exposing (Error, concatResults, derivedModuleName, nodeValue)
import Elm.CodeGen as CodeGen exposing (..)
import Elm.DSLParser
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Exposing exposing (Exposing(..))
import Elm.Syntax.Expression exposing (Expression(..))
import Elm.Syntax.File
import Elm.Syntax.Module exposing (Module(..), moduleName)
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import List.Extra as List


type alias Lib =
    { imports : List String
    , source : String
    }


libDecode : Lib
libDecode =
    { imports = [ "Array", "Dict", "Set", "Json.Decode" ]
    , source =
        """
decodeChar : Json.Decode.Decoder Char 
decodeChar = Json.Decode.andThen (\\str -> case String.toList str of
    [c] -> Json.Decode.succeed c
    _ -> Json.Decode.fail "decodeChar: too many charactors for Char type") Json.Decode.string 

decodeResult : Json.Decode.Decoder err -> Json.Decode.Decoder ok -> Json.Decode.Decoder (Result err ok)
decodeResult errDecoder okDecoder =
    Json.Decode.andThen (\\tag -> case tag of 
        "Err" -> Json.Decode.map Err (Json.Decode.field "a" errDecoder)
        "Ok" -> Json.Decode.map Ok (Json.Decode.field "a" okDecoder)
        _ -> Json.Decode.fail ("decodeResult: Invalid tag name: " ++ tag)) (Json.Decode.field "$" Json.Decode.string)

decodeAndMap : Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
decodeAndMap =
    Json.Decode.map2 (|>)
"""
    }


libEncode : Lib
libEncode =
    { imports = [ "Array", "Dict", "Set", "Json.Encode" ]
    , source =
        """
encodeMaybe : (a -> Json.Encode.Value) -> Maybe a -> Json.Encode.Value
encodeMaybe f encodeMaybeValue = case encodeMaybeValue of 
    Nothing -> Json.Encode.null
    Just justValue -> f justValue

encodeChar : Char -> Json.Encode.Value
encodeChar value = Json.Encode.string (String.fromChar value)

encodeResult : (err -> Json.Encode.Value) -> (ok -> Json.Encode.Value) -> Result err ok -> Json.Encode.Value
encodeResult errEncoder okEncoder value = case value of 
    Err err -> Json.Encode.object [("$", Json.Encode.string "Err"), ("a", errEncoder err)]
    Ok ok -> Json.Encode.object [("$", Json.Encode.string "Ok"), ("a", okEncoder ok)]
"""
    }


libRandom : Lib
libRandom =
    { imports = [ "Array", "Dict", "Set", "Random", "Random.Extra" ]
    , source =
        """
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

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen = Random.map Dict.fromList (randomList (Random.map2 (\\k v -> (k, v)) randomString gen))
"""
    }


libHtml : Lib
libHtml =
    { imports = [ "Array", "Dict", "Set", "Html", "Html.Attributes" ]
    , source =
        """
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
    }


libCompare : Lib
libCompare =
    { imports = [ "Array", "Dict", "Set" ]
    , source =
        """
compareList : (a -> a -> Order) -> List a -> List a -> Order
compareList f lhs rhs 
    = case (lhs, rhs) of 
        ([], []) -> EQ
        (x :: xs, []) -> GT    
        ([], y :: ys) -> LT
        (x :: xs, y :: ys) -> 
            case f x y of 
                EQ -> compareList f xs ys
                ret -> ret

compareMaybe : (a -> a -> Order) -> Maybe a -> Maybe a -> Order
compareMaybe f lhs rhs 
    = case (lhs, rhs) of 
        (Nothing, Nothing) -> EQ
        (Nothing, Just _) -> GT    
        (Just _, Nothing) -> LT
        (Just x, Just y) -> f x y


compareBool : Bool -> Bool -> Order
compareBool lhs rhs 
    = case (lhs, rhs) of 
        (False, False) -> EQ
        (False, True) -> LT
        (True, False) -> GT
        (True, True) -> EQ

compareSet : (comparable -> comparable -> Order) -> Set.Set comparable -> Set.Set comparable -> Order
compareSet f lhs rhs 
    = compareList f (Set.toList lhs) (Set.toList rhs)

compareArray : (a -> a -> Order) -> Array.Array a -> Array.Array a -> Order
compareArray f lhs rhs 
    = compareList f (Array.toList lhs) (Array.toList rhs)

compareDict : (a -> a -> Order) -> Dict.Dict comparable a -> Dict.Dict comparable a -> Order
compareDict f lhs rhs 
    = compareList (\\ls rs -> compareTuple compare f ls rs) (Dict.toList lhs) (Dict.toList rhs)

compareTuple : (a -> a -> Order) -> (b -> b -> Order) -> (a, b) -> (a, b) -> Order
compareTuple f g  (la, lb) (ra, rb) 
    = case f la ra of 
        EQ -> g lb rb 
        ord -> ord

compareResult : (err -> err -> Order) -> (ok -> ok -> Order) -> Result err ok -> Result err ok -> Order 
compareResult f g lhs rhs 
    = case (lhs, rhs) of 
        (Err l, Err r) -> f l r
        (Err _, _) -> LT
        (_, Err _) -> GT
        (Ok l, Ok r) -> g l r
"""
    }


type alias Options a =
    { a
        | encode : Bool
        , decode : Bool
        , random : Bool
        , html : Bool
        , ord : Bool
    }


generate : Options a -> Elm.Syntax.File.File -> Result Error CodeGen.File
generate { encode, decode, random, html, ord } file =
    let
        libs =
            List.filterMap identity
                [ if encode then
                    Just libEncode

                  else
                    Nothing
                , if decode then
                    Just libDecode

                  else
                    Nothing
                , if random then
                    Just libRandom

                  else
                    Nothing
                , if html then
                    Just libHtml

                  else
                    Nothing
                , if ord then
                    Just libCompare

                  else
                    Nothing
                ]

        template =
            String.join "\n\n" <|
                [ "module Template exposing (..)"
                , String.join "\n\n" <| List.map .source libs
                ]
    in
    case Elm.DSLParser.parse template of
        Err _ ->
            Err [ "template parse error" ]

        Ok templateFile ->
            let
                on flag gen =
                    if flag then
                        Just gen

                    else
                        Nothing

                generated : List (Elm.Syntax.File.File -> Result Error (List CodeGen.Declaration))
                generated =
                    [ on encode Derive.Encoder.generateEncoder
                    , on decode Derive.Decoder.generateDecoder
                    , on random Derive.Random.generateRandom
                    , on ord Derive.Ord.generate
                    , on html Derive.Html.generateView
                    ]
                        |> List.filterMap identity

                imports =
                    List.concatMap .imports libs
                        |> List.unique
                        |> List.sort
                        |> List.map (\mod -> importStmt [ mod ] Nothing Nothing)
            in
            generated
                |> concatResults (\gen -> gen file)
                |> Result.map
                    (\results ->
                        CodeGen.file
                            (normalModule (derivedModuleName file)
                                [--todo
                                ]
                            )
                            (imports
                                ++ [ importStmt (moduleName <| nodeValue file.moduleDefinition) Nothing (Just exposeAll)
                                   ]
                            )
                            (List.concat
                                [ List.concatMap identity results
                                , templateFile.declarations
                                ]
                            )
                            -- (Just
                            --     [ node "-- This module is generated by elm-derive, do not edit this manually"
                            --     ]
                            -- }
                            Nothing
                    )
