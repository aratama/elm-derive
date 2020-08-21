#!/usr/bin/env node

import elm from "../dist/elm-derive.js";
import fs from "fs";
import fsx from "fs-extra";
import path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2), { boolean: true });

const dir = argv.dir || ".";
const dest = argv.dest || dir;
const target = argv._[0];

const all = !(
  argv.encode ||
  argv.decode ||
  argv.random ||
  argv.html ||
  argv.ord
);
const encode = all || (argv.encode ? true : false);
const decode = all || (argv.decode ? true : false);
const random = all || (argv.random ? true : false);
const html = all || (argv.html ? true : false);
const ord = all || (argv.ord ? true : false);

//console.log(argv);

if (target) {
  const app = elm.Elm.Main.init({
    flags: { dir, target, encode, decode, random, html, ord },
  });

  app.ports.requestFile.subscribe((filePath) => {
    console.log({ dir });
    console.log({ filePath });
    try {
      const buffer = fs.readFileSync(path.resolve(dir, filePath));
      app.ports.receiveFile.send({
        path: filePath,
        source: buffer.toString(),
      });
    } catch (e) {
      console.error({ dir, dest, target });
      console.error(e);
    }
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
    //console.error(args);
    fsx.ensureDir(path.dirname(args.path));
    try {
      fs.writeFileSync(path.resolve(dest, args.path), args.source);
    } catch (e) {
      console.error({ dir, dest, target });
      console.error(args.path);
      console.error(e);
    }
  });
} else {
  console.log("elm-derive v0.0.1");
}
