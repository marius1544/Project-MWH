import { UserFunction } from "./utils-folder/utils.mjs";
let formOutPutFieldVar = document.createElement("div");
export class CreateUserClass extends HTMLElement {
  constructor() {
    super();
    const createUser = document.createElement("div");

    createUser.innerHTML = `
        <form id="InputForm">
        <input
            id="usernameInp"
            type="text"
            placeholder="Input username here"
            /><br>
        <input id="TOSmenuCheckbox" type="checkbox" />
        <label for=TOSmenuCheckbox">Click to agree to <a href="./utils-folder/ToS.md">Terms of service</a>
        </label>
         <button id="submitTOS">Submit</button>     
            `;

    formOutPutFieldVar.innerHTML = `<p id="formOutPutField"></p>`;

    this.appendChild(createUser);
    this.appendChild(formOutPutFieldVar);
  }

  connectedCallback() {
    const TOSmenuCheckboxVar = document.getElementById("TOSmenuCheckbox");
    const userNameInp = document.getElementById("usernameInp");
    const submitTosBtn = document.getElementById("submitTOS");

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