import { UserFunction } from "../../utils-folder/utils.mjs";
import { viewMap } from "../../controllers/views.mjs";
import loadView from "../../controllers/viewLoader.mjs";
export class EditUserClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.EditUser);
    this.appendChild(document.importNode(template.content, true));

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
