module Derive.Random exposing (..)

import Derive.Util exposing (Error, application, concatResults, functionAnnotation, functionOrValue, node, nodeValue, objectConstructor)
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Case, Expression(..), Function, FunctionImplementation)
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Infix exposing (InfixDirection(..))
import Elm.Syntax.ModuleName exposing (ModuleName)
import Elm.Syntax.Node exposing (..)
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Signature exposing (Signature)
import Elm.Syntax.TypeAnnotation exposing (RecordField, TypeAnnotation(..))


generateRandom : File -> Result Error (List Declaration)
generateRandom file =
    concatResults (\node -> generateRandomFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateRandomFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateRandomFromDeclaration file declaration =
    case declaration of
        AliasDeclaration aliasDecl ->
            generateRandomFromType file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map
                    (\decoder ->
                        let
                            typeName : String
                            typeName =
                                nodeValue aliasDecl.name

                            decoderName : String
                            decoderName =
                                "random" ++ typeName

                            functionImplementation : FunctionImplementation
                            functionImplementation =
                                { name = node <| decoderName
                                , arguments = []
                                , expression = node decoder
                                }

                            signature : Signature
                            signature =
                                { name = node decoderName
                                , typeAnnotation = node <| Typed (node <| ( [ "Random" ], "Generator" )) [ node <| Typed (node <| ( [], typeName )) [] ]
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
            Ok []

        _ ->
            Ok []


generateRandomFromType : File -> TypeAnnotation -> Result Error Expression
generateRandomFromType file typeAnnotation =
    case typeAnnotation of
        Record fields ->
            concatResults (\(Node _ ( Node _ name, Node _ anno )) -> generateRandomFromType file anno) fields
                |> Result.map
                    (\randoms ->
                        Application
                            ([ node <| FunctionOrValue [ "Random" ] ("map" ++ String.fromInt (List.length fields))
                             , node <| objectConstructor fields
                             ]
                                ++ List.map node randoms
                            )
                    )

        Typed (Node _ ( [], "Bool" )) [] ->
            Ok (FunctionOrValue [] "randomBool")

        Typed (Node _ ( [], "Int" )) [] ->
            Ok (FunctionOrValue [] "randomInt")

        Typed (Node _ ( [], "Float" )) [] ->
            Ok (FunctionOrValue [] "randomFloat")

        Typed (Node _ ( [], "String" )) [] ->
            Ok (FunctionOrValue [] "randomString")

        Typed (Node _ ( [], "List" )) [ Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "randomList"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], "Dict" )) [ Node _ (Typed (Node _ ( [], "String" )) _), Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "randomDict"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], "Maybe" )) [ Node _ content ] ->
            generateRandomFromType file content
                |> Result.map
                    (\decoder ->
                        ParenthesizedExpression <|
                            application
                                [ functionOrValue [] "randomMaybe"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], name )) [] ->
            Ok <| FunctionOrValue [] ("random" ++ name)

        _ ->
            Err [ "Random" ]



