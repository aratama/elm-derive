module Parser.Extra exposing (..)

import List.Extra as List
import Parser exposing (Problem(..))


deadEndToString src deadEnd =
    "("
        ++ String.fromInt deadEnd.row
        ++ ","
        ++ String.fromInt deadEnd.col
        ++ ") "
        ++ problemToString deadEnd.problem
        ++ "\n\n"
        ++ Maybe.withDefault "" (List.getAt ((deadEnd.row - 1) // 2) (String.lines src))


problemToString problem =
    case problem of
        Expecting s ->
            "Expecting " ++ s

        ExpectingInt ->
            "ExpectingInt"

        ExpectingHex ->
            "ExpectingHex"

        ExpectingOctal ->
            "ExpectingOctal"

        ExpectingBinary ->
            "ExpectingBinary"

        ExpectingFloat ->
            "ExpectingFloat"

        ExpectingNumber ->
            "ExpectingNumber"

        ExpectingVariable ->
            "ExpectingVariable"

        ExpectingSymbol s ->
            "ExpectingSymbol `" ++ s ++ "`"

        ExpectingKeyword s ->
            "ExpectingKeyword `" ++ s ++ "`"

        ExpectingEnd ->
            "ExpectingEnd"

        UnexpectedChar ->
            "UnexpectedChar"

        Problem s ->
            "Problem `" ++ s ++ "`"

        BadRepeat ->
            "BadRepeat"
