#!/usr/bin/env node

import elm from "../dist/elm-derive.js";
import fs from "fs";
import fsx from "fs-extra";
import path from "path";

const dir = process.argv[2];
const target = process.argv[3];

if (dir && target) {
  const file = dir + target;
  const app = elm.Elm.Main.init({ flags: { dir, target } });

  app.ports.requestFile.subscribe((path) => {
    const buffer = fs.readFileSync(path);
    app.ports.receiveFile.send({ path, source: buffer.toString() });
  });

  app.ports.exitWithError.subscribe((message) => {
    process.on("exit", function () {
      process.exit(0);
    });
  });

  app.ports.exitWithError.subscribe((message) => {
    console.error(message);
    process.on("exit", function () {
      process.exit(1);
    });
  });

  app.ports.writeFile.subscribe((args) => {
    fsx.ensureDir(path.dirname(args.path));
    fs.writeFileSync(args.path, args.source);
  });
} else {
  console.log("elm-derive v0.0.1");
}
