import { Elm } from "./Main.elm";

const stored = localStorage.getItem("todolist");

var elm = Elm.Main.init({
  node: document.getElementById("elm"),
  flags: stored ? JSON.parse(stored) : null,
});

elm.ports.save.subscribe((value) => {
  localStorage.setItem("todolist", JSON.stringify(value));
});
