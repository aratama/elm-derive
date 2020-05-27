module Derive.Type exposing (..)


type alias TypeName =
    List String


type alias ModuleName =
    List String


type alias TypeNameHead =
    String


type alias TypeVariable =
    String


type alias TypeAliasDef =
    { name : TypeNameHead
    , body : Type
    }


type alias TypeDef =
    { name : TypeNameHead
    , variants : List Variant
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
    | TypeRef String (List Type)


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


findType : String -> Module -> Maybe ModuleMember
findType name mod =
    let
        filtered =
            List.filter
                (\member ->
                    case member of
                        TypeAliasMember typeAlias ->
                            typeAlias.name == name

                        TypeMember typeDef ->
                            typeDef.name == name
                )
                mod.members
    in
    List.head filtered


moduleMemberName : ModuleMember -> String
moduleMemberName member =
    case member of
        TypeAliasMember ta ->
            ta.name

        TypeMember t ->
            t.name


typeToString _ =
    "typeToString TODO"
