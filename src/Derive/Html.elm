module Derive.Html exposing (generateView)

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
import Elm.Writer


generateView : File -> Result Error (List Declaration)
generateView file =
    concatResults (\node -> generateViewFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateViewFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateViewFromDeclaration file declaration =
    let
        typeName : String
        typeName =
            nodeValue <|
                case declaration of
                    AliasDeclaration aliasDecl ->
                        aliasDecl.name

                    CustomTypeDeclaration customTypeDecl ->
                        customTypeDecl.name

                    _ ->
                        node "<<<Html: INTERNAL ERROR>>>"

        decoderName : String
        decoderName =
            "view" ++ typeName

        functionImplementation : Expression -> FunctionImplementation
        functionImplementation expr =
            { name = node <| decoderName
            , arguments = []
            , expression = node expr
            }

        signature : Signature
        signature =
            { name = node <| decoderName
            , typeAnnotation =
                node <|
                    FunctionTypeAnnotation
                        (node <| Typed (node ( [], typeName )) [])
                        (node <| Typed (node ( [ "Html" ], "Html" )) [ node <| GenericType "msg" ])
            }
    in
    case declaration of
        AliasDeclaration aliasDecl ->
            let
                function : Expression -> Function
                function expr =
                    { documentation = Nothing
                    , signature = Just <| node <| signature
                    , declaration = node <| functionImplementation expr
                    }
            in
            generateViewFromTypeAnnotation 0 file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map (\expr -> [ FunctionDeclaration <| function expr ])

        CustomTypeDeclaration customTypeDecl ->
            let
                function : Expression -> Function
                function expr =
                    { documentation = Nothing
                    , signature = Just <| node <| signature
                    , declaration = node <| functionImplementation expr
                    }
            in
            customTypeDecl.constructors
                |> concatResults
                    (\(Node _ constructor) ->
                        constructor.arguments
                            |> concatResults (\(Node _ argument) -> generateViewFromTypeAnnotation 0 file argument)
                            |> Result.map (\view -> { constructor = constructor, view = view })
                    )
                |> Result.map
                    (\pairs ->
                        let
                            caseExpression : { constructor : ValueConstructor, view : List Expression } -> Case
                            caseExpression pair =
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

                            expr : Expression
                            expr =
                                LambdaExpression
                                    { args = [ node <| VarPattern "customTypeValue" ]
                                    , expression =
                                        node <|
                                            CaseExpression
                                                { expression = node <| FunctionOrValue [] "customTypeValue"
                                                , cases = List.map caseExpression pairs
                                                }
                                    }
                        in
                        [ FunctionDeclaration <| function (ParenthesizedExpression <| node <| expr) ]
                    )

        _ ->
            Ok []


element : String -> List ( String, String ) -> List Expression -> Expression
element name _ children =
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


generateViewFromTypeAnnotation : Int -> File -> TypeAnnotation -> Result Error Expression
generateViewFromTypeAnnotation depth file typeAnnotation =
    case typeAnnotation of
        Record fields ->
            fields
                |> concatResults
                    (\(Node _ ( Node _ name, Node _ anno )) ->
                        generateViewFromTypeAnnotation (depth + 1) file anno
                            |> Result.map (\annotation -> { name = name, annotation = annotation })
                    )
                |> Result.map
                    (\pairs ->
                        ParenthesizedExpression <|
                            node <|
                                LambdaExpression
                                    { args = [ node <| VarPattern <| "value" ++ String.fromInt depth ]
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
                                                                        , node <| RecordAccess (node <| FunctionOrValue [] <| "value" ++ String.fromInt depth) (node pair.name)
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
            generateViewFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "viewList"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateViewFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "viewMaybe"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateViewFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "viewDict"
                                , node decoder
                                ]
                    )

        Tupled [ Node _ fst, Node _ snd ] ->
            Result.map2
                (\fstView sndView ->
                    ParenthesizedExpression <|
                        node <|
                            Application
                                [ node <| FunctionOrValue [] "viewTuple"
                                , node <| fstView
                                , node <| sndView
                                ]
                )
                (generateViewFromTypeAnnotation (depth + 1) file fst)
                (generateViewFromTypeAnnotation (depth + 1) file snd)

        Unit ->
            Ok <|
                ParenthesizedExpression <|
                    node <|
                        LambdaExpression
                            { args = [ node <| UnitPattern ]
                            , expression = node <| element "div" [] [ text "" ]
                            }

        Typed (Node _ ( [], name )) [] ->
            Ok <| FunctionOrValue [] ("view" ++ name)

        _ ->
            Err [ "Html: Unsupported Data Type: " ++ Elm.Writer.write (Elm.Writer.writeTypeAnnotation (node typeAnnotation)) ]
