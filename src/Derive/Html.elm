module Derive.Html exposing (..)

import Derive.Util exposing (Error, application, concatResults, derivedModuleName, functionAnnotation, functionOrValue, node, nodeValue, unlines)
import Elm.Parser
import Elm.Processing
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Exposing exposing (Exposing(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Import exposing (Import)
import Elm.Syntax.Module exposing (DefaultModuleData, Module(..), moduleName)
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Range exposing (emptyRange)
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.TypeAnnotation exposing (TypeAnnotation(..))


generateView : File -> Result Error (List Declaration)
generateView file =
    concatResults (\node -> generateViewFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateViewFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateViewFromDeclaration file declaration =
    case declaration of
        AliasDeclaration aliasDecl ->
            let
                decoderName : String -> String
                decoderName typeName =
                    "view" ++ typeName

                functionImplementation : String -> Expression -> FunctionImplementation
                functionImplementation typeName expr =
                    { name = node <| decoderName typeName
                    , arguments = []
                    , expression = node expr
                    }

                signature : String -> Signature
                signature typeName =
                    { name = node <| decoderName typeName
                    , typeAnnotation =
                        node <|
                            FunctionTypeAnnotation
                                (node <| Typed (node ( [], typeName )) [])
                                (node <|
                                    Typed (node ( [ "Html" ], "Html" ))
                                        [ node <| GenericType "msg"
                                        ]
                                )
                    }

                function : String -> Expression -> Function
                function typeName expr =
                    { documentation = Nothing
                    , signature = Just <| node <| signature typeName
                    , declaration = node <| functionImplementation typeName expr
                    }
            in
            generateViewFromTypeAnnotation file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map (\expr -> [ FunctionDeclaration <| function (nodeValue aliasDecl.name) expr ])

        CustomTypeDeclaration customTypeDecl ->
            Ok []

        _ ->
            Ok []



--                         TypeAliasMember ta ->
--                             generateViewFromType mod ta.body
--                         TypeMember t ->
--                             t.variants
--                                 |> concatResults
--                                     (\variant ->
--                                         concatResults (generateViewFromType mod) variant.fields
--                                             |> Result.map
--                                                 (\fields ->
--                                                     { variant = variant, fields = fields }
--                                                 )
--                                     )
--                                 |> Result.map
--                                     (\variants ->
--                                         unlines
--                                             [ "\\typeValue -> Html.div [Html.Attributes.class \"elm-derive-type\"] <|"
--                                             , indent "case typeValue of"
--                                             , indent <|
--                                                 indent <|
--                                                     unlines <|
--                                                         List.indexedMap
--                                                             (\variantIndex { variant, fields } ->
--                                                                 variant.name
--                                                                     ++ " "
--                                                                     ++ String.fromList (List.intersperse ' ' (alphabets (List.length fields)))
--                                                                     ++ " -> \n"
--                                                                     ++ indent
--                                                                         (asList <|
--                                                                             [ "Html.div [Html.Attributes.class \"elm-derive-variant\", Html.Attributes.class \"elm-derive-variant-" ++ String.fromInt variantIndex ++ "\"] [ Html.text \"" ++ variant.name ++ "\"]"
--                                                                             , unlines
--                                                                                 [ "Html.div [Html.Attributes.class \"elm-derive-variant-fields\"]"
--                                                                                 , indent <| asList <| List.indexedMap (\fieldIndex field -> field ++ " " ++ String.fromChar (alphabet fieldIndex)) fields
--                                                                                 ]
--                                                                             ]
--                                                                         )
--                                                             )
--                                                             variants
--                                             ]
--                                     )
--             in
--             results
--                 |> Result.map
--                     (\result ->
--                         unlines
--                             [ "view" ++ name ++ " : " ++ name ++ " -> Html.Html msg"
--                             , "view"
--                                 ++ name
--                                 ++ " = "
--                             , indent result
--                             , ""
--                             ]
--                     )
--         )
--         mod.members
--         |> Result.map
--             (\results ->
--                 unlines
--                     [ header
--                     , unlines results
--                     ]
--             )


element : String -> List ( String, String ) -> List Expression -> Expression
element name attributes children =
    Application
        [ node <| FunctionOrValue [ "Html" ] name
        , node <| ListExpr []
        , node <| ListExpr <| List.map node children
        ]


text : String -> Expression
text str =
    Application
        [ node <| FunctionOrValue [ "Html" ] "text"
        , node <| Literal str
        ]


generateViewFromTypeAnnotation : File -> TypeAnnotation -> Result Error Expression
generateViewFromTypeAnnotation file typeAnnotation =
    case typeAnnotation of
        Record fields ->
            fields
                |> concatResults
                    (\(Node _ ( Node _ name, Node _ anno )) ->
                        generateViewFromTypeAnnotation file anno
                            |> Result.map (\annotation -> { name = name, annotation = annotation })
                    )
                |> Result.map
                    (\pairs ->
                        ParenthesizedExpression <|
                            node <|
                                LambdaExpression
                                    { args = [ node <| VarPattern "value" ]
                                    , expression =
                                        node <|
                                            element "table"
                                                []
                                                [ element "tbody"
                                                    []
                                                    (List.map
                                                        (\pair ->
                                                            element "tr"
                                                                []
                                                                [ element "td" [] [ text <| pair.name ]
                                                                , element "td"
                                                                    []
                                                                    [ Application
                                                                        [ node pair.annotation
                                                                        , node <| RecordAccess (node <| FunctionOrValue [] "value") (node pair.name)
                                                                        ]
                                                                    ]
                                                                ]
                                                        )
                                                        pairs
                                                    )
                                                ]
                                    }
                    )

        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (FunctionOrValue [] "viewBool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (FunctionOrValue [] "viewInt")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (FunctionOrValue [] "viewFloat")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (FunctionOrValue [] "viewString")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateViewFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "viewList"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateViewFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "viewMaybe"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateViewFromTypeAnnotation file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "viewDict"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], name )) [] ->
            Ok <| FunctionOrValue [] ("view" ++ name)

        _ ->
            Err [ "<<<TODO seg>>>" ]
