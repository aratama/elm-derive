module Derive.Ord exposing (..)

import Derive.Util exposing (Error, alphabet, alphabets, concatResults, nodeValue)
import Elm.CodeGen as CodeGen exposing (..)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Cases, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Infix exposing (InfixDirection(..))
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))
import Elm.Writer
import Result


generate : File -> Result Error (List CodeGen.Declaration)
generate file =
    concatResults (\node -> generateOrdFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateOrdFromDeclaration : File -> Declaration -> Result Error (List CodeGen.Declaration)
generateOrdFromDeclaration file declaration =
    let
        typeName : String
        typeName =
            case declaration of
                AliasDeclaration aliasDecl ->
                    nodeValue aliasDecl.name

                CustomTypeDeclaration customTypeDecl ->
                    nodeValue <| customTypeDecl.name

                _ ->
                    "<<<ERROR>>>"

        name =
            "compare" ++ typeName
    in
    case declaration of
        AliasDeclaration aliasDecl ->
            generateOrdFromTypeAnnotation 0 file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map
                    (\encoder ->
                        let
                            typeAnnotation =
                                funAnn (fqTyped [] typeName [])
                                    (funAnn (fqTyped [] typeName []) (fqTyped [] "Order" []))
                        in
                        [ funDecl Nothing (Just typeAnnotation) name [] encoder ]
                    )

        CustomTypeDeclaration customTypeDecl ->
            case customTypeDecl.constructors of
                [ Node _ constructor ] ->
                    -- generateOrdFromTypeAnnotation 0 file
                    let
                        typeAnnotation =
                            funAnn (fqTyped [] typeName [])
                                (funAnn (fqTyped [] typeName []) (fqTyped [] "Order" []))

                        go : List (Node TypeAnnotation) -> Result Error CodeGen.Expression
                        go arguments =
                            case arguments of
                                [] ->
                                    Ok <| fqFun [] "EQ"

                                [ Node _ argument ] ->
                                    generateOrdFromTypeAnnotation 0 file argument
                                        |> Result.map
                                            (\expr ->
                                                apply
                                                    [ expr
                                                    , fqFun [] "lhs"
                                                    , fqFun [] "rhs"
                                                    ]
                                            )

                                x :: xs ->
                                    Ok <| string "<<TODO>>"
                    in
                    go constructor.arguments
                        |> Result.map
                            (\argumentExpression ->
                                [ funDecl
                                    Nothing
                                    (Just typeAnnotation)
                                    name
                                    [ parensPattern <| namedPattern (nodeValue constructor.name) [ varPattern "lhs" ]
                                    , parensPattern <| namedPattern (nodeValue constructor.name) [ varPattern "rhs" ]
                                    ]
                                    argumentExpression
                                ]
                            )

                _ ->
                    let
                        variants : List (Result Error (List ( CodeGen.Pattern, CodeGen.Expression )))
                        variants =
                            customTypeDecl.constructors
                                |> List.indexedMap
                                    (\constructorIndex constructorNode ->
                                        let
                                            constructor : ValueConstructor
                                            constructor =
                                                nodeValue constructorNode

                                            abc : String -> List String
                                            abc prefix =
                                                alphabets (List.length constructor.arguments)
                                                    |> List.map (\c -> prefix ++ String.fromChar c)

                                            fields : Result Error (List CodeGen.Expression)
                                            fields =
                                                constructor.arguments
                                                    |> concatResults (\(Node _ arg) -> generateOrdFromTypeAnnotation 0 file arg)

                                            constructorCase : Result Error (List ( CodeGen.Pattern, CodeGen.Expression ))
                                            constructorCase =
                                                fields
                                                    |> Result.map
                                                        (\field ->
                                                            let
                                                                go : Int -> List CodeGen.Expression -> CodeGen.Expression
                                                                go i fs =
                                                                    case fs of
                                                                        [] ->
                                                                            fqFun [] "EQ"

                                                                        [ compareT ] ->
                                                                            apply
                                                                                [ compareT
                                                                                , fqFun [] ("l" ++ String.fromChar (alphabet i))
                                                                                , fqFun [] ("r" ++ String.fromChar (alphabet i))
                                                                                ]

                                                                        ord :: ords ->
                                                                            caseExpr
                                                                                (apply
                                                                                    [ ord
                                                                                    , fqFun [] ("l" ++ String.fromChar (alphabet i))
                                                                                    , fqFun [] ("r" ++ String.fromChar (alphabet i))
                                                                                    ]
                                                                                )
                                                                                [ ( namedPattern "EQ" [], go (i + 1) ords )
                                                                                , ( varPattern "order", fqFun [] "order" )
                                                                                ]

                                                                eq =
                                                                    ( tuplePattern
                                                                        [ namedPattern (nodeValue constructor.name) (List.map (\c -> varPattern c) (abc "l"))
                                                                        , namedPattern (nodeValue constructor.name) (List.map (\c -> varPattern c) (abc "r"))
                                                                        ]
                                                                    , go 0 field
                                                                    )

                                                                lt =
                                                                    ( tuplePattern
                                                                        [ namedPattern (nodeValue constructor.name) (List.map (\c -> varPattern c) (abc "l"))
                                                                        , allPattern
                                                                        ]
                                                                    , fqFun [] "LT"
                                                                    )

                                                                gt =
                                                                    ( tuplePattern
                                                                        [ allPattern
                                                                        , namedPattern (nodeValue constructor.name) (List.map (\c -> varPattern c) (abc "l"))
                                                                        ]
                                                                    , fqFun [] "GT"
                                                                    )
                                                            in
                                                            if constructorIndex < List.length customTypeDecl.constructors - 1 then
                                                                [ eq, lt, gt ]

                                                            else
                                                                [ eq ]
                                                        )
                                        in
                                        case customTypeDecl.constructors of
                                            [] ->
                                                constructorCase

                                            _ ->
                                                constructorCase
                                    )
                    in
                    concatResults identity variants
                        |> Result.map
                            (\casesList ->
                                let
                                    typeAnnotation =
                                        funAnn (fqTyped [] typeName [])
                                            (funAnn (fqTyped [] typeName []) (fqTyped [] "Order" []))
                                in
                                [ funDecl
                                    Nothing
                                    (Just typeAnnotation)
                                    name
                                    [ varPattern "lhs", varPattern "rhs" ]
                                    (caseExpr
                                        (tuple [ fqFun [] "lhs", fqFun [] "rhs" ])
                                        (List.concat casesList)
                                    )
                                ]
                            )

        _ ->
            Ok []


generateOrdFromTypeAnnotation : Int -> File -> TypeAnnotation -> Result Error CodeGen.Expression
generateOrdFromTypeAnnotation depth file typeAnnotation =
    case typeAnnotation of
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (fqFun [] "compareBool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (fqFun [] "compare")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (fqFun [] "compare")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (fqFun [] "compare")

        Typed (Node _ ( [], "Char" )) [] ->
            Ok (fqFun [] "compare")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [] "compareList", encoder ])

        Typed (Node _ ( [], "Array" )) [ Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [] "compareArray", encoder ])

        Typed (Node _ ( [], "Set" )) [ Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [] "compareSet", encoder ])

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [] "compareDict", encoder ])

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateOrdFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [] "compareMaybe", encoder ])

        Typed (Node _ ( [], "Result" )) [ Node _ err, Node _ ok ] ->
            Result.map2
                (\errEncoder okEncoder -> parens <| apply [ fqFun [] "compareResult", errEncoder, okEncoder ])
                (generateOrdFromTypeAnnotation (depth + 1) file err)
                (generateOrdFromTypeAnnotation (depth + 1) file ok)

        Unit ->
            Ok <| parens <| lambda [ allPattern, allPattern ] (fqFun [] "EQ")

        Tupled [ Node _ fst, Node _ snd ] ->
            Result.map2
                (\fstEncoder sndEncoder -> parens <| apply [ fqFun [] "compareTuple", fstEncoder, sndEncoder ])
                (generateOrdFromTypeAnnotation (depth + 1) file fst)
                (generateOrdFromTypeAnnotation (depth + 1) file snd)

        Typed (Node _ ( [], moduleMemberTypeName )) [] ->
            let
                filtered =
                    List.filter
                        (\declarationNode ->
                            let
                                declaration : Declaration
                                declaration =
                                    nodeValue declarationNode
                            in
                            case declaration of
                                AliasDeclaration ta ->
                                    nodeValue ta.name == moduleMemberTypeName

                                CustomTypeDeclaration tm ->
                                    nodeValue tm.name == moduleMemberTypeName

                                _ ->
                                    False
                        )
                        file.declarations
            in
            case filtered of
                [] ->
                    Err <| [ "Encoder: Unknown Data Type: `" ++ moduleMemberTypeName ++ "`" ]

                _ ->
                    Ok <| fqFun [] ("compare" ++ moduleMemberTypeName)

        Record recordFields ->
            let
                go : Int -> List RecordField -> Result Error CodeGen.Expression
                go goDepth fields =
                    case fields of
                        [] ->
                            Ok <| fqFun [] "EQ"

                        [ ( Node _ fieldName, Node _ fieldType ) ] ->
                            generateOrdFromTypeAnnotation (depth + 1) file fieldType
                                |> Result.map
                                    (\ordFunction ->
                                        apply
                                            [ ordFunction
                                            , access (fqFun [] <| "lhs" ++ String.fromInt depth) fieldName
                                            , access (fqFun [] <| "rhs" ++ String.fromInt depth) fieldName
                                            ]
                                    )

                        ( Node _ fieldName, Node _ fieldType ) :: xs ->
                            generateOrdFromTypeAnnotation (depth + 1) file fieldType
                                |> Result.andThen
                                    (\ordFunction ->
                                        go (goDepth + 1) xs
                                            |> Result.map
                                                (\body ->
                                                    caseExpr
                                                        (apply
                                                            [ ordFunction
                                                            , access (fqFun [] <| "lhs" ++ String.fromInt depth) fieldName
                                                            , access (fqFun [] <| "rhs" ++ String.fromInt depth) fieldName
                                                            ]
                                                        )
                                                        [ ( namedPattern "EQ" [], body )
                                                        , ( varPattern ("o" ++ String.fromInt goDepth), fqFun [] ("o" ++ String.fromInt goDepth) )
                                                        ]
                                                )
                                    )
            in
            go 0 (List.map nodeValue recordFields)
                |> Result.map
                    (\body ->
                        parens <|
                            lambda
                                [ varPattern <| "lhs" ++ String.fromInt depth
                                , varPattern <| "rhs" ++ String.fromInt depth
                                ]
                                body
                    )

        _ ->
            Ok <| fqFun [] "<<<TODO>>>"
