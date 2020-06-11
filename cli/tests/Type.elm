module Type exposing (..)

import Array exposing (Array)
import Dict exposing (Dict)
import Maybe exposing (Maybe)
import Set exposing (Set)


type alias TodoList =
    { tasks : List Task
    , field : String
    , uid : Int
    , visibility : String
    }


type alias Task =
    { description : String
    , completed : Bool
    , edits : Maybe String
    , id : Int
    }


type Tree
    = Leaf String
    | Branch Tree Tree


type Color
    = Red
    | Green
    | Blue


type Vector
    = Vector { x : Float, y : Float }


type alias Grid =
    List (List Int)


type alias Dictionary =
    Dict String Int


type alias EmptyRecord =
    {}


type alias Pair =
    ( Int, String )


type alias CharType =
    Char


type alias UnitType =
    ()


type alias NestedRecord =
    { a : { b : { c : { d : { e : String } } } } }


type alias ArrayType =
    Array String


type alias SetType =
    Set String


type alias ResultType =
    Result String Int
