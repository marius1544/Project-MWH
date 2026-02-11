import { viewMap } from "../controllers/views.mjs";
import loadView from "../controllers/viewLoader.mjs";
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
