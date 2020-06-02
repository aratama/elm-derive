-- # Elm Encoder/Decoder Auto Generator (Prototype)
--
-- Put your great type definitions below.
-- This generator supports a subset of Elm syntax.
-- Note that you can define only type aliases of object as the module member.
--
-- And you can use the following types as a field type:
--
-- * Primitive Types (Int/Float/String/Bool)
-- * List a
-- * Dict String a
-- * Maybe a


module TodoList exposing (..)

import Dict exposing (..)
import Maybe exposing (..)


type alias Task =
    { id : Int
    , description : String
    , completed : Bool
    }


type alias TodoList =
    { tasks : List Task
    , field : String
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



-- type alias Many =
--     { a : Int
--     , b : String
--     , c : Float
--     , d : Bool
--     , e : Int
--     , f : String
--     , g : Float
--     , h : Bool
--     , i : Int
--     , j : String
--     , k : Float
--     , l : Bool
--     , m : Int
--     , n : String
--     , o : Float
--     , p : Bool
--     , q : Int
--     , r : String
--     , s : Float
--     , t : Bool
--     }
