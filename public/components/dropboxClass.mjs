import { viewMap } from "../controllers/views.mjs";
import loadView from "../controllers/viewLoader.mjs";

export class DropboxClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.Dropbox);
    this.appendChild(document.importNode(template.content, true));
  }
  getFilename() {
    const fileInput = this.querySelector("#fileinput");

    if (fileInput.files.length === 0) {
      return
    }
    return fileInput.files[0].name;
  }
}