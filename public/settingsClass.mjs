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

  <edit-user-view class="edit-user-view"></edit-user-view>
  
<delete-user-view class="delete-user-view"></delete-user-view> 
</div>
    `;

    this.appendChild(Settings);
  }

  connectedCallback() {
    const settingsIcon = document.getElementById("Settings");
    const subMenu = this.querySelector(".sub-menu");
    const retractConsent = document.getElementById("retract-consent");
 const deleteUserViewDiv = document.querySelector("delete-user-view")
 const editUserViewDiv = document.querySelector("edit-user-view")
    const editUser = document.getElementById("edit-user");
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