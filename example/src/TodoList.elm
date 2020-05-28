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
    , dict : Dictionary
    }


type alias Dictionary =
    Dict String Int
