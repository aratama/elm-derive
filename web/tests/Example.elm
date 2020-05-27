module Example exposing (..)

import Derive.Parser exposing (..)
import Derive.Type exposing (..)
import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Parser
import Test exposing (..)


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