-- import Derive.Type exposing (Module, ModuleMember(..), Type(..), Variant, moduleMemberName)
-- import Derive.Util exposing (Error, concatResults, indent, unlines)
-- mapFunction : String -> List String -> String
-- mapFunction constructor generators =
--     case generators of
--         g :: gs ->
--             unlines
--                 [ "Random.map " ++ constructor ++ " (" ++ g ++ ")"
--                 , indent <| unlines (List.map (\gen -> "|> Random.Extra.andMap (" ++ gen ++ ")") gs)
--                 ]
--         [] ->
--             "<<<INTERNAL ERROR>>>"
-- generateRandom : Module -> Result Error String
-- generateRandom mod =
--     concatResults (generateRandomModuleMember mod) mod.members
--         |> Result.map
--             (\results ->
--                 unlines
--                     [ """
-- -- random data generators ----------------------------------"
-- randomBool : Random.Generator Bool
-- randomBool = Random.uniform True [False]
-- randomInt : Random.Generator Int
-- randomInt = Random.int 0 100
-- randomString : Random.Generator String
-- randomString = Random.uniform "Alpha" ["Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet ", "Kilo", "Lima", "Mike", "Novenber", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]
-- randomFloat : Random.Generator Float
-- randomFloat = Random.float 0 1
-- randomList : Random.Generator a -> Random.Generator (List a)
-- randomList gen = Random.andThen (\\n -> Random.list (3 + n) gen) (Random.int 0 7)
-- randomMaybe : Random.Generator a -> Random.Generator (Maybe a)
-- randomMaybe gen = Random.andThen (\\n -> Random.uniform Nothing [Just n]) gen
-- randomDict : Random.Generator a -> Random.Generator (Dict.Dict String a)
-- randomDict gen = Random.map Dict.fromList (randomList (Random.map2 (\\k v -> (k, v)) randomString gen))
-- """
--                     , String.join "\n\n" results
--                     ]
--             )
-- generateRandomModuleMember : Module -> ModuleMember -> Result Error String
-- generateRandomModuleMember mod member =
--     let
--         name =
--             moduleMemberName member
--     in
--     generateRandomMember mod member
--         |> Result.map
--             (\gen ->
--                 unlines
--                     [ "random" ++ name ++ " : Random.Generator " ++ name
--                     , "random" ++ name ++ " = "
--                     , indent gen
--                     ]
--             )
-- generateRandomMember : Module -> ModuleMember -> Result Error String
-- generateRandomMember mod member =
--     case member of
--         TypeAliasMember typeAlias ->
--             generateRandomType mod typeAlias.body
--         TypeMember typeDef ->
--             let
--                 recursive =
--                     True
--             in
--             if recursive then
--                 case typeDef.variants of
--                     [] ->
--                         Err [ "generateRandomMember" ]
--                     v :: vs ->
--                         typeDef.variants
--                             |> concatResults
--                                 (\variant ->
--                                     concatResults (generateRandomType mod) variant.fields
--                                         |> Result.map (\generators -> { variant = variant, fields = generators })
--                                 )
--                             |> Result.map
--                                 (\variantResults ->
--                                     unlines
--                                         [ "let"
--                                         , indent <|
--                                             unlines <|
--                                                 List.map
--                                                     (\{ variant, fields } ->
--                                                         let
--                                                             map =
--                                                                 if List.length variant.fields == 0 then
--                                                                     "Random.constant " ++ variant.name
--                                                                 else
--                                                                     mapFunction variant.name fields
--                                                         in
--                                                         String.toLower variant.name ++ " () = " ++ map
--                                                     )
--                                                     variantResults
--                                         , "in"
--                                         , indent <|
--                                             if List.length variantResults == 1 then
--                                                 "Random.constant " ++ String.toLower v.name
--                                             else
--                                                 "Random.uniform " ++ String.toLower v.name ++ " [" ++ String.join ", " (List.map (String.toLower << .name) vs) ++ "]"
--                                         , indent <| indent "|> Random.andThen ((|>) ())"
--                                         ]
--                                 )
--             else
--                 let
--                     -- select non-recursive variants
--                     nonRecursiveVariants : List Variant
--                     nonRecursiveVariants =
--                         List.filter (\variant -> List.all (\field -> field /= TypeRef typeDef.name []) variant.fields) typeDef.variants
--                 in
--                 case List.head nonRecursiveVariants of
--                     Nothing ->
--                         Err [ "Recursize Type" ]
--                     Just variant ->
--                         concatResults (generateRandomType mod) variant.fields
--                             |> Result.map (\values -> "(" ++ variant.name ++ " " ++ String.join " " values ++ ")")
--                             |> Result.map (\values -> values)
-- generateRandomType : Module -> Type -> Result Error String
-- generateRandomType mod t =
--     case t of
--         RecordType record ->
--             concatResults (generateRandomType mod) (List.map .typeName record)
--                 |> Result.map
--                     (\values ->
--                         if List.length values == 0 then
--                             "Random.constant {}"
--                         else
--                             let
--                                 constructor =
--                                     " (\\" ++ (String.join " " <| List.map .name record) ++ " -> { " ++ (String.join ", " <| List.map (\f -> f.name ++ " = " ++ f.name) record) ++ " }) "
--                             in
--                             mapFunction constructor values
--                     )
--         TypeRef "Int" [] ->
--             Ok "randomInt"
--         TypeRef "Bool" [] ->
--             Ok "randomBool"
--         TypeRef "Float" [] ->
--             Ok "randomFloat"
--         TypeRef "String" [] ->
--             Ok "randomString"
--         TypeRef "List" [ content ] ->
--             generateRandomType mod content
--                 |> Result.map (\s -> "(randomList " ++ s ++ ")")
--         TypeRef "Maybe" [ content ] ->
--             generateRandomType mod content
--                 |> Result.map (\s -> "(randomMaybe " ++ s ++ ")")
--         TypeRef "Dict" [ TypeRef "String" [], content ] ->
--             generateRandomType mod content
--                 |> Result.map (\s -> "(randomDict " ++ s ++ ")")
--         TypeRef name [] ->
--             if List.isEmpty (List.filter (\member -> moduleMemberName member == name) mod.members) then
--                 Err [ "Type not found: " ++ name ]
--             else
--                 Ok <| "random" ++ name
--         _ ->
--             Ok "Random TODO:  Unsuported Type in TypeSegmentList "
