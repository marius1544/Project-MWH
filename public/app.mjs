import { CreateUserClass } from "./components/createUser.mjs";
import { SettingsClass } from "./components/settingsClass.mjs";
import { EditUserClass } from "./components/editUser.mjs"
import { DeleteUserClass } from "./components/deleteUser.mjs";
import { DropboxClass } from "./components/dropboxClass.mjs";

customElements.define("create-user-view", CreateUserClass);
customElements.define("user-settings-view", SettingsClass);
customElements.define("edit-user-view", EditUserClass);
customElements.define("delete-user-view", DeleteUserClass);
customElements.define("dropbox-view", DropboxClass);

const CreateUser = new CreateUserClass();
const UserSettings = new SettingsClass();
const DropboxView = new DropboxClass();

const pageContainer = document.getElementById("pageContainer");
pageContainer.appendChild(CreateUser);
pageContainer.appendChild(UserSettings);
pageContainer.appendChild(DropboxView);