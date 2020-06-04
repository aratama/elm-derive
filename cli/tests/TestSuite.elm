module TestSuite exposing (..)

import Dict
import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Json.Decode
import Json.Encode
import Parser
import Random
import Test exposing (..)
import Type.Derive exposing (..)


suite : Test
suite =
    describe "The String module"
        [ describe "derive"
            [ test "typeParser" <|
                \_ ->
                    let
                        parsed =
                            ()
                    in
                    Expect.equal parsed ()
            ]
        ]
