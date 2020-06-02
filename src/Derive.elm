module Derive exposing (generate)

import Derive.Decoder
import Derive.Encoder
import Derive.Html
import Derive.Parser
import Derive.Random
import Derive.Type exposing (Module)
import Derive.Util exposing (Error, concatResults, derivedModuleName, node, nodeValue, unlines)
import Elm.Parser
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Exposing exposing (Exposing(..))
import Elm.Syntax.Expression exposing (Expression(..))
import Elm.Syntax.File
import Elm.Syntax.Import exposing (Import)
import Elm.Syntax.Module exposing (DefaultModuleData, Module(..), moduleName)
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Range exposing (emptyRange)
import Parser



-- run : String -> Result (List Parser.DeadEnd) Module
-- run source =
--     Parser.run Derive.Parser.parser source
-- header : Module -> String
-- header mod =
--     unlines
--         [ "-- generated automatically by elm-derive"
--         , ""
--         , "module " ++ String.join "." mod.name ++ ".Derive exposing (..)"
--         , ""
--         , "import Dict"
--         , "import Html"
--         , "import Html.Attributes"
--         , "import Json.Encode"
--         , "import Json.Decode"
--         , "import Json.Decode.Pipeline"
--         , "import Random"
--         , "import Random.Extra"
--         , "import " ++ String.join "." mod.name ++ " exposing (..)"
--         , ""
--         ]
-- generate : Module -> Result Error String
-- generate mod =
--     List.foldl
--         (Result.map2 (\a b -> b ++ "\n" ++ a ++ "\n"))
--         (Ok <| header mod)
--         [ Derive.Encoder.generateEncoder mod
--         , Derive.Decoder.generateDecoder mod
--         , Derive.Random.generateRandom mod
--         , Derive.Html.generateViewModule mod
--         ]


generate : Elm.Syntax.File.File -> Result Error Elm.Syntax.File.File
generate file =
    [ Derive.Encoder.generateEncoder
    , Derive.Decoder.generateDecoder
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
                        { moduleName = node <| moduleName <| nodeValue file.moduleDefinition
                        , moduleAlias = Nothing
                        , exposingList = Just <| node <| All emptyRange
                        }
                    ]
                , declarations = List.concat [ List.map node (List.concat results) ]
                , comments = []
                }
            )
