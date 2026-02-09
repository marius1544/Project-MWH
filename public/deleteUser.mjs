import { UserFunction } from "./utils-folder/utils.mjs";
export class DeleteUserClass extends HTMLElement {
  constructor() {
    super();

    const inputDiv = document.createElement("div");
    inputDiv.innerHTML = `
  <div class="input-div-sub-menu">
    <input id="userIdInp" type="text" placeholder="Input your ID here" />
    <button id="retract-delete">Retract</button>
  </div>
      `;

    this.appendChild(inputDiv);
  }
  connectedCallback() {
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