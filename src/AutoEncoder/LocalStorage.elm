module AutoEncoder.LocalStorage exposing (generateJS, generatePort)

import AutoEncoder.Generate exposing (..)
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


generatePort : Module -> Result Error String
generatePort typeModule =
    let
        results =
            List.map (generateSaveByType typeModule) typeModule.members

        generated =
            List.filterMap Result.toMaybe results

        errors : List Error
        errors =
            toErrors results
    in
    case errors of
        _ :: _ ->
            Err <| List.concat errors

        _ ->
            Ok <|
                String.join "\n"
                    [ "-- localStorage ------------------------------------------------------------------"
                    , ""
                    , "type alias Key = String"
                    , ""
                    , String.join "\n\n" generated
                    , ""
                    , "port saveToLocalStorage : { key : Key, typeName : String, value : Json.Encode.Value } -> Cmd msg"
                    , ""
                    , "port requestToLocalStorage : { Key: Key, typeName : String } -> Cmd msg"
                    , ""
                    , "receiveHoge : (Key -> Maybe Hoge -> msg) -> Sub msg"
                    , ""
                    , "-- Then, add the following code in your entry point javascript file:"
                    , "--     elm.ports.saveToLocalStorage.subscribe(input => localStorage.save(input.key, input));"
                    , "--     elm.ports.requestToLocalStorage.subscribe(key => { const value = localStorage.get(key); elm.ports[\"receive\" + value.typeName].send({ key: key, value: input.value }) }) });"
                    , ""
                    ]


generateSaveByType : Module -> TypeAlias -> Result Error String
generateSaveByType typeModule typeAlias =
    Ok <|
        "save"
            ++ typeAlias.name
            ++ " : Key -> "
            ++ typeAlias.name
            ++ " -> Cmd msg\n"
            ++ "save"
            ++ typeAlias.name
            ++ " key value = save { key = key, value = "
            ++ String.join "." typeModule.name
            ++ ".Encode.encode"
            ++ typeAlias.name
            ++ " value }"


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
