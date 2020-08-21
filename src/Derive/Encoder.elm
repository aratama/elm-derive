module Derive.Encoder exposing (generateEncoder)

import Derive.Util exposing (Error, alphabets, concatResults, nodeValue)
import Elm.CodeGen as CodeGen exposing (..)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))
import Elm.Writer
import Result


generateEncoder : File -> Result Error (List CodeGen.Declaration)
generateEncoder file =
    concatResults (\node -> generateEncoderFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateEncoderFromDeclaration : File -> Declaration -> Result Error (List CodeGen.Declaration)
generateEncoderFromDeclaration file declaration =
    case declaration of
        AliasDeclaration aliasDecl ->
            generateEncoderFromTypeAnnotation 0 file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map
                    (\encoder ->
                        let
                            typeName : String
                            typeName =
                                nodeValue aliasDecl.name

                            name =
                                "encode" ++ typeName

                            ann : CodeGen.TypeAnnotation
                            ann =
                                funAnn (fqTyped [] typeName []) (fqTyped [ "Json", "Encode" ] "Value" [])
                        in
                        [ funDecl Nothing (Just ann) name [] encoder ]
                    )

        CustomTypeDeclaration customTypeDecl ->
            let
                typeName : String
                typeName =
                    nodeValue <| customTypeDecl.name

                encoderName : String
                encoderName =
                    "encode" ++ typeName

                variants : List (Result Error ( CodeGen.Pattern, CodeGen.Expression ))
                variants =
                    List.map
                        (\constructorNode ->
                            let
                                constructor : ValueConstructor
                                constructor =
                                    nodeValue constructorNode

                                abc : List String
                                abc =
                                    alphabets (List.length constructor.arguments)
                                        |> List.map String.fromChar

                                first : CodeGen.Expression
                                first =
                                    tuple
                                        [ string "tag"
                                        , apply
                                            [ fqFun [ "Json", "Encode" ] "string"
                                            , string (nodeValue constructor.name)
                                            ]
                                        ]

                                fields : Result Error (List CodeGen.Expression)
                                fields =
                                    constructor.arguments
                                        |> List.indexedMap (\i fieldNode -> ( i, fieldNode ))
                                        |> concatResults
                                            (\( i, fieldNode ) ->
                                                let
                                                    field : TypeAnnotation
                                                    field =
                                                        nodeValue fieldNode
                                                in
                                                generateEncoderFromTypeAnnotation 0 file field
                                                    |> Result.map
                                                        (\encoder ->
                                                            let
                                                                c : String
                                                                c =
                                                                    String.fromChar (Char.fromCode (97 + i))
                                                            in
                                                            tuple
                                                                [ string c
                                                                , apply [ encoder, fqFun [] c ]
                                                                ]
                                                        )
                                            )
                                        |> Result.map ((::) first)

                                constructorCase : Result Error ( CodeGen.Pattern, CodeGen.Expression )
                                constructorCase =
                                    fields
                                        |> Result.map
                                            (\fs ->
                                                let
                                                    xs : List CodeGen.Expression
                                                    xs =
                                                        fs

                                                    h : CodeGen.Expression
                                                    h =
                                                        fqFun [ "Json", "Encode" ] "object"
                                                in
                                                ( fqNamedPattern [] (nodeValue constructor.name) (List.map (\c -> varPattern c) abc)
                                                , apply [ h, list xs ]
                                                )
                                            )
                            in
                            constructorCase
                        )
                        customTypeDecl.constructors
            in
            concatResults identity variants
                |> Result.map
                    (\cases ->
                        let
                            signature =
                                funAnn (fqTyped [] typeName []) (fqTyped [ "Json", "Encode" ] "Value" [])
                        in
                        [ funDecl
                            Nothing
                            (Just signature)
                            encoderName
                            [ varPattern "val" ]
                            (caseExpr (fqFun [] "val") cases)
                        ]
                    )

        _ ->
            Ok []


generateEncoderFromTypeAnnotation : Int -> File -> TypeAnnotation -> Result Error CodeGen.Expression
generateEncoderFromTypeAnnotation depth file typeAnnotation =
    case typeAnnotation of
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (fqFun [ "Json", "Encode" ] "bool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (fqFun [ "Json", "Encode" ] "int")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (fqFun [ "Json", "Encode" ] "float")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (fqFun [ "Json", "Encode" ] "string")

        Typed (Node _ ( [], "Char" )) [] ->
            Ok (fqFun [] "encodeChar")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateEncoderFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [ "Json", "Encode" ] "list", encoder ])

        Typed (Node _ ( [], "Array" )) [ Node _ content ] ->
            generateEncoderFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [ "Json", "Encode" ] "array", encoder ])

        Typed (Node _ ( [], "Set" )) [ Node _ content ] ->
            generateEncoderFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [ "Json", "Encode" ] "set", encoder ])

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateEncoderFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [ "Json", "Encode" ] "dict", fqFun [ "Basics" ] "identity", encoder ])

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateEncoderFromTypeAnnotation (depth + 1) file content
                |> Result.map
                    (\encoder -> parens <| apply [ fqFun [] "encodeMaybe", encoder ])

        Typed (Node _ ( [], "Result" )) [ Node _ err, Node _ ok ] ->
            Result.map2
                (\errEncoder okEncoder -> parens <| apply [ fqFun [] "encodeResult", errEncoder, okEncoder ])
                (generateEncoderFromTypeAnnotation (depth + 1) file err)
                (generateEncoderFromTypeAnnotation (depth + 1) file ok)

        Unit ->
            Ok <|
                parens <|
                    lambda
                        [ unitPattern ]
                        (apply
                            [ fqFun [ "Json", "Encode" ] "list"
                            , fqFun [ "Basics" ] "identity"
                            , list []
                            ]
                        )

        Tupled [ Node _ fst, Node _ snd ] ->
            Result.map2
                (\fstEncoder sndEncoder ->
                    parens <|
                        lambda
                            [ tuplePattern [ varPattern "fst", varPattern "snd" ] ]
                            (apply
                                [ fqFun [ "Json", "Encode" ] "list"
                                , fqFun [ "Basics" ] "identity"
                                , list
                                    [ parens <|
                                        apply
                                            [ fstEncoder
                                            , fqFun [] "fst"
                                            ]
                                    , parens <|
                                        apply
                                            [ sndEncoder
                                            , fqFun [] "snd"
                                            ]
                                    ]
                                ]
                            )
                )
                (generateEncoderFromTypeAnnotation (depth + 1) file fst)
                (generateEncoderFromTypeAnnotation (depth + 1) file snd)

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
                    Ok <| fqFun [] ("encode" ++ moduleMemberTypeName)

        Record record ->
            let
                field : Node RecordField -> Result Error CodeGen.Expression
                field recordFieldNode =
                    let
                        ( Node _ name, Node _ fieldTypeAnnotation ) =
                            nodeValue recordFieldNode
                    in
                    generateEncoderFromTypeAnnotation (depth + 1) file fieldTypeAnnotation
                        |> Result.map
                            (\k ->
                                tuple
                                    [ string name
                                    , apply
                                        [ k
                                        , access (fqFun [] <| "value" ++ String.fromInt depth) name
                                        ]
                                    ]
                            )
            in
            concatResults field record
                |> Result.map
                    (\fields ->
                        parens <|
                            lambda
                                [ varPattern <| "value" ++ String.fromInt depth ]
                                (apply
                                    [ fqFun [ "Json", "Encode" ] "object"
                                    , list fields
                                    ]
                                )
                    )

        _ ->
            --Err [ "Encoder: Unsupported Data Type: " ++ Elm.Writer.write (Elm.Writer.writeTypeAnnotation typeAnnotation) ]
            Err [ "Encoder: Unsupported Data Type: " ]
