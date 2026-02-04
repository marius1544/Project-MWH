export function UserResponse (){
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