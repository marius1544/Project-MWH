import { UserFunction } from "./utils-folder/utils.mjs";

export class EditUserClass extends HTMLElement {
  constructor() {
    super();

    const editDiv = document.createElement("div");
    editDiv.innerHTML = `
    <div class="editUserDiv">
    <input id="idInputField" placeholder="Enter id" />
    <input id="newUsernameInputField" placeholder="Enter new username" />
    <button id="submitUsernameBtn" type="button">Submit</button>
</div>
`;

    this.appendChild(editDiv);
  }

  connectedCallback() {
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

        if (response) {
          alert(
            `Successfully updated your username to ${newUsernameInputFieldVar.value}`,
          );
        } else {
          alert(`Can't find id: ${userID}`);
        }
      } catch (err) {
        console.log("Feil ved oppdatering av brukernavn:", err);
      }
    });
  }
}
