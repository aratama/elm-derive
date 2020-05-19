import elm from "../dist/index.js";
import fs from "fs";
import fsx from "fs-extra";
import path from "path";

const file = process.argv[2];
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
