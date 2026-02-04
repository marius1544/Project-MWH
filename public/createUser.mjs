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

  
  createUserCallback() {
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
       
        const userResponse = UserResponse().createUser("POST", usernameVar, hasConsented);
        const data = await userResponse;

        formOutPutFieldVar.innerHTML = `User ${data}`;
        console.log(data)
      } catch (err) {
        formOutPutFieldVar.innerHTML = `Feil ved opprettelse av bruker`, console.log(err);
      }
    });
  }

deleteUserCallback(){
}
}





function UserResponse (){
   async function createUser(method, username, consent){
    const response = await fetch(`/user/`, { 
      method: `${method}`,
    headers: {
            "Content-Type": "application/json",
          },
    body: JSON.stringify({
            username,
            consent,
          }),
       });

       try {
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Server error");
      }

     return data;
      
       }catch(err){
        this.formOutPutFieldVar.innerHTML = `Error ${err}`;
        throw err;
       }
  }


  return { createUser }
}