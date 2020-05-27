module Derive.Html exposing (..)

import Derive.Type exposing (..)
import Derive.Util exposing (..)


generateViewModule : Module -> Result Error String
generateViewModule mod =
    concatResults
        (\member ->
            let
                name =
                    moduleMemberName member

                results =
                    case member of
                        TypeAliasMember ta ->
                            generateViewFromType mod ta.body

                        TypeMember t ->
                            t.variants
                                |> concatResults
                                    (\variant ->
                                        concatResults (generateViewFromType mod) variant.fields
                                            |> Result.map
                                                (\fields ->
                                                    { variant = variant, fields = fields }
                                                )
                                    )
                                |> Result.map
                                    (\variants ->
                                        unlines
                                            [ "Html.div [Html.Attributes.class \"elm-derive-type\"] <|"
                                            , indent "case value of"
                                            , indent <|
                                                indent <|
                                                    unlines <|
                                                        List.indexedMap
                                                            (\variantIndex { variant, fields } ->
                                                                variant.name
                                                                    ++ " "
                                                                    ++ String.fromList (List.intersperse ' ' (alphabets (List.length fields)))
                                                                    ++ " -> \n"
                                                                    ++ indent
                                                                        (asList
                                                                            (("Html.div [Html.Attributes.class \"elm-derive-variant\"] [ Html.text \"" ++ variant.name ++ "\"]")
                                                                                :: List.indexedMap (\fieldIndex field -> field ++ " " ++ String.fromChar (alphabet fieldIndex)) fields
                                                                            )
                                                                        )
                                                            )
                                                            variants
                                            ]
                                    )
            in
            results
                |> Result.map
                    (\result ->
                        unlines
                            [ "view" ++ name ++ " : " ++ name ++ " -> Html.Html msg"
                            , "view"
                                ++ name
                                ++ " value = "
                            , indent result
                            , ""
                            ]
                    )
        )
        mod.members
        |> Result.map
            (\results ->
                unlines
                    [ "viewList : (a -> Html.Html msg) -> List a -> Html.Html msg"
                    , "viewList f xs = Html.table [] (List.indexedMap (\\i x -> Html.tr [] [ Html.td [] [Html.text <| String.fromInt i], Html.td [] [f x]   ]) xs)"
                    , ""
                    , "viewMaybe : (a -> Html.Html msg) -> Maybe a -> Html.Html msg"
                    , "viewMaybe f m = case m of "
                    , "    Nothing -> Html.div [] [Html.text \"null\"]"
                    , "    Just a -> f a"
                    , ""
                    , "viewBool : Bool -> Html.Html msg"
                    , "viewBool value = Html.input [Html.Attributes.value <| if value then \"True\" else \"False\"] []"
                    , ""
                    , "viewInt : Int -> Html.Html msg"
                    , "viewInt value = Html.input [Html.Attributes.value <| String.fromInt value] []"
                    , ""
                    , "viewString : String -> Html.Html msg"
                    , "viewString value = Html.input [Html.Attributes.value value] []"
                    , ""
                    , "viewFloat : Float -> Html.Html msg"
                    , "viewFloat value = Html.input [Html.Attributes.value <| String.fromFloat value] []"
                    , ""
                    , unlines results
                    ]
            )


generateViewFromType : Module -> Type -> Result Error String
generateViewFromType mod t =
    case t of
        RecordType record ->
            record
                |> concatResults
                    (\field ->
                        generateViewFromType mod field.typeName
                            |> Result.map (\fieldResult -> { field = field, fieldResult = fieldResult })
                    )
                |> Result.map
                    (\results ->
                        unlines
                            [ "Html.table [] ["
                            , indent <| "Html.caption [] [Html.text \"" ++ typeToString t ++ "\"], Html.tbody [] "
                            , indent <|
                                asList
                                    (List.map
                                        (\{ field, fieldResult } ->
                                            unlines
                                                [ "Html.tr []"
                                                , indent <|
                                                    asList
                                                        [ "Html.td [] [Html.text <| \"" ++ field.name ++ "\"]"
                                                        , "Html.td [] [" ++ fieldResult ++ " value." ++ field.name ++ "]"
                                                        ]
                                                ]
                                        )
                                        results
                                    )
                            , "]"
                            ]
                    )

        TypeRef "Int" [] ->
            Ok "viewInt"

        TypeRef "Bool" [] ->
            Ok "viewBool"

        TypeRef "String" [] ->
            Ok "viewString"

        TypeRef "Float" [] ->
            Ok "viewFloat"

        TypeRef "List" [ content ] ->
            generateViewFromType mod content
                |> Result.map (\f -> "viewList " ++ f)

        TypeRef "Maybe" [ content ] ->
            generateViewFromType mod content
                |> Result.map (\f -> "viewMaybe " ++ f)

        TypeRef name [] ->
            if List.isEmpty (List.filter (\member -> moduleMemberName member == name) mod.members) then
                Ok "<TODO>"

            else
                Ok <| "view" ++ name

        _ ->
            Ok "<TODO seg>"
