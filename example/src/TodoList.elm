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

import Maybe exposing (..)
import Dict exposing (..)

type alias Task = 
    { description : String
    , completed : Bool
    , edits : Maybe String
    , id : Int
    }

type alias Model =
    { tasks : List Task
    , field : String
    , uid : Int
    , visibility : String
    }