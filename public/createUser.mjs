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
            <p id="formOutPutField"></p>        
            `;
    this.appendChild(createUser);
  }

  createUserCallback() {
    const TOSmenuCheckboxVar = document.getElementById("TOSmenuCheckbox");
    const userNameInp = document.getElementById("usernameInp");
    let formOutPutFieldVar = document.getElementById("formOutPutField");
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
        const response = await fetch("/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usernameVar,
            consent: hasConsented,
          }),
        });
        const data = await response.json();
        console.log(data);
        formOutPutFieldVar.innerHTML = `User ${data}`;
      } catch {
        console.log("Feil ved opprettelse av bruker:");
      }
    });
  }
}
