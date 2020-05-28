module Example exposing (..)

import Derive.Parser exposing (..)
import Derive.Type exposing (..)
import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Json.Decode
import Json.Encode
import Parser
import Random
import Test exposing (..)


type Tree
    = Leaf String
    | Branch Tree Tree


generateString : Random.Generator String
generateString =
    Random.uniform "Alpha" [ "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "GOlf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu" ]


generateTree : Random.Generator Tree
generateTree =
    let
        leaf : () -> Random.Generator Tree
        leaf () =
            Random.map Leaf generateString

        branch : () -> Random.Generator Tree
        branch () =
            Random.map2 Branch generateTree generateTree
    in
    Random.uniform leaf [ branch ]
        |> Random.andThen ((|>) ())


type alias Grid =
    List (List Int)


encodeGrid : Grid -> Json.Encode.Value
encodeGrid =
    Json.Encode.list (Json.Encode.list Json.Encode.int)



-- decoders -------------------------------------------------------------


decodeGrid : Json.Decode.Decoder Grid
decodeGrid =
    Json.Decode.list (Json.Decode.list Json.Decode.int)


suite : Test
suite =
    describe "The String module"
        [ describe "derive"
            [ test "typeParser" <|
                \_ ->
                    let
                        parsed =
                            Parser.run typeParser "String"
                    in
                    Expect.equal parsed (Ok <| TypeRef "String" [])
            , test "typeParser record" <|
                \_ ->
                    let
                        parsed =
                            Parser.run typeParser "{}"
                    in
                    Expect.equal parsed (Ok <| RecordType [])
            , test "typeParser branket" <|
                \_ ->
                    let
                        parsed =
                            Parser.run typeParser "({})"
                    in
                    Expect.equal parsed (Ok <| RecordType [])
            , test "typeParser Int" <|
                \_ ->
                    let
                        parsed =
                            Parser.run typeParser "Int"
                    in
                    Expect.equal parsed (Ok <| TypeRef "Int" [])
            , test "typeArgument" <|
                \_ ->
                    let
                        parsed =
                            Parser.run typeArgument "String"
                    in
                    Expect.equal parsed (Ok <| TypeRef "String" [])
            , test "typeArguments" <|
                \_ ->
                    let
                        parsed =
                            Parser.run (many typeArgument) "String Int"
                    in
                    Expect.equal parsed (Ok <| [ TypeRef "String" [], TypeRef "Int" [] ])
            , test "typeParser List String" <|
                \_ ->
                    let
                        parsed =
                            Parser.run typeParser "List String"
                    in
                    Expect.equal parsed (Ok <| TypeRef "List" [ TypeRef "String" [] ])
            , test "typeAlias" <|
                \_ ->
                    let
                        parsed : Result (List Parser.DeadEnd) TypeAliasDef
                        parsed =
                            Parser.run typeAlias "alias Names = List String"

                        expected : Result (List Parser.DeadEnd) TypeAliasDef
                        expected =
                            Ok <|
                                { name = "Names"
                                , body = TypeRef "List" [ TypeRef "String" [] ]
                                }
                    in
                    Expect.equal parsed expected
            , test "variant" <|
                \_ ->
                    let
                        parsed : Result (List Parser.DeadEnd) Variant
                        parsed =
                            Parser.run variant "Branch Tree Tree"

                        expected : Result (List Parser.DeadEnd) Variant
                        expected =
                            Ok <|
                                { name = "Branch"
                                , fields = [ TypeRef "Tree" [], TypeRef "Tree" [] ]
                                }
                    in
                    Expect.equal parsed expected
            ]
        ]
