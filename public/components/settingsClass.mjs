import { viewMap } from "../controllers/views.mjs";
import loadView from "../controllers/viewLoader.mjs";
import { navigateTo } from "../app.mjs";
export class SettingsClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.UserSettings);
    this.appendChild(document.importNode(template.content, true));

    const settingsIcon = this.querySelector("#settings-gear");
    const subMenu = this.querySelector(".sub-menu");
    const retractConsent = this.querySelector("#retract-consent");
    const deleteUserViewDiv = this.querySelector("delete-user-view");
    const editUserViewDiv = this.querySelector("edit-user-view");
    const editUser = this.querySelector("#edit-user");
    const settingsIdInput = this.querySelector("#settingsIdInput");
    const select = this.querySelector("#options");
    const button = this.querySelector("#exportButton");

    const goToAdminPage = this.querySelector("#goToAdminPage");
    goToAdminPage.addEventListener("click", ()=>{
    navigateTo("admin-login", true);

    })
    button.addEventListener("click", () => {
      const format = select.value;
      const id = settingsIdInput.value.trim();

      if (id) {
        window.open(`/export/${format}/${id}`);
      } else {
        return;
      }
    });
    settingsIcon.addEventListener("click", () => {
      subMenu.classList.toggle("open");
    });

    retractConsent.addEventListener("click", () => {
      deleteUserViewDiv.classList.toggle("open");
    });

    editUser.addEventListener("click", () => {
      editUserViewDiv.classList.toggle("open");
    });
  }
}
