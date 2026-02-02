import { CreateUserClass } from "./createUser.mjs";
import { SettingsClass } from "./settingsClass.mjs";
customElements.define("create-user-view", CreateUserClass);
customElements.define("user-settings-view", SettingsClass);
const CreateUser = new CreateUserClass();
const UserSettings = new SettingsClass();
const viewMap = {
    "createuser": CreateUser,
    "usersettings": UserSettings,
}

const pageContainer = document.getElementById("pageContainer");
pageContainer.appendChild(CreateUser);
pageContainer.appendChild(UserSettings);
loadData()


function loadData(){
    try {
        CreateUser.createUserCallback();
        UserSettings.settingsMenuCallback();
        UserSettings.retractDeleteCallback();
    }catch(err){
        console.log("Error", err);
    }
    }