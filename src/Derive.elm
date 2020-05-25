module Derive exposing (..)

import Derive.Decoder
import Derive.Encoder
import Derive.Generator
import Derive.Parser
import Derive.Type exposing (..)
import Derive.Util exposing (..)
import Parser


run source =
    Parser.run Derive.Parser.parser source


header : Module -> String
header mod =
    unlines
        [ "-- generated automatically by elm-derive"
        , ""
        , "module " ++ String.join "." mod.name ++ ".Derive exposing (..)"
        , ""
        , "import Json.Encode"
        , "import Json.Decode"
        , "import Random"
        , "import Dict"
        , "import " ++ String.join "." mod.name ++ " exposing (..)"
        , ""
        , "-- encoders -------------------------------------------------------------"
        , ""
        ]


generate : Module -> Result Error String
generate mod =
    let
        r : Result Derive.Util.Error String
        r =
            List.foldl
                (\generator current ->
                    case current of
                        Err err ->
                            Err err

                        Ok generated ->
                            case generator mod of
                                Err err ->
                                    Err err

                                Ok generated_ ->
                                    Ok <| generated ++ "\n" ++ generated_ ++ "\n"
                )
                (Ok "")
                [ Derive.Encoder.generateEncoder
                , Derive.Decoder.generateDecoder
                , Derive.Generator.generateGenerator
                ]
    in
    case r of
        Err err ->
            Err err

        Ok generated ->
            Ok <| header mod ++ "\n" ++ generated
