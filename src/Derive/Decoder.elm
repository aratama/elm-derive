module Derive.Decoder exposing (generateDecoder)

import Derive.Type exposing (Module, ModuleMember(..), NameAndType, Record, Type(..), TypeAliasDef)
import Derive.Util exposing (Error, alphabets, asList, concatResults, indent, unlines)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.ModuleName exposing (ModuleName)
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))


fieldRecodeSequence : Module -> Record -> Result Error (List String)
fieldRecodeSequence mod fields =
    let
        field : NameAndType -> Result Error String
        field entry =
            generateDecoderFromType mod entry.typeName
                |> Result.map (\t -> "(Json.Decode.field \"" ++ entry.name ++ "\" (" ++ t ++ "))")
    in
    concatResults field fields


generateDecoderFromType : Module -> Type -> Result Error String
generateDecoderFromType mod ty =
    case ty of
        TypeRef name args ->
            case TypeRef name args of
                TypeRef "Int" [] ->
                    Ok
                        "Json.Decode.int"

                TypeRef "String" [] ->
                    Ok
                        "Json.Decode.string"

                TypeRef "Float" [] ->
                    Ok
                        "Json.Decode.float"

                TypeRef "Bool" [] ->
                    Ok
                        "Json.Decode.bool"

                TypeRef "Dict" [ TypeRef "String" [], content ] ->
                    generateDecoderFromType mod content |> Result.map (\t -> "(Json.Decode.dict " ++ t ++ ")")

                TypeRef "List" [ contntType ] ->
                    generateDecoderFromType mod contntType |> Result.map (\t -> "(Json.Decode.list " ++ t ++ ")")

                TypeRef "Maybe" [ contntType ] ->
                    generateDecoderFromType mod contntType |> Result.map (\t -> "(Json.Decode.maybe " ++ t ++ ")")

                TypeRef typeName [] ->
                    Ok <| "decode" ++ typeName

                _ ->
                    Err [ "Unsupported Data Type: generateDecoderFromType" ]

        RecordType fields ->
            let
                vars : List String
                vars =
                    List.indexedMap (\_ f -> f.name) fields

                assignments : List String
                assignments =
                    List.indexedMap (\_ f -> f.name ++ " = " ++ f.name) fields
            in
            fieldRecodeSequence mod fields
                |> Result.map
                    (\seq ->
                        let
                            constructor =
                                " (\\" ++ String.join " " vars ++ " -> { " ++ String.join ", " assignments ++ " }) "
                        in
                        mapFunction constructor seq
                    )


generateDecoderFromModuleMember : Module -> ModuleMember -> Result Error String
generateDecoderFromModuleMember mod member =
    case member of
        TypeAliasMember typeAlias ->
            generateDecoderFromTypeAlias mod typeAlias

        TypeMember typeMember ->
            let
                decoderName : String
                decoderName =
                    "decode" ++ typeMember.name

                singleVariants : List Derive.Type.Variant
                singleVariants =
                    List.filter (\variant -> List.length variant.fields == 0) typeMember.variants

                variantsHasFields : List Derive.Type.Variant
                variantsHasFields =
                    List.filter (\variant -> 0 < List.length variant.fields) typeMember.variants

                generateCase : Derive.Type.Variant -> Result Error String
                generateCase variant =
                    concatResults (\t -> generateDecoderFromType mod t) variant.fields
                        |> Result.map (\decoders -> "\"" ++ variant.name ++ "\" -> " ++ mapFunction variant.name decoders)

                branches : Result Error (List String)
                branches =
                    concatResults generateCase typeMember.variants
                        |> Result.map
                            (\cases ->
                                List.concat
                                    [ if List.isEmpty singleVariants then
                                        []

                                      else
                                        [ unlines
                                            [ "Json.Decode.string |> Json.Decode.andThen"
                                            , indent "(\\variant -> case variant of"
                                            , indent <| indent <| unlines (List.map (\variant -> "\"" ++ variant.name ++ "\" -> Json.Decode.succeed " ++ variant.name) singleVariants)
                                            , indent <| indent <| "_ -> Json.Decode.fail (\"Unexpected Variant: \" ++ variant)"
                                            , indent ")"
                                            ]
                                        ]
                                    , if List.isEmpty variantsHasFields then
                                        []

                                      else
                                        [ unlines
                                            [ "Json.Decode.field \"tag\" Json.Decode.string |> Json.Decode.andThen"
                                            , indent "(\\tag -> case tag of"
                                            , indent <| indent <| unlines cases
                                            , indent <| indent <| "_ -> Json.Decode.fail (\"Unexpected tag name: \" ++ tag)"
                                            , indent ")"
                                            ]
                                        ]
                                    ]
                            )
            in
            branches
                |> Result.map
                    (\branchesStr ->
                        unlines
                            [ decoderName ++ " : Json.Decode.Decoder " ++ typeMember.name
                            , decoderName
                                ++ " = "
                                ++ (if List.length branchesStr == 1 then
                                        unlines branchesStr

                                    else
                                        unlines
                                            [ indent <| "Json.Decode.oneOf "
                                            , asList <| branchesStr
                                            ]
                                   )
                            , ""
                            ]
                    )


generateDecoderFromTypeAlias : Module -> TypeAliasDef -> Result Error String
generateDecoderFromTypeAlias mod alias =
    let
        encoderName =
            "decode" ++ alias.name

        decoder_ =
            case generateDecoderFromType mod alias.body of
                Err _ ->
                    "<<ERROR>>"

                Ok d ->
                    d
    in
    case alias.body of
        RecordType record ->
            -- concatResults (generateDecoderFromType mod) (List.map .typeName record)
            concatResults (\pair -> generateDecoderFromType mod pair.typeName |> Result.map (\decoder -> { pair = pair, decoder = decoder })) record
                |> Result.map
                    (\seq ->
                        unlines
                            [ "decode"
                                ++ alias.name
                                ++ " : Json.Decode.Decoder "
                                ++ alias.name
                            , "decode"
                                ++ alias.name
                                ++ " = "
                                ++ (if List.isEmpty record then
                                        "Json.Decode.succeed {}"

                                    else
                                        -- mapFunction alias.name seq
                                        unlines
                                            [ "Json.Decode.succeed " ++ alias.name
                                            , indent <| unlines <| List.map (\{ pair, decoder } -> "|> Json.Decode.Pipeline.required \"" ++ pair.name ++ "\" (" ++ decoder ++ ")") seq
                                            ]
                                   )
                            , ""
                            ]
                    )

        _ ->
            Ok <|
                unlines
                    [ encoderName ++ " : Json.Decode.Decoder " ++ alias.name
                    , encoderName ++ " = " ++ decoder_
                    , ""
                    ]


generateDecoder : Module -> Result Error String
generateDecoder mod =
    concatResults (generateDecoderFromModuleMember mod) mod.members
        |> Result.map
            (\results ->
                unlines
                    [ "-- decoders -------------------------------------------------------------"
                    , ""
                    , unlines results
                    , ""
                    , mapFunctionExtra
                    ]
            )


mapFunction : String -> List String -> String
mapFunction constructor decoders =
    case decoders of
        g :: gs ->
            unlines
                [ "Json.Decode.map " ++ constructor ++ " (" ++ g ++ ")"
                , indent <| unlines (List.map (\gen -> "|> andMap (" ++ gen ++ ")") gs)
                ]

        [] ->
            "<<<INTERNAL ERROR>>>"


mapFunctionExtra : String
mapFunctionExtra =
    """
andMap : Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
andMap =
    Json.Decode.map2 (|>)
"""
