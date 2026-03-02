import { UserRequest } from "../../utils-folder/utils.mjs";
import { viewMap } from "../../controllers/views.mjs";
import loadView from "../../controllers/viewLoader.mjs";
export class CreateUserClass extends HTMLElement {
  constructor() {
    super();
  }

 async connectedCallback() {
  const template = await loadView(viewMap.CreateUser);
  this.appendChild(document.importNode(template.content, true));

  const outputField = this.querySelector("#OutputField");
    const TOSmenuCheckbox = this.querySelector("#TOSmenuCheckbox");
    const userNameInput = this.querySelector("#usernameInp");
    const submitTosBtn = this.querySelector("#submitTOS");

    submitTosBtn.disabled = true;
    TOSmenuCheckbox.addEventListener("change", () => {
      submitTosBtn.disabled = TOSmenuCheckbox.checked == false;
    });

    submitTosBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      const username = userNameInput.value;
      const hasConsented = TOSmenuCheckbox.checked;
      if (!username) {
        outputField.innerHTML = "Username is required.";
        console.log("Username is required.");
        return;
      }

      try {
        const userResponse = UserRequest({
          method: "POST",
          username: username,
          consent: hasConsented,
        });
        const data = await userResponse;

        outputField.textContent = `User ${data.username} has been added with id: ${data.id}`;
        console.log(data);
      } catch (err) {
        ((outputField.textContent = `Feil ved opprettelse av bruker`),
          console.log(err));
      }
    });
  }
}