import { viewMap } from "../controllers/views.mjs";
import loadView from "../controllers/viewLoader.mjs";

export class AdminClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.Adminlogin);
    this.appendChild(document.importNode(template.content, true));

    const AdminOutput = this.querySelector("#AdminOutput");
    const adminPasswordButton = this.querySelector("#adminPasswordButton");
    const adminPasswordInput = this.querySelector("#adminPasswordInput");
    const getAllUsersAdmin = this.querySelector("#getAllUsersAdmin");

    adminPasswordButton.addEventListener("click", async () => {
      const data = { password: adminPasswordInput.value }
      try {
       const response = await fetch("http://127.0.0.1:3000/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

this.adminViewCallback();
  } catch (error) {
        console.log(error);
      }
    });
  }
    async adminViewCallback(){
       const template = await loadView(viewMap.Admin);
    this.appendChild(document.importNode(template.content, true));
    
    getAllUsersAdmin.addEventListener("click", async () => {
      try {
        const response = await fetch("/admin");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();
        AdminOutput.textContent = JSON.stringify(users, null, 2);
      } catch (error) {
        console.error("Feil ved henting av admin-brukere:", error);
      }
    });
  }
}