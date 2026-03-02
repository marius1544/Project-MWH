import { viewMap } from "../../controllers/views.mjs";
import loadView from "../../controllers/viewLoader.mjs";

const API_BASE = "https://cbi3l3is84.execute-api.eu-north-1.amazonaws.com/pub";

export class DropboxClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.Dropbox);
    this.appendChild(document.importNode(template.content, true));

    const uploadButtonVar = this.querySelector("#uploadBtn");
    const fileInput = this.querySelector("#fileinput");

    const fileNameEl = this.querySelector("#fileName");
    const previewEl = this.querySelector("#preview");
    const statusEl = this.querySelector("#uploadStatus");

    if (!uploadButtonVar) throw new Error("Could not find #uploadBtn in component");
    if (!fileInput) throw new Error("Could not find #fileinput in component");

    fileInput.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (!file) return;

      if (fileNameEl) fileNameEl.textContent = file.name;

      if (previewEl) {
        previewEl.src = URL.createObjectURL(file);
        previewEl.alt = file.name;
      }

      if (statusEl) statusEl.textContent = "";
    });

    uploadButtonVar.addEventListener("click", async () => {
      try {
        const file = fileInput.files?.[0];
        if (!file) {
          alert("Please select a file first");
          return;
        }

        if (file.type !== "image/png") {
          alert("Only PNG files are allowed (image/png).");
          return;
        }

        if (statusEl) statusEl.textContent = "Requesting upload URL...";

        const params = new URLSearchParams({
          filename: file.name,
          type: file.type
        });

        const res = await fetch(`${API_BASE}/generatePresignedUrl?${params.toString()}`);
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`generatePresignedUrl failed: ${res.status} ${text}`);
        }

        const { uploadUrl } = await res.json();
        if (!uploadUrl) throw new Error("Response missing uploadUrl");

        if (statusEl) statusEl.textContent = "Uploading to S3...";

        const uploadRes = await fetch(uploadUrl, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": "image/png" }
        });

        if (!uploadRes.ok) {
          const t = await uploadRes.text();
          throw new Error(`S3 upload failed: ${uploadRes.status} ${t}`);
        }

        if (statusEl) statusEl.textContent = "Uploaded!";
        console.log("Uploaded!");
      } catch (err) {
        console.error(err);
        if (statusEl) statusEl.textContent = "Upload failed";
        alert(err.message);
      }
    });
  }
}