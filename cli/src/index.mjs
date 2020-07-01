#!/usr/bin/env node

import elm from "../dist/elm-derive.js";
import fs from "fs";
import fsx from "fs-extra";
import path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const dir = argv.dir || ".";
const dest = argv.dest || dir;
const target = argv._[0];

console.log(argv);

if (target) {
  const app = elm.Elm.Main.init({ flags: { dir, target } });

  app.ports.requestFile.subscribe((filePath) => {
    const buffer = fs.readFileSync(path.resolve(dir, filePath));
    app.ports.receiveFile.send({
      path: filePath,
      source: buffer.toString(),
    });
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
    fs.writeFileSync(path.resolve(dest, args.path), args.source);
  });
} else {
  console.log("elm-derive v0.0.1");
}
