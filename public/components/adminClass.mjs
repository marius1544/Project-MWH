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
    adminPasswordButton.addEventListener("click", async () => {
      const data = { password: adminPasswordInput.value }

      try {
       const response = await fetch(process.env.API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
      } catch (error) {
        console.log(error);
      }
    });

    const getAllUsersAdmin = this.querySelector("#getAllUsersAdmin");
    getAllUsersAdmin.addEventListener("click", async () => {
      console.log("test");
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
    });
  }
}
