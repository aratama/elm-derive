module Derive.Util exposing (Error, alphabet, alphabets, application, asList, concatResults, derivedModuleName, errorToString, functionAnnotation, functionOrValue, indent, node, nodeValue, objectConstructor, resolveTypeAnnotation, toErrors, unlines)

import Dict
import Elm.Syntax.Declaration exposing (Declaration(..))
import Elm.Syntax.Expression exposing (Expression(..))
import Elm.Syntax.File exposing (File)
import Elm.Syntax.Infix exposing (InfixDirection(..))
import Elm.Syntax.Module exposing (Module(..), moduleName)
import Elm.Syntax.ModuleName exposing (ModuleName)
import Elm.Syntax.Node exposing (Node(..))
import Elm.Syntax.Pattern exposing (Pattern(..))
import Elm.Syntax.Range
import Elm.Syntax.TypeAnnotation exposing (RecordDefinition, TypeAnnotation(..))



-- create a (\x y -> {x = x, y = y}) like function from { x: X, y: Y } like object definition


objectConstructor : RecordDefinition -> Expression
objectConstructor fields =
    let
        argumentNames : List String
        argumentNames =
            List.map (\(Node _ ( Node _ name, _ )) -> name) fields
    in
    ParenthesizedExpression <|
        node <|
            LambdaExpression
                { args = List.map (node << VarPattern) argumentNames
                , expression = node <| RecordExpr <| List.map (\c -> node ( node <| c, node <| FunctionOrValue [] c )) argumentNames
                }


functionOrValue : ModuleName -> String -> Node Expression
functionOrValue mod name =
    node <| FunctionOrValue mod name


application : List (Node Expression) -> Node Expression
application =
    node << Application


functionAnnotation : ( ModuleName, String ) -> ( ModuleName, String ) -> TypeAnnotation
functionAnnotation from to =
    FunctionTypeAnnotation (node <| Typed (node from) []) (node <| Typed (node to) [])


node : a -> Elm.Syntax.Node.Node a
node =
    Elm.Syntax.Node.Node Elm.Syntax.Range.emptyRange


nodeValue : Elm.Syntax.Node.Node a -> a
nodeValue =
    Elm.Syntax.Node.value


derivedModuleName : Elm.Syntax.File.File -> List String
derivedModuleName file =
    moduleName (nodeValue file.moduleDefinition) ++ [ "Derive" ]


type alias Error =
    List String


indent : String -> String
indent xs =
    String.lines xs |> List.map (\x -> "    " ++ x) |> unlines


toErrors : List (Result b a) -> List b
toErrors =
    List.filterMap
        (\r ->
            case r of
                Ok _ ->
                    Nothing

                Err err ->
                    Just err
        )


asList : List String -> String
asList list =
    case list of
        x :: xs ->
            "[ " ++ x ++ "\n" ++ unlines (List.map (\y -> ", " ++ y) xs) ++ "\n]"

        [] ->
            "[]"


unlines : List String -> String
unlines =
    String.join "\n"


concatResults : (from -> Result (List err) to) -> List from -> Result (List err) (List to)
concatResults f inputs =
    let
        result : List (Result (List err) to)
        result =
            List.map f inputs

        errors : List (List err)
        errors =
            toErrors result

        values : List to
        values =
            List.filterMap Result.toMaybe result
    in
    if List.isEmpty errors then
        Ok <| values

    else
        Err <| List.concat errors


errorToString : Error -> String
errorToString err =
    let
        total =
            List.length err
    in
    unlines <| List.indexedMap (\i e -> "Error (" ++ String.fromInt i ++ " / " ++ String.fromInt total ++ "):\n " ++ e ++ "\n") err


alphabets : Int -> List Char
alphabets n =
    List.range 0 (n - 1)
        |> List.map alphabet


alphabet : Int -> Char
alphabet i =
    Char.fromCode (97 + i)


builtinTypeDic : Dict.Dict String String
builtinTypeDic =
    Dict.fromList
        [ ( "Int", "Basics.Int" )
        , ( "String.String", "String.String" )
        , ( "String", "String.String" )
        ]


resolveTypeAnnotation : File -> TypeAnnotation -> Dict.Dict String String
resolveTypeAnnotation file typeAnnotation =
    let
        moduleNameAliases : List ( String, String )
        moduleNameAliases =
            List.filterMap
                (\(Node _ modImport) ->
                    case modImport.moduleAlias of
                        Just (Node _ modAlias) ->
                            Just ( String.join "." modAlias, String.join "." <| nodeValue modImport.moduleName )

                        _ ->
                            Nothing
                )
                file.imports
    in
    Dict.fromList moduleNameAliases
