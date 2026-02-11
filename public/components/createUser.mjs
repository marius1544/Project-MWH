import { UserFunction } from "../../utils-folder/utils.mjs";
import { viewMap } from "../../controllers/views.mjs";
import loadView from "../../controllers/viewLoader.mjs";
let formOutPutFieldVar = document.createElement("div");
export class CreateUserClass extends HTMLElement {
  constructor() {
    super();
    formOutPutFieldVar.innerHTML = `<p id="formOutPutField"></p>`;
    this.appendChild(formOutPutFieldVar);
  }

 async connectedCallback() {
  const template = await loadView(viewMap.CreateUser);
  this.appendChild(document.importNode(template.content, true));

    const TOSmenuCheckboxVar = this.querySelector("#TOSmenuCheckbox");
    const userNameInp = this.querySelector("#usernameInp");
    const submitTosBtn = this.querySelector("#submitTOS");

    submitTosBtn.disabled = true;
    TOSmenuCheckboxVar.addEventListener("change", () => {
      submitTosBtn.disabled = TOSmenuCheckboxVar.checked == false;
    });

    submitTosBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      const usernameVar = userNameInp.value;
      const hasConsented = true;

      if (!usernameVar) {
        formOutPutFieldVar.innerHTML = "Username is required.";
        console.log("Username is required.");
        return;
      }

      try {
        const userResponse = UserFunction({
          method: "POST",
          username: usernameVar,
          consent: hasConsented,
        });
        const data = await userResponse;

        formOutPutFieldVar.innerHTML = `User ${data}`;
        console.log(data);
      } catch (err) {
        ((formOutPutFieldVar.innerHTML = `Feil ved opprettelse av bruker`),
          console.log(err));
      }
    });
  }
}