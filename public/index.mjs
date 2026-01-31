const TOSmenuCheckboxVar = document.getElementById("TOSmenuCheckbox");
const submitTosBtn = document.getElementById("submitTOS");
const userNameInp = document.getElementById("usernameInp");
const formOutPutFieldVar = document.getElementById("formOutPutField");
const retractBtn = document.getElementById("retract-delete");
const userIdInp = document.getElementById("userIdInp");
  
submitTosBtn.disabled=true;

TOSmenuCheckboxVar.addEventListener("change", () => {
    submitTosBtn.disabled = TOSmenuCheckboxVar.checked == false;
  })
  

submitTosBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const usernameVar = userNameInp.value;

  let hasConsented = false;
  if (TOSmenuCheckboxVar.checked) {
    hasConsented = true;
  } else {
    hasConsented = false;
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

retractBtn.addEventListener("click", async () => {
    const userimpVar = userIdInp.value;

    try {
      const response = await fetch(`/user/${userimpVar}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userimpVar
      }),
    }); 
    const data = await response.json();
    console.log(data)
    } catch{
       console.log("Feil ved sletting av bruker:");
    }
})
