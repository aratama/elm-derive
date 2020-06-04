module TestSuite exposing (..)

import Expect
import Fuzz exposing (int)
import Json.Decode
import Json.Encode
import Random
import Test exposing (..)
import Type.Derive exposing (..)


testDerived : String -> Random.Generator a -> (a -> Json.Encode.Value) -> Json.Decode.Decoder a -> Test.Test
testDerived name random encode decoder =
    Test.fuzzWith { runs = 1 } Fuzz.int name <|
        \seedInt ->
            let
                seed : Random.Seed
                seed =
                    Random.initialSeed seedInt

                ( input, _ ) =
                    Random.step random seed

                encoded : Json.Encode.Value
                encoded =
                    encode input

                -- _ =
                --     Debug.log name <| Json.Encode.encode 2 encoded
                result : Result Json.Decode.Error a
                result =
                    Json.Decode.decodeValue decoder encoded
            in
            Expect.equal (Ok input) result


suite : Test
suite =
    describe "Type"
        [ testDerived "Task" Type.Derive.randomTask Type.Derive.encodeTask Type.Derive.decodeTask
        , testDerived "TodoList" Type.Derive.randomTodoList Type.Derive.encodeTodoList Type.Derive.decodeTodoList
        , testDerived "Tree" Type.Derive.randomTree Type.Derive.encodeTree Type.Derive.decodeTree
        , testDerived "Color" Type.Derive.randomColor Type.Derive.encodeColor Type.Derive.decodeColor
        , testDerived "Vector" Type.Derive.randomVector Type.Derive.encodeVector Type.Derive.decodeVector
        , testDerived "Grid" Type.Derive.randomGrid Type.Derive.encodeGrid Type.Derive.decodeGrid
        , testDerived "Dictionary" Type.Derive.randomDictionary Type.Derive.encodeDictionary Type.Derive.decodeDictionary
        , testDerived "EmptyRecord" Type.Derive.randomEmptyRecord Type.Derive.encodeEmptyRecord Type.Derive.decodeEmptyRecord
        , testDerived "Pair" Type.Derive.randomPair Type.Derive.encodePair Type.Derive.decodePair
        , testDerived "Char" Type.Derive.randomCharType Type.Derive.encodeCharType Type.Derive.decodeCharType
        , testDerived "Unit" Type.Derive.randomUnitType Type.Derive.encodeUnitType Type.Derive.decodeUnitType
        , testDerived "NestedRecord" Type.Derive.randomNestedRecord Type.Derive.encodeNestedRecord Type.Derive.decodeNestedRecord
        ]
