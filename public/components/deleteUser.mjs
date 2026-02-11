import { UserFunction } from "../utils-folder/utils.mjs";
import { viewMap } from "../controllers/views.mjs";
import loadView from "../controllers/viewLoader.mjs";
export class DeleteUserClass extends HTMLElement {
  constructor() {
    super();
  }
 async connectedCallback() {
  const template = await loadView(viewMap.DeleteUser);
    this.appendChild(document.importNode(template.content, true));

    const retractBtn = this.querySelector("#retract-delete");
    const userIdInp = this.querySelector("#userIdInp");
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