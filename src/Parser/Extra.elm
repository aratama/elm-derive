module Parser.Extra exposing (..)

import List.Extra as List
import Parser exposing (DeadEnd, Problem(..))


deadEndToString : String -> DeadEnd -> String
deadEndToString src deadEnd =
    let
        lineNumberWidth =
            4

        row =
            deadEnd.row - 1
    in
    "("
        ++ String.fromInt deadEnd.row
        ++ ","
        ++ String.fromInt deadEnd.col
        ++ ") "
        ++ problemToString deadEnd.problem
        ++ "\n\n"
        ++ String.padLeft lineNumberWidth ' ' (String.fromInt (row + 1))
        ++ "| "
        ++ Maybe.withDefault "" (List.getAt row (String.lines src))
        ++ "\n"
        ++ String.repeat (lineNumberWidth + 2 + deadEnd.col - 1) " "
        ++ "^"


problemToString : Problem -> String
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
