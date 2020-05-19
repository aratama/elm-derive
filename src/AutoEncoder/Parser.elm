module AutoEncoder.Parser exposing (parser)

import AutoEncoder.Type exposing (..)
import List
import Parser exposing (..)
import Set


importDIrective : Parser ModuleName
importDIrective =
    succeed identity
        |. symbol "import"
        |. skip
        |= moduleName
        |. skip
        |. symbol "exposing"
        |. skip
        |. symbol "("
        |. skip
        |. symbol ".."
        |. skip
        |. symbol ")"


moduleName : Parser ModuleName
moduleName =
    let
        go : List String -> Parser (Step (List String) (List String))
        go revStmts =
            oneOf
                [ succeed (\stmt -> Loop (stmt :: revStmts))
                    |. symbol "."
                    |= typeNameSegment
                , succeed ()
                    |> map (\_ -> Done (List.reverse revStmts))
                ]
    in
    succeed (::)
        |= typeNameSegment
        |= loop [] go


typeVar : Parser String
typeVar =
    variable
        { start = Char.isLower
        , inner = \c -> Char.isAlphaNum c || c == '_'
        , reserved = Set.fromList [ "let", "in", "case", "of" ]
        }


typeNameSegment : Parser String
typeNameSegment =
    variable
        { start = Char.isUpper
        , inner = \c -> Char.isAlphaNum c || c == '_'
        , reserved = Set.fromList [ "let", "in", "case", "of" ]
        }


typeName : Parser TypeName
typeName =
    let
        go revStmts =
            oneOf
                [ succeed (\stmt -> Loop (stmt :: revStmts))
                    |= typeNameSegment
                    |. skip
                , succeed ()
                    |> map (\_ -> Done (List.reverse revStmts))
                ]
    in
    loop [] go


nameAndType : Parser NameAndType
nameAndType =
    succeed NameAndType
        |= typeVar
        |. skip
        |. symbol ":"
        |. skip
        |= typeName
        |. skip


typeAlias : Parser TypeAlias
typeAlias =
    succeed TypeAlias
        |. skip
        |. symbol "type"
        |. skip
        |. symbol "alias"
        |. skip
        |= typeNameSegment
        |. skip
        |. symbol "="
        |. skip
        |= sequence
            { start = "{"
            , separator = ","
            , end = "}"
            , spaces = skip
            , item = nameAndType
            , trailing = Forbidden -- demand a trailing semi-colon
            }
        |. skip


typeAliases : Parser (List TypeAlias)
typeAliases =
    let
        go revStmts =
            oneOf
                [ succeed (\stmt -> Loop (stmt :: revStmts))
                    |= typeAlias
                , succeed ()
                    |> map (\_ -> Done (List.reverse revStmts))
                ]
    in
    loop [] go


skip : Parser ()
skip =
    loop 0 <|
        ifProgress <|
            oneOf
                [ lineComment "--"
                , multiComment "{-" "-}" Nestable
                , spaces
                ]


ifProgress : Parser a -> Int -> Parser (Step Int ())
ifProgress p offset =
    succeed identity
        |. p
        |= getOffset
        |> map
            (\newOffset ->
                if offset == newOffset then
                    Done ()

                else
                    Loop newOffset
            )


parser : Parser Module
parser =
    succeed Module
        |. skip
        |. skip
        |. symbol "module"
        |. skip
        |= moduleName
        |. skip
        |. symbol "exposing"
        |. skip
        |. symbol "("
        |. skip
        |. symbol ".."
        |. skip
        |. symbol ")"
        |. skip
        |. many importDIrective
        |. skip
        |= typeAliases
        |. end


many : Parser a -> Parser (List a)
many p =
    let
        go revStmts =
            oneOf
                [ succeed (\stmt -> Loop (stmt :: revStmts))
                    |= p
                    |. skip
                , succeed ()
                    |> map (\_ -> Done (List.reverse revStmts))
                ]
    in
    loop [] go
