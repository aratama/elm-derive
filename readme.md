# elm-derive

Experimental code generator for Elm.
elm-derive generates following codes from type decralations written in Elm:

- JSON Encoder
- JSON Decoder
- Random Data Generator
- View Function for HTML

## Demo

See https://elm-derive.netlify.app/

## Command Line Interface

```shell
$ npx aratama/elm-derive src/Your/Type/Decralation/Module.elm
```

Hopefully this command will generates `src/Your/Type/Decralation/Module/Derive.elm`.

## TODO

- support Posix?
- generate Fuzz instance?
- generate Show instance?
- generate Eq instance?
- generate Ord instance?

## Related Projects:

* [Awesome Elm / Code Generators](https://github.com/sporto/awesome-elm#code-generators) A curated list of useful Elm tutorials, libraries and software
* [Elm JSON Interop](https://github.com/pravdomil/elm-json-interop) Generate JSON encoders/decoders and TypeScript definitions from Elm types. 
* [elm-bridge](https://github.com/agrafix/elm-bridge) Derive Elm types and Json code from Haskell types
* [json-to-elm](https://github.com/eeue56/json-to-elm) Create Elm type aliases and decoders based on JSON input
* [haskell-to-elm](https://github.com/folq/haskell-to-elm) Generate Elm types and JSON encoders and decoders from Haskell types
* [json-schema-to-elm](https://github.com/dragonwasrobot/json-schema-to-elm) Generates Elm types, JSON decoders, JSON encoders and fuzz tests from JSON schema specifications