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
