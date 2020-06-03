module Derive.Html exposing (..)

import Derive.Util exposing (Error, application, concatResults, functionOrValue, node, nodeValue)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Exposing exposing (Exposing(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Module exposing (Module(..))
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
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
            customTypeDecl.constructors
                |> concatResults
                    (\(Node _ constructor) ->
                        constructor.arguments
                            |> concatResults (\(Node _ argument) -> generateViewFromTypeAnnotation file argument)
                            |> Result.map (\view -> { constructor = constructor, view = view })
                    )
                |> Result.map
                    (\pairs ->
                        let
                            r : List { constructor : ValueConstructor, view : List Expression }
                            r =
                                pairs

                            expr : Expression
                            expr =
                                LambdaExpression
                                    { args = [ node <| VarPattern "customTypeValue" ]
                                    , expression =
                                        node <|
                                            CaseExpression
                                                { expression = node <| FunctionOrValue [] "customTypeValue"
                                                , cases =
                                                    List.map
                                                        (\pair ->
                                                            let
                                                                c : Case
                                                                c =
                                                                    ( node <|
                                                                        NamedPattern
                                                                            { moduleName = []
                                                                            , name = nodeValue pair.constructor.name
                                                                            }
                                                                            (List.map (node << VarPattern << String.fromChar) (Derive.Util.alphabets (List.length pair.view)))
                                                                    , node <|
                                                                        Application
                                                                            [ node <|
                                                                                element "table" [] <|
                                                                                    List.indexedMap
                                                                                        (\i field ->
                                                                                            element "tr"
                                                                                                []
                                                                                                [ Application
                                                                                                    [ node field
                                                                                                    , node <| FunctionOrValue [] <| String.fromChar <| Derive.Util.alphabet i
                                                                                                    ]
                                                                                                ]
                                                                                        )
                                                                                        pair.view
                                                                            ]
                                                                    )
                                                            in
                                                            c
                                                        )
                                                        pairs
                                                }
                                    }
                        in
                        [ FunctionDeclaration <| function (nodeValue customTypeDecl.name) (ParenthesizedExpression <| node <| expr) ]
                    )

        _ ->
            Ok []


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
