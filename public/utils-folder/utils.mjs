   import fetchRequest from "./fetchreq.mjs"
   export async function UserFunction({ method, userID = null, username, consent }){
    let url = "/user";
    
    if(method === "POST"){
      url = "/user"
    }else {
      url = `/user/${userID}`;
    }
    
    const response = await fetchRequest(url, { 
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
        console.log(`Error ${err}`);
        throw err;
       }
  }