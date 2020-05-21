module AutoEncoder.Parser exposing (..)

import AutoEncoder.Type exposing (..)
import List
import Parser exposing (..)
import Set


importDIrective : Parser ModuleName
importDIrective =
    succeed identity
        |. keyword "import"
        |. skip
        |= moduleName
        |. skip
        |. keyword "exposing"
        |. skip
        |. symbol "("
        |. skip
        |. symbol ".."
        |. skip
        |. symbol ")"


moduleName : Parser ModuleName
moduleName =
    sepBy1 (symbol ".") typeNameSegment


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


typeHead : Parser ModuleMember
typeHead =
    succeed identity
        |. keyword "type"
        |. skip
        |= oneOf
            [ map TypeAliasMember typeAlias
            , map TypeMember typeMember
            ]



-- newType : Parser ModuleMember
-- newType :


typeAlias : Parser TypeAliasDef
typeAlias =
    succeed (\head vars body -> { head = head, vars = vars, body = body })
        |. keyword "alias"
        |. skip
        |= typeNameSegment
        |. skip
        |= succeed []
        -- |= many
        --     (succeed identity
        --         |= typeNameSegment
        --         |. skip
        --     )
        -- |. skip
        |. symbol "="
        |. skip
        |= typeParser
        |. skip


record : Parser Record
record =
    succeed identity
        |= sequence
            { start = "{"
            , separator = ","
            , end = "}"
            , spaces = skip
            , item = nameAndType
            , trailing = Forbidden -- demand a trailing semi-colon
            }
        |. skip


typeMember : Parser TypeDef
typeMember =
    succeed (\head vars body -> { head = head, vars = vars, body = body })
        |= typeNameSegment
        |. skip
        |= many
            (succeed identity
                |= typeVar
                |. skip
            )
        |. symbol "="
        |. skip
        |= sepBy1 (symbol "|" |. skip) variant


variant : Parser Variant
variant =
    succeed Variant
        |= typeNameSegment
        |. skip
        |= many (typeParser |. skip)


typeParser : Parser Type
typeParser =
    oneOf
        [ map RecordType record
        ]


typeRef : Parser Type
typeRef =
    oneOf
        [ map RecordType record
        ]


moduleMember : Parser ModuleMember
moduleMember =
    oneOf
        [ typeHead
        ]


skip : Parser ()
skip =
    loop 0 <|
        ifProgress <|
            oneOf
                [ lineCommentWorkAround "--" -- lineComment "--"
                , multiComment "{-" "-}" Nestable
                , spaces
                ]



-- https://github.com/elm/parser/issues/46


lineCommentWorkAround : String -> Parser ()
lineCommentWorkAround start =
    succeed () |. symbol start |. chompWhile (\c -> c /= '\n')


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
        |= many moduleMember
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


oneOrMore : Parser a -> Parser (List a)
oneOrMore p =
    succeed (::)
        |= p
        |= many p


sepBy1 : Parser s -> Parser a -> Parser (List a)
sepBy1 s p =
    let
        w =
            succeed identity
                |. s
                |= p
    in
    succeed (::)
        |= p
        |= many w
