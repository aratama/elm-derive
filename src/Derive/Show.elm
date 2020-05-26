module Derive.Show exposing (..)

import Derive.Type exposing (..)
import Derive.Util exposing (..)


generateShow : Module -> Result Error String
generateShow mod =
    Result.map unlines <|
        concatResults
            (\member ->
                let
                    name =
                        moduleMemberName member
                in
                case member of
                    TypeAliasMember tam ->
                        generateShowFromType tam.body
                            |> Result.map
                                (\t ->
                                    unlines
                                        [ "show" ++ name ++ " : " ++ name ++ " -> String"
                                        , "show"
                                            ++ name
                                            ++ " value = "
                                            ++ t
                                        , ""
                                        ]
                                )

                    TypeMember tm ->
                        tm.body
                            |> concatResults
                                (\variant ->
                                    concatResults generateShowFromType variant.fields
                                        |> Result.map
                                            (\f -> { variant = variant, show = "" })
                                )
                            |> Result.map
                                (\results ->
                                    unlines
                                        [ "show" ++ tm.head ++ " : " ++ tm.head ++ " -> String"
                                        , "show" ++ tm.head ++ " value = case value of"
                                        , indent <|
                                            unlines <|
                                                List.map
                                                    (\{ variant, show } ->
                                                        variant.name
                                                            ++ " "
                                                            ++ String.fromList (List.intersperse ' ' (alphabets (List.length variant.fields)))
                                                            ++ " -> \""
                                                            ++ variant.name
                                                            ++ " \" "
                                                            ++ String.join " " (List.map (\field -> "") variant.fields)
                                                    )
                                                    results
                                        ]
                                )
            )
            mod.members


generateShowFromType : Type -> Result Error String
generateShowFromType t =
    case t of
        RecordType record ->
            concatResults
                (\nameAndType ->
                    generateShowFromType nameAndType.typeName
                        |> Result.map
                            (\ta ->
                                "\""
                                    ++ nameAndType.name
                                    ++ " = \" ++ "
                                    ++ ta
                                    ++ " value."
                                    ++ nameAndType.name
                            )
                )
                record
                |> Result.map
                    (\tys ->
                        "\"{ \" ++ "
                            ++ String.join ", " tys
                            ++ " "
                            ++ " ++ \" }\""
                    )

        TypeSegmentType segs ->
            case segs of
                TypeSegmentList [ TypeSegment "Int" ] ->
                    Ok "String.fromInt"

                TypeSegmentList [ TypeSegment "String" ] ->
                    Ok "identity"

                _ ->
                    Ok "TODO"
