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
      <div class="settingsClass" value="toggle-theme">
        ☀️ / 🌙 Dark / Light mode
      </div>
      <div id="retract-consent" class="settingsClass" value="retract-delete">
        ❌ Retract consent & delete account
      </div>
      <div class="input-div-sub-menu">
      <input id="userIdInp" type="text" placeholder="Input your ID here" />
      <button id="retract-delete">Retract</button>
    </div>   
    </div>       
            `;

    this.appendChild(Settings);
  }

  settingsMenuCallback() {
    const settingsIcon = document.getElementById("Settings");
    const subMenu = this.querySelector(".sub-menu");
    const retractConsent = document.getElementById("retract-consent");
    const inputDivSubMenu = this.querySelector(".input-div-sub-menu");

    settingsIcon.addEventListener("click", () => {
      subMenu.classList.toggle("open");
    });

    retractConsent.addEventListener("click", () => {
      inputDivSubMenu.classList.toggle("open");
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
}
