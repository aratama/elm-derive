module Derive.Html exposing (generateView)

import Derive.Util exposing (Error, concatResults, nodeValue)
import Elm.CodeGen as CodeGen exposing (..)
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


generateView : File -> Result Error (List CodeGen.Declaration)
generateView file =
    concatResults (\node -> generateViewFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateViewFromDeclaration : File -> Declaration -> Result Error (List CodeGen.Declaration)
generateViewFromDeclaration file declaration =
    let
        typeName : String
        typeName =
            case declaration of
                AliasDeclaration aliasDecl ->
                    nodeValue aliasDecl.name

                CustomTypeDeclaration customTypeDecl ->
                    nodeValue customTypeDecl.name

                _ ->
                    "<<<Html: INTERNAL ERROR>>>"

        decoderName : String
        decoderName =
            "view" ++ typeName

        typeAnnotation =
            funAnn
                (fqTyped [] typeName [])
                (fqTyped [ "Html" ] "Html" [ typeVar "msg" ])
    in
    case declaration of
        AliasDeclaration aliasDecl ->
            generateViewFromTypeAnnotation 0 file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map (\expr -> [ funDecl Nothing (Just typeAnnotation) decoderName [] expr ])

        CustomTypeDeclaration customTypeDecl ->
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
                            caseExpression : { constructor : ValueConstructor, view : List CodeGen.Expression } -> ( CodeGen.Pattern, CodeGen.Expression )
                            caseExpression pair =
                                ( namedPattern
                                    (nodeValue pair.constructor.name)
                                    (List.map (varPattern << String.fromChar) (Derive.Util.alphabets (List.length pair.view)))
                                , apply
                                    [ element "table" [] <|
                                        List.indexedMap
                                            (\i field ->
                                                element "tr"
                                                    []
                                                    [ apply
                                                        [ field
                                                        , fqFun [] <| String.fromChar <| Derive.Util.alphabet i
                                                        ]
                                                    ]
                                            )
                                            pair.view
                                    ]
                                )

                            expr : CodeGen.Expression
                            expr =
                                lambda
                                    [ varPattern "customTypeValue" ]
                                    (caseExpr
                                        (fqFun [] "customTypeValue")
                                        (List.map caseExpression pairs)
                                    )
                        in
                        [ funDecl Nothing (Just typeAnnotation) decoderName [] (parens <| expr) ]
                    )

        _ ->
            Ok []


element : String -> List ( String, String ) -> List CodeGen.Expression -> CodeGen.Expression
element name _ children =
    apply
        [ fqFun [ "Html" ] name
        , list []
        , list children
        ]


text : String -> CodeGen.Expression
text str =
    apply
        [ fqFun [ "Html" ] "text"
        , string str
        ]


generateViewFromTypeAnnotation : Int -> File -> TypeAnnotation -> Result Error CodeGen.Expression
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
                        parens <|
                            lambda
                                [ varPattern <| "value" ++ String.fromInt depth ]
                                (element "table"
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
                                                        [ apply
                                                            [ pair.annotation
                                                            , access (fqFun [] <| "value" ++ String.fromInt depth) pair.name
                                                            ]
                                                        ]
                                                    ]
                                            )
                                            pairs
                                        )
                                    ]
                                )
                    )

        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (fqFun [] "viewBool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (fqFun [] "viewInt")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (fqFun [] "viewFloat")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (fqFun [] "viewString")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateViewFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "viewList"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Array" )) [ Node _ content ] ->
            generateViewFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "viewArray"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Set" )) [ Node _ content ] ->
            generateViewFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "viewSet"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateViewFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "viewMaybe"
                                , decoder
                                ]
                    )

        Typed (Node _ ( [], "Result" )) [ Node _ err, Node _ ok ] ->
            Result.map2
                (\errView okView ->
                    parens <|
                        apply
                            [ fqFun [] "viewResult"
                            , errView
                            , okView
                            ]
                )
                (generateViewFromTypeAnnotation (depth + 1) file err)
                (generateViewFromTypeAnnotation (depth + 1) file ok)

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateViewFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\decoder ->
                        parens <|
                            apply
                                [ fqFun [] "viewDict"
                                , decoder
                                ]
                    )

        Tupled [ Node _ fst, Node _ snd ] ->
            Result.map2
                (\fstView sndView ->
                    parens <|
                        apply
                            [ fqFun [] "viewTuple"
                            , fstView
                            , sndView
                            ]
                )
                (generateViewFromTypeAnnotation (depth + 1) file fst)
                (generateViewFromTypeAnnotation (depth + 1) file snd)

        Unit ->
            Ok <|
                parens <|
                    lambda
                        [ unitPattern ]
                        (element "div" [] [ text "" ])

        Typed (Node _ ( [], name )) [] ->
            Ok <| fqFun [] ("view" ++ name)

        _ ->
            -- Err [ "Html: Unsupported Data Type: " ++ Elm.Writer.write (Elm.Writer.writeTypeAnnotation typeAnnotation) ]
            Err [ "Html: Unsupported Data Type: " ]
