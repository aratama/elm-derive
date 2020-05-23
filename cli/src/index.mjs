#!/usr/bin/env node

import elm from "../dist/elm-derive.js";
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
      "Derive.elm"
    );
    fsx.ensureDir(path.dirname(outputPath));
    fs.writeFileSync(outputPath, value);
  });
} else {
  console.log("elm-derive v0.0.1");
}
