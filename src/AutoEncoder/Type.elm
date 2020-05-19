module AutoEncoder.Type exposing (..)


type alias TypeName =
    List String


type alias ModuleName =
    List String


type alias NameAndType =
    { name : String
    , typeName : TypeName
    }


type alias TypeAlias =
    { name : String
    , fields : List NameAndType
    }


type alias Module =
    { name : ModuleName
    , members : List TypeAlias
    }


typeNameToString : TypeName -> String
typeNameToString typeName =
    let
        go t =
            "(" ++ "" ++ ")"
    in
    String.join " " typeName
