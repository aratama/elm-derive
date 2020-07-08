module TodoList exposing (..)

import Dict exposing (..)
import Maybe exposing (..)


type alias Id =
    Int


type Visibility
    = Active
    | All
    | Completed


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
