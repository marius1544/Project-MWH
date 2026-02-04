   export async function UserFunction({ method, userID = null, username, consent }){
    let url = userID;
    if(userID){
        url = `/user/${userID}`
    }else {
        url = `/user/`
    }
    const response = await fetch(url, { 
      method,
    headers: {
            "Content-Type": "application/json",
          },
    body: JSON.stringify({ username, consent }),
       });

       try {
    const data = await response.json();
    return data;
      
       }catch(err){
        this.formOutPutFieldVar.innerHTML = `Error ${err}`;
        throw err;
       }
  }