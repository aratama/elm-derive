#!/usr/bin/env node

import elm from "../dist/elm-autoencoder.js";
import fs from "fs";
import fsx from "fs-extra";
import path from "path";

const file = process.argv[2];

if (file) {
  const buffer = fs.readFileSync(file);
  const app = elm.Elm.Main.init({ flags: buffer.toString() });

  app.ports.outputEncoder.subscribe((value) => {
    const outputPath = path.join(
      path.dirname(file),
      path.basename(file, ".elm"),
      "Encode.elm"
    );
    fsx.ensureDir(path.dirname(outputPath));
    fs.writeFileSync(outputPath, value);
  });

  app.ports.outputDecoder.subscribe((value) => {
    const outputPath = path.join(
      path.dirname(file),
      path.basename(file, ".elm"),
      "Decode.elm"
    );
    fsx.ensureDir(path.dirname(outputPath));
    fs.writeFileSync(outputPath, value);
  });
} else {
  console.log("elm-autoencoder v0.0.1");
}
