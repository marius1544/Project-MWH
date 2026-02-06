import { UserFunction } from "./utils-folder/utils.mjs";
export class SettingsClass extends HTMLElement {
  constructor() {
    super();
    const Settings = document.createElement("div");

    Settings.innerHTML = `
    <p>
  Read our privacy policy
  <a href="./utils-folder/Privacy-policy.md">here</a>
</p>

<br />

<div id="Settings">
  <img
    id="settings-gear"
    src="./utils-folder/settings-gear.png"
    alt="settings-gear"
  />
</div>

<div class="sub-menu">
  <button class="settingsClass">☀️ / 🌙 Dark / Light mode</button>

  <button id="retract-consent" class="settingsClass">
    ❌ Retract consent & delete account
  </button>

  <button id="edit-user" class="settingsClass">Edit user</button>

  <div class="editUserDiv">
    <input id="idInputField" placeholder="Enter id" />
    <input id="newUsernameInputField" placeholder="Enter new username" />
    <button id="submitUsernameBtn" type="button">Submit</button>
</div>

  <div class="input-div-sub-menu">
    <input id="userIdInp" type="text" placeholder="Input your ID here" />
    <button id="retract-delete">Retract</button>
  </div>
    `;

    this.appendChild(Settings);
  }

  settingsMenuCallback() {
    const settingsIcon = document.getElementById("Settings");
    const subMenu = this.querySelector(".sub-menu");
    const retractConsent = document.getElementById("retract-consent");
    const inputDivSubMenu = this.querySelector(".input-div-sub-menu");
    const editUser = document.getElementById("edit-user");
    const editUserDiv = this.querySelector(".editUserDiv");
    settingsIcon.addEventListener("click", () => {
      subMenu.classList.toggle("open");
    });

    retractConsent.addEventListener("click", () => {
      inputDivSubMenu.classList.toggle("open");
    });

    editUser.addEventListener("click", () => {
      editUserDiv.classList.toggle("open");
    });
  }

  retractDeleteCallback() {
    const retractBtn = document.getElementById("retract-delete");
    const userIdInp = document.getElementById("userIdInp");
    retractBtn.addEventListener("click", async () => {
      const userimpVar = userIdInp.value;

      try {
        const response = UserFunction({
          method: "DELETE",
          userID: userimpVar,
        });
        const data = await response;

        alert(data, userIdInp.value);
      } catch (err) {
        console.log("Feil ved sletting av bruker:", err);
      }
    });
  }

  editUserCallback() {
    const submitUsernameBtn = document.getElementById("submitUsernameBtn");
    const idInputFieldVar = document.getElementById("idInputField");
    const newUsernameInputFieldVar = document.getElementById(
      "newUsernameInputField",
    );

    submitUsernameBtn.addEventListener("click", async () => {
      try {
        const response = await UserFunction({
          method: "PUT",
          userID: idInputFieldVar.value,
          username: newUsernameInputFieldVar.value,
        });
        alert(
          `Successfully updated your username to ${newUsernameInputFieldVar.value}`,
        );
      } catch (err) {
        console.log("Feil ved oppdatering av brukernavn:", err);
      }
    });
  }
}
