module AutoEncoder.Type exposing (..)


type alias TypeName =
    List String


type alias ModuleName =
    List String


type alias TypeNameHead =
    String


type alias TypeVariable =
    String


type alias TypeAliasDef =
    { head : TypeNameHead
    , body : Type
    }


type alias TypeDef =
    { head : TypeNameHead
    , body : List Variant
    }


type ModuleMember
    = TypeAliasMember TypeAliasDef
    | TypeMember TypeDef


type alias TypeNameRef =
    -- List Int, List a, Dict a b, Dict String a, etc...
    { head : String
    , vars : List TypeSegment
    }


type TypeSegment
    = TypeSegment String
    | TypeSegmentList (List TypeSegment)


type Type
    = RecordType Record
    | TypeSegmentType TypeSegment


type alias Variant =
    { name : String
    , fields : List Type
    }


type alias NameAndType =
    { name : String
    , typeName : Type
    }


type alias Record =
    List NameAndType


type alias Module =
    { name : ModuleName
    , members : List ModuleMember
    }


typeNameToString : TypeName -> String
typeNameToString typeName =
    let
        go t =
            "(" ++ "" ++ ")"
    in
    String.join " " typeName


typeNameSegmentsToString : List TypeSegment -> String
typeNameSegmentsToString segments =
    String.join " " <| List.map typeNameSegmentToString segments


typeNameSegmentToString : TypeSegment -> String
typeNameSegmentToString segment =
    case segment of
        TypeSegment seg ->
            seg

        TypeSegmentList list ->
            "(" ++ String.join " " (List.map typeNameSegmentToString list) ++ ")"
