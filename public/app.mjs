import { CreateUserClass } from "./components/createUser.mjs";
import { SettingsClass } from "./components/settingsClass.mjs";
import { EditUserClass } from "./components/editUser.mjs"
import { DeleteUserClass } from "./components/deleteUser.mjs";
import registerServiceWorker from "./service-worker.mjs"
import {loadLanguage} from "./public-localization/i18n-frontend-loader.mjs"
import { AdminClass } from "./components/adminClass.mjs";
customElements.define("create-user-view", CreateUserClass);
customElements.define("user-settings-view", SettingsClass);
customElements.define("edit-user-view", EditUserClass);
customElements.define("delete-user-view", DeleteUserClass);
customElements.define("admin-view", AdminClass);
const CreateUser = new CreateUserClass();
const UserSettings = new SettingsClass();
const AdminClasses = new AdminClass()
const pageContainer = document.getElementById("pageContainer");
const mainView = document.createElement("div");
mainView.appendChild(CreateUser);
mainView.appendChild(UserSettings);
registerServiceWorker()

const viewMapper = {
  "create": mainView,
  "admin-login": AdminClasses,
  "admin": AdminClasses
}
navigateTo("create")


export function navigateTo(view, push) {
    if (push) {
        history.pushState(view, "");
    }
    pageContainer.innerHTML = "";
    pageContainer.appendChild(viewMapper[view]);
}

window.addEventListener("load", async () => {
  await loadLanguage();
});