import { viewMap } from "../controllers/views.mjs";
import loadView from "../controllers/viewLoader.mjs";

export class AdminClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.Admin);
    this.appendChild(document.importNode(template.content, true));

    const AdminOutput = this.querySelector("#AdminOutput");
    

    const getAllUsersAdmin = this.querySelector("#getAllUsersAdmin");
    getAllUsersAdmin.addEventListener("click", async () => {
      console.log("test")
      try {
        const response = await fetch("/admin");
          if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const users = await response.json();
      AdminOutput.textContent = JSON.stringify(users);
    } catch (error) {
      console.error("Feil ved henting av admin-brukere:", error);
    }
  })
}
}