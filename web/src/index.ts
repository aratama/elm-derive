import "./index.scss";

import { Elm } from "./Main";

import CodeMirror from "codemirror";

class CodeMirrorClass extends HTMLElement {
  editor: CodeMirror.Editor | null = null;
  shadow: ShadowRoot;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });

    this.addExternalStylesheet("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.0/codemirror.min.css");
    this.addExternalStylesheet("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.0/theme/material-ocean.min.css");

    window["CodeMirror"] = CodeMirror;
  }

  connectedCallback() {
    (async () => {
      await this.importScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.0/mode/elm/elm.min.js");
      await this.importScript(
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.61.0/mode/javascript/javascript.min.js"
      );

      const root = this.shadow.ownerDocument.createElement("div");
      root.style["width"] = "100%";
      root.style["height"] = "100%";
      root.style["overflow"] = "hidden";
      this.shadow.appendChild(root);

      this.editor = CodeMirror(root, {
        value: this.getAttribute("value") || "",
        mode: "elm",
        theme: "material-ocean",
      });

      this.editor.on("change", () => {
        if (this.editor) {
          const event = new CustomEvent("code-mirror-input", {
            bubbles: true,
            composed: true,
            detail: this.editor.getValue(),
          });
          this.dispatchEvent(event);
        }
      });

      const wrapper = this.editor.getWrapperElement();
      wrapper.style["width"] = "100%";
      wrapper.style["height"] = "100%";
      wrapper.style["padding"] = "1em";
    })();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    debugger;
    if (this.editor && this.editor.getValue() !== newValue) {
      this.editor.setValue(newValue);
    }
  }

  addExternalStylesheet(url: string) {
    if (this.shadowRoot && this.shadowRoot.ownerDocument) {
      const doc = this.shadowRoot.ownerDocument;
      const link = doc.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", url);
      this.shadowRoot.appendChild(link);
    }
  }

  importScript(url: string) {
    return new Promise((resolve, reject) => {
      if (this.shadowRoot && this.shadowRoot.ownerDocument) {
        const doc = this.shadowRoot.ownerDocument;
        const link = doc.createElement("script");
        link.setAttribute("src", url);
        this.shadowRoot.appendChild(link);
        link.addEventListener("load", resolve);
      } else {
        reject();
      }
    });
  }
}

customElements.define("code-mirror", CodeMirrorClass);

const node = document.getElementById("elm");

if (!node) {
  throw new Error();
}

Elm.Main.init({
  node,
  flags: Date.now(),
});
