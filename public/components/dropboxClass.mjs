import { viewMap } from "../../controllers/views.mjs";
import loadView from "../../controllers/viewLoader.mjs";

export class DropboxClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.Dropbox);
    this.appendChild(document.importNode(template.content, true));

    const uploadButtonVar = this.querySelector("#uploadBtn");

   uploadButtonVar.addEventListener("click", async () => {

  // 1. Hent signed URL fra Lambda
  const res = await fetch("https://cbi3l3is84.execute-api.eu-north-1.amazonaws.com/pub/generatePresignedUrl");
  const { uploadUrl } = await res.json();

  // 2. Velg fil
  const file = document.querySelector("#fileInput").files[0];

  // 3. Last opp direkte til S3
  await fetch(uploadUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type
    }
  });

  console.log("Uploaded!");
});
  }
}