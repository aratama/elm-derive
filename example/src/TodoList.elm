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


type alias Id =
    Int


type Visibility
    = Active
    | All


type alias Task =
    { id : Id
    , description : String
    , posix : Int
    , completed : Bool
    }


type alias TodoList =
    { tasks : List Task
    , field : String
    , visibility : Visibility
    }
