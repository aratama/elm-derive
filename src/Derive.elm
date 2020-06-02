module Derive exposing (generate)

import Derive.Decoder
import Derive.Encoder
import Derive.Html
import Derive.Random
import Derive.Util exposing (Error, concatResults, derivedModuleName, node, nodeValue, unlines)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Exposing exposing (Exposing(..))
import Elm.Syntax.Expression exposing (Expression(..))
import Elm.Syntax.File
import Elm.Syntax.Import exposing (Import)
import Elm.Syntax.Module exposing (DefaultModuleData, Module(..), moduleName)
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Range exposing (emptyRange)


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
                        { moduleName = node <| moduleName <| nodeValue file.moduleDefinition
                        , moduleAlias = Nothing
                        , exposingList = Just <| node <| All emptyRange
                        }
                    ]
                , declarations = List.concat [ List.map node (List.concat results) ]
                , comments = []
                }
            )
