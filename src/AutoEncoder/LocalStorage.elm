module AutoEncoder.LocalStorage exposing (generateJS, generatePort)

import AutoEncoder.Parser
import AutoEncoder.Type exposing (..)
import Parser


generateTypeAlias : TypeAlias -> String
generateTypeAlias typeAlias =
    "port subscribe" ++ typeAlias.name ++ " : Subscribe " ++ typeAlias.name


generateRef : NameAndType -> String
generateRef field =
    field.name
        ++ " : Ref { a | "
        ++ field.name
        ++ " : "
        ++ typeNameToString field.typeName
        ++ " } -> Ref "
        ++ typeNameToString field.typeName
        ++ "\n"
        ++ field.name
        ++ " (Ref ref) = Ref (ref ++ \"/"
        ++ field.name
        ++ "\")\n"


raw : TypeAlias -> String
raw typeAlias =
    "type alias "
        ++ typeAlias.name
        ++ " = "
        ++ "{ "
        ++ String.join ", " (List.map (\field -> field.name ++ ": " ++ typeNameToString field.typeName) typeAlias.fields)
        ++ " }"


type alias Error =
    List String


generatePort : Module -> Result Error String
generatePort typeModule =
    Ok <|
        String.join "\n"
            [ "port module " ++ String.join "." typeModule.name ++ ".Port exposing (..)"
            , ""
            , "import Json.Encode"
            , ""

            --, String.join "\n\n" <| List.map raw typeModule.name
            , ""
            , String.join "\n" <|
                List.map
                    (\typeAlias ->
                        String.join "\n" <|
                            List.map generateRef typeAlias.fields
                    )
                    typeModule.members
            , ""
            , "type Ref a = Ref String"
            , ""
            , "at : Int -> Ref (List b) -> Ref b"
            , "at i (Ref ref) = Ref (\"/\" ++ String.fromInt i)"
            , ""
            , "firebase : Ref Firebase"
            , "firebase = Ref \"/\""
            , ""
            , "port on_ : { ref : String, value : Json.Encode.Value } -> Cmd msg"
            , ""
            , "on : Ref a -> a -> Cmd msg"
            , "on (Ref ref) value = on_ { ref = ref, value = value }"
            , ""
            , "port set_ : { ref: String, value: Json.Encode.Value } -> Cmd msg"
            , ""
            , "set : (a -> Json.Encode.Value) -> a -> Ref a -> Cmd msg"
            , "set encoder value (Ref ref) = set_ { ref = ref, value = encoder value }"
            , ""
            , "port receive : (Json.Encode.Value -> msg) -> Sub msg"
            , ""
            , "encodeFirebase : Firebase -> Json.Encode.Value"
            , "encodeFirebase root = Json.Encode.int 42"
            ]


generateJS : List TypeAlias -> String
generateJS typeModule =
    String.join "\n"
        [ """    
// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

elm.port.set.subscribe(input => {
    database.ref(input.ref).set(input.value);
});
elm.port.once.subscribe(input => {
    database.ref(input.ref).once(value => {
        elm.port.onValue.send(value);
    });
});
elm.port.on.subscribe(input => {
    database.ref(input.ref).on(value => {
        elm.port.on.send(value);
    });
});
        """
        ]
