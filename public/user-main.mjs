import { CreateUserClass } from "./createUser.mjs";
import { SettingsClass } from "./settingsClass.mjs";
import { EditUserClass } from "./editUser.mjs"
import { DeleteUserClass } from "./deleteUser.mjs";
customElements.define("create-user-view", CreateUserClass);
customElements.define("user-settings-view", SettingsClass);
customElements.define("edit-user-view", EditUserClass);
customElements.define("delete-user-view", DeleteUserClass);
const CreateUser = new CreateUserClass();
const UserSettings = new SettingsClass();
const EditUser = new EditUserClass();
const DeleteUser = new DeleteUserClass();

const viewMap = {
    "createuser": CreateUser,
    "usersettings": UserSettings,
    "edituser": EditUser,
    "deleteuser": DeleteUser
}

const pageContainer = document.getElementById("pageContainer");
pageContainer.appendChild(CreateUser);
pageContainer.appendChild(UserSettings);