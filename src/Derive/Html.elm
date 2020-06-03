module Derive.Html exposing (..)

import Derive.Util exposing (Error, application, concatResults, derivedModuleName, functionOrValue, node, nodeValue, unlines)
import Elm.Parser
import Elm.Processing
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Exposing exposing (Exposing(..))
import Elm.Syntax.Expression exposing (Expression(..))
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Import exposing (Import)
import Elm.Syntax.Module exposing (DefaultModuleData, Module(..), moduleName)
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Range exposing (emptyRange)
import Elm.Syntax.TypeAnnotation exposing (TypeAnnotation(..))


generateView : File -> Result Error (List Declaration)
generateView file =
    concatResults (\node -> generateViewFromDeclaration file (nodeValue node)) file.declarations
        |> Result.map List.concat


generateViewFromDeclaration : File -> Declaration -> Result Error (List Declaration)
generateViewFromDeclaration file declaration =
    case declaration of
        AliasDeclaration aliasDecl ->
            generateViewFromTypeAnnotation file (nodeValue aliasDecl.typeAnnotation)
                |> Result.map
                    (\expr ->
                        [ FunctionDeclaration
                            { documentation = Nothing
                            , signature = Nothing
                            , declaration =
                                node
                                    { name = node <| "view" ++ nodeValue aliasDecl.name
                                    , arguments = []
                                    , expression = node expr
                                    }
                            }
                        ]
                    )

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


generateViewFromTypeAnnotation : File -> TypeAnnotation -> Result Error Expression
generateViewFromTypeAnnotation file typeAnnotation =
    case typeAnnotation of
        -- RecordType record ->
        --     record
        --         |> concatResults
        --             (\field ->
        --                 generateViewFromType mod field.typeName
        --                     |> Result.map (\fieldResult -> { field = field, fieldResult = fieldResult })
        --             )
        --         |> Result.map
        --             (\results ->
        --                 unlines
        --                     [ "(\\value -> Html.table [] ["
        --                     , indent <| "Html.caption [] [Html.text \"Record\"], Html.tbody [] "
        --                     , indent <|
        --                         asList
        --                             (List.map
        --                                 (\{ field, fieldResult } ->
        --                                     unlines
        --                                         [ "Html.tr []"
        --                                         , indent <|
        --                                             asList
        --                                                 [ "Html.td [] [Html.text <| \"" ++ field.name ++ "\"]"
        --                                                 , "Html.td [] [" ++ fieldResult ++ " value." ++ field.name ++ "]"
        --                                                 ]
        --                                         ]
        --                                 )
        --                                 results
        --                             )
        --                     , "])"
        --                     ]
        --             )
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
                                [ functionOrValue [] "randomDict"
                                , node decoder
                                ]
                    )

        Typed (Node _ ( [], name )) [] ->
            Ok <| FunctionOrValue [] ("view" ++ name)

        _ ->
            Err [ "<<<TODO seg>>>" ]



-- import Derive.Type exposing (Module, ModuleMember(..), Type(..), moduleMemberName)
-- import Derive.Util exposing (Error, alphabet, alphabets, asList, concatResults, indent, unlines)
-- header : String
-- header =
--     """
-- viewList : (a -> Html.Html msg) -> List a -> Html.Html msg
-- viewList f xs = Html.table []
--     [ Html.caption [] [Html.text "List"]
--     , Html.tbody [] (List.indexedMap (\\i x -> Html.tr [] [ Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]   ]) xs)
--     ]
-- viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg
-- viewMaybe f m = case m of
--     Nothing -> Html.div [Html.Attributes.class "elm-derive-maybe"] [Html.text "null"]
--     Just a -> Html.div [Html.Attributes.class "elm-derive-maybe"] [f a]
-- viewBool : Bool -> Html.Html msg
-- viewBool value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| if value then "True" else "False"]
-- viewInt : Int -> Html.Html msg
-- viewInt value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromInt value]
-- viewString : String -> Html.Html msg
-- viewString value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text value]
-- viewFloat : Float -> Html.Html msg
-- viewFloat value = Html.div [Html.Attributes.class "elm-derive-primitive"] [Html.text <| String.fromFloat value]
-- viewDict : (a -> Html.Html msg) -> Dict.Dict String a -> Html.Html msg
-- viewDict f dict = Html.table []
--     [ Html.caption [] [Html.text "Dict"]
--     , Html.tbody [] (List.map (\\(k, v) -> Html.tr [] [Html.td [] [Html.text k], Html.td [] [f v]]) (Dict.toList dict))
--     ]
-- """
-- generateViewModule : Module -> Result Error String
-- generateViewModule mod =
--     concatResults
--         (\member ->
--             let
--                 name =
--                     moduleMemberName member
--                 results =
--                     case member of
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
-- generateViewFromType : Module -> Type -> Result Error String
-- generateViewFromType mod t =
--     case t of
--         RecordType record ->
--             record
--                 |> concatResults
--                     (\field ->
--                         generateViewFromType mod field.typeName
--                             |> Result.map (\fieldResult -> { field = field, fieldResult = fieldResult })
--                     )
--                 |> Result.map
--                     (\results ->
--                         unlines
--                             [ "(\\value -> Html.table [] ["
--                             , indent <| "Html.caption [] [Html.text \"Record\"], Html.tbody [] "
--                             , indent <|
--                                 asList
--                                     (List.map
--                                         (\{ field, fieldResult } ->
--                                             unlines
--                                                 [ "Html.tr []"
--                                                 , indent <|
--                                                     asList
--                                                         [ "Html.td [] [Html.text <| \"" ++ field.name ++ "\"]"
--                                                         , "Html.td [] [" ++ fieldResult ++ " value." ++ field.name ++ "]"
--                                                         ]
--                                                 ]
--                                         )
--                                         results
--                                     )
--                             , "])"
--                             ]
--                     )
--         TypeRef "Int" [] ->
--             Ok "viewInt"
--         TypeRef "Bool" [] ->
--             Ok "viewBool"
--         TypeRef "String" [] ->
--             Ok "viewString"
--         TypeRef "Float" [] ->
--             Ok "viewFloat"
--         TypeRef "List" [ content ] ->
--             generateViewFromType mod content
--                 |> Result.map (\f -> "(viewList " ++ f ++ ")")
--         TypeRef "Maybe" [ content ] ->
--             generateViewFromType mod content
--                 |> Result.map (\f -> "(viewMaybe " ++ f ++ ")")
--         TypeRef "Dict" [ TypeRef "String" [], content ] ->
--             generateViewFromType mod content
--                 |> Result.map (\f -> "(viewDict " ++ f ++ ")")
--         TypeRef name [] ->
--             if List.isEmpty (List.filter (\member -> moduleMemberName member == name) mod.members) then
--                 Ok "<TODO>"
--             else
--                 Ok <| "view" ++ name
--         _ ->
--             Ok "<TODO seg>"
