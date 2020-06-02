module Derive exposing (generate)

import Derive.Decoder
import Derive.Encoder
import Derive.Html
import Derive.Random
import Derive.Util exposing (Error, concatResults, derivedModuleName, node, nodeValue, unlines)
import Elm.Parser
import Elm.Processing
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Exposing exposing (Exposing(..))
import Elm.Syntax.Expression exposing (Expression(..))
import Elm.Syntax.File
import Elm.Syntax.Import exposing (Import)
import Elm.Syntax.Module exposing (DefaultModuleData, Module(..), moduleName)
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Range exposing (emptyRange)


template : String
template =
    """
module Template exposing (..)

randomBool : Random.Generator Bool
randomBool = Random.uniform True [False]

randomInt : Random.Generator Int
randomInt = Random.int 0 100

randomString : Random.Generator String
randomString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]

randomFloat : Random.Generator Float
randomFloat = Random.float 0 1

randomList : Random.Generator a -> Random.Generator (List a)
randomList gen = Random.andThen (\\n -> Random.list (3 + n) gen) (Random.int 0 7)

randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
randomMaybe gen = Random.andThen (\\n -> Random.uniform Nothing [Just n]) gen

randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
randomDict gen = Random.map Dict.fromList (randomList (Random.map2 (\\k v -> (k, v)) randomString gen))

"""


generate : Elm.Syntax.File.File -> Result Error Elm.Syntax.File.File
generate file =
    case Elm.Parser.parse template of
        Err err ->
            Err [ "" ]

        Ok templateRawFile ->
            let
                templateFile =
                    Elm.Processing.process Elm.Processing.init templateRawFile
            in
            [ Derive.Encoder.generateEncoder
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
                                { moduleName = node <| moduleName <| nodeValue file.moduleDefinition
                                , moduleAlias = Nothing
                                , exposingList = Just <| node <| All emptyRange
                                }
                            ]
                        , declarations =
                            List.concat
                                [ templateFile.declarations
                                , List.map node (List.concat results)
                                ]
                        , comments = []
                        }
                    )
