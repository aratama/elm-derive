import { Elm } from "./Main.elm";

var app = Elm.Main.init({
  node: document.getElementById("elm"),
  flags: Date.now(),
});
