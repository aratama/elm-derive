import { Elm } from "./Main.elm";
import "regenerator-runtime/runtime";
import fs from "fs";

const buffer = fs.readFileSync("example/TodoList.elm");

const app = Elm.Main.init({ flags: buffer.toString() });

app.ports.output.subscribe((value) => {
  console.log(value);
});
