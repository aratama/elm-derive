# elm-derive

elm-derive is an experimental code generator for Elm.
It generates following codes from type decralation `Foo` (custrom type or type alias) written in Elm:

- JSON Encoder `encodeFoo : Foo -> Json.Encode.Value`
- JSON Decoder `decodeFoo : Json.Decode.Decoder Foo`
- Random Data Generator  `randomFoo : Random.Generator Foo`
- View Function for HTML `viewFoo : Foo -> Html.Html msg`
- Comparing function `compareFoo : Foo -> Foo -> Order`

## Demo

See https://elm-derive.netlify.app/

## Command Line Interface

```shell
$ npx aratama/elm-derive src/Your/Type/Decralation/Module.elm
```

Hopefully this command will generates `src/Your/Type/Decralation/Module/Derive.elm`.

## TODO

- Support Type Variables?
- Support generation from multiple modules?

## Related Projects and Articles:

* [Awesome Elm / Code Generators](https://github.com/sporto/awesome-elm#code-generators) A curated list of useful Elm tutorials, libraries and software
* [Elm JSON Interop](https://github.com/pravdomil/elm-json-interop) Generate JSON encoders/decoders and TypeScript definitions from Elm types. 

#### from JSON/JSON Schema

* [json-to-elm](https://github.com/eeue56/json-to-elm) Create Elm type aliases and decoders based on JSON input
* [json-schema-to-elm](https://github.com/dragonwasrobot/json-schema-to-elm) Generates Elm types, JSON decoders, JSON encoders and fuzz tests from JSON schema specifications
* 
#### from Haskell

* [elm-bridge](https://github.com/agrafix/elm-bridge) Derive Elm types and Json code from Haskell types
* [haskell-to-elm](https://github.com/folq/haskell-to-elm) Generate Elm types and JSON encoders and decoders from Haskell types
* [elminator](https://github.com/sras/elminator) Generate Elm type definitions and json encoders/decoders from Haskell types.
 
#### from Other lang to Elm

* [elm-cog](https://github.com/boxed/elm-cog) Code generation for Elm, using Ned Batchelder's Cog
* [Code generation is terrible and great](https://medium.com/@boxed/code-generation-is-terrible-and-great-b07ce54d382a)
* [OpenAPI で API スキーマから Elm コードを生成する](https://qiita.com/takmatsukawa/items/259e82c1d33fcd2d8f79)

#### Elm Code Generation  

* [elm-syntax-dsl](https://github.com/the-sett/elm-syntax-dsl)
* https://discourse.elm-lang.org/t/generating-elm-code/4203