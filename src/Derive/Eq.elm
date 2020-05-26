module Derive.Eq exposing (..)

import Derive.Type exposing (..)
import Derive.Util exposing (..)


generateEq : Module -> Result Error String
generateEq mod =
    concatResults
        (\member ->
            let
                name =
                    moduleMemberName member
            in
            case member of
                TypeAliasMember _ ->
                    Ok "TODO"

                TypeMember t ->
                    t.body
                        |> concatResults
                            (\variant ->
                                Ok <|
                                    unlines
                                        [ "(" ++ variant.name ++ ", " ++ variant.name ++ ") ->"
                                        , indent <|
                                            if List.isEmpty variant.fields then
                                                "True"

                                            else
                                                "foldl True (&&) [(==) a_a b_a, (==) b_a b_b" ++ "" ++ "]"
                                        ]
                            )
                        |> Result.map
                            (\results ->
                                unlines
                                    [ "eq" ++ name ++ " : " ++ name ++ " -> " ++ name ++ " -> Bool"
                                    , "eq" ++ name ++ " a b = case (a, b) of "
                                    , indent <| String.join "\n\n" results
                                    , ""
                                    , indent "_ -> False"
                                    , ""
                                    ]
                            )
        )
        mod.members
        |> Result.map (\results -> unlines results)


generateEqFromType : Type -> Result Error String
generateEqFromType t =
    case t of
        RecordType record ->
            Ok "TODO"

        TypeSegmentType segs ->
            case segs of
                TypeSegmentList [ TypeSegment "Int" ] ->
                    Ok "(==)"

                TypeSegmentList [ TypeSegment "String" ] ->
                    Ok "(==)"

                _ ->
                    Ok "TODO"
