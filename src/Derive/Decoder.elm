module Derive.Decoder exposing (generateDecoder)

import Derive.Type exposing (Module, ModuleMember(..), NameAndType, Record, Type(..), TypeAliasDef)
import Derive.Util exposing (Error, alphabets, asList, concatResults, indent, node, nodeValue, unlines)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.ModuleName exposing (ModuleName)
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.Type exposing (ValueConstructor)
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))


functionAnnotation : ( ModuleName, String ) -> ( ModuleName, String ) -> TypeAnnotation
functionAnnotation from to =
    FunctionTypeAnnotation (node <| Typed (node from) []) (node <| Typed (node to) [])



-- fieldRecodeSequence : Module -> Record -> Result Error (List String)
-- fieldRecodeSequence mod fields =
--     let
--         field : NameAndType -> Result Error String
--         field entry =
--             generateDecoderFromType mod entry.typeName
--                 |> Result.map (\t -> "(Json.Decode.field \"" ++ entry.name ++ "\" (" ++ t ++ "))")
--     in
--     concatResults field fields


generateDecoderFromTypeAnnotation : File -> TypeAnnotation -> Result Error Expression
generateDecoderFromTypeAnnotation file typeAnnotation =
    case typeAnnotation of
        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (FunctionOrValue [ "Json", "Decode" ] "bool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (FunctionOrValue [ "Json", "Decode" ] "int")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (FunctionOrValue [ "Json", "Decode" ] "float")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (FunctionOrValue [ "Json", "Decode" ] "string")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder -> Application [ node <| FunctionOrValue [ "Json", "Decode" ] "list", node decoder ])

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder -> Application [ node <| FunctionOrValue [ "Json", "Decode" ] "dict", node <| FunctionOrValue [] "identity", node decoder ])

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateDecoderFromTypeAnnotation file content
                |> Result.map
                    (\decoder -> Application [ node <| FunctionOrValue [ "Json", "Decode" ] "maybe", node decoder ])

        -- TypeRef name args ->
        --     case TypeRef name args of
        --         TypeRef typeName [] ->
        --             Ok <| "decode" ++ typeName
        --         _ ->
        --             Err [ "Unsupported Data Type: generateDecoderFromType" ]
        -- RecordType fields ->
        --     let
        --         vars : List String
        --         vars =
        --             List.indexedMap (\_ f -> f.name) fields
        --         assignments : List String
        --         assignments =
        --             List.indexedMap (\_ f -> f.name ++ " = " ++ f.name) fields
        --     in
        --     fieldRecodeSequence mod fields
        --         |> Result.map
        --             (\seq ->
        --                 let
        --                     constructor =
        --                         " (\\" ++ String.join " " vars ++ " -> { " ++ String.join ", " assignments ++ " }) "
        --                 in
        --                 mapFunction constructor seq
        --             )
        _ ->
            Err [ "Not implemented: " ++ Debug.toString typeAnnotation ]


generateDecoderFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateDecoderFromDeclaration file delaration =
    case delaration of
        AliasDeclaration aliasDecl ->
            generateDecoderFromTypeAnnotation file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map
                    (\decoder ->
                        let
                            typeName : String
                            typeName =
                                nodeValue aliasDecl.name

                            decoderName =
                                "decode" ++ typeName

                            functionImplementation : FunctionImplementation
                            functionImplementation =
                                { name = node <| decoderName
                                , arguments = []
                                , expression = node decoder
                                }

                            signature : Signature
                            signature =
                                { name = node decoderName
                                , typeAnnotation = node <| Typed (node ( [ "Json", "Decode" ], "Decoder" )) [ node <| Typed (node ( [], typeName )) [] ]
                                }

                            function : Function
                            function =
                                { documentation = Nothing
                                , signature = Just <| node signature
                                , declaration = node functionImplementation
                                }
                        in
                        [ FunctionDeclaration function ]
                    )

        CustomTypeDeclaration customTypeDecl ->
            -- let
            --     decoderName : String
            --     decoderName =
            --         "decode" ++ typeMember.name
            --     singleVariants : List Derive.Type.Variant
            --     singleVariants =
            --         List.filter (\variant -> List.length variant.fields == 0) typeMember.variants
            --     variantsHasFields : List Derive.Type.Variant
            --     variantsHasFields =
            --         List.filter (\variant -> 0 < List.length variant.fields) typeMember.variants
            --     generateCase : Derive.Type.Variant -> Result Error String
            --     generateCase variant =
            --         concatResults (\t -> generateDecoderFromType mod t) variant.fields
            --             |> Result.map (\decoders -> "\"" ++ variant.name ++ "\" -> " ++ mapFunction variant.name decoders)
            --     branches : Result Error (List String)
            --     branches =
            --         concatResults generateCase typeMember.variants
            --             |> Result.map
            --                 (\cases ->
            --                     List.concat
            --                         [ if List.isEmpty singleVariants then
            --                             []
            --                           else
            --                             [ unlines
            --                                 [ "Json.Decode.string |> Json.Decode.andThen"
            --                                 , indent "(\\variant -> case variant of"
            --                                 , indent <| indent <| unlines (List.map (\variant -> "\"" ++ variant.name ++ "\" -> Json.Decode.succeed " ++ variant.name) singleVariants)
            --                                 , indent <| indent <| "_ -> Json.Decode.fail (\"Unexpected Variant: \" ++ variant)"
            --                                 , indent ")"
            --                                 ]
            --                             ]
            --                         , if List.isEmpty variantsHasFields then
            --                             []
            --                           else
            --                             [ unlines
            --                                 [ "Json.Decode.field \"tag\" Json.Decode.string |> Json.Decode.andThen"
            --                                 , indent "(\\tag -> case tag of"
            --                                 , indent <| indent <| unlines cases
            --                                 , indent <| indent <| "_ -> Json.Decode.fail (\"Unexpected tag name: \" ++ tag)"
            --                                 , indent ")"
            --                                 ]
            --                             ]
            --                         ]
            --                 )
            -- in
            -- branches
            --     |> Result.map
            --         (\branchesStr ->
            --             unlines
            --                 [ decoderName ++ " : Json.Decode.Decoder " ++ typeMember.name
            --                 , decoderName
            --                     ++ " = "
            --                     ++ (if List.length branchesStr == 1 then
            --                             unlines branchesStr
            --                         else
            --                             unlines
            --                                 [ indent <| "Json.Decode.oneOf "
            --                                 , asList <| branchesStr
            --                                 ]
            --                        )
            --                 , ""
            --                 ]
            --         )
            Ok []

        _ ->
            Ok []



-- generateDecoderFromTypeAlias : Module -> TypeAliasDef -> Result Error String
-- generateDecoderFromTypeAlias mod alias =
--     let
--         encoderName =
--             "decode" ++ alias.name
--         decoder_ =
--             case generateDecoderFromType mod alias.body of
--                 Err _ ->
--                     "<<ERROR>>"
--                 Ok d ->
--                     d
--     in
--     case alias.body of
--         RecordType record ->
--             -- concatResults (generateDecoderFromType mod) (List.map .typeName record)
--             concatResults (\pair -> generateDecoderFromType mod pair.typeName |> Result.map (\decoder -> { pair = pair, decoder = decoder })) record
--                 |> Result.map
--                     (\seq ->
--                         unlines
--                             [ "decode"
--                                 ++ alias.name
--                                 ++ " : Json.Decode.Decoder "
--                                 ++ alias.name
--                             , "decode"
--                                 ++ alias.name
--                                 ++ " = "
--                                 ++ (if List.isEmpty record then
--                                         "Json.Decode.succeed {}"
--                                     else
--                                         -- mapFunction alias.name seq
--                                         unlines
--                                             [ "Json.Decode.succeed " ++ alias.name
--                                             , indent <| unlines <| List.map (\{ pair, decoder } -> "|> Json.Decode.Pipeline.required \"" ++ pair.name ++ "\" (" ++ decoder ++ ")") seq
--                                             ]
--                                    )
--                             , ""
--                             ]
--                     )
--         _ ->
--             Ok <|
--                 unlines
--                     [ encoderName ++ " : Json.Decode.Decoder " ++ alias.name
--                     , encoderName ++ " = " ++ decoder_
--                     , ""
--                     ]


generateDecoder : File -> Result Error (List Declaration)
generateDecoder file =
    concatResults (\node -> generateDecoderFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


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
