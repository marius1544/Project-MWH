   import fetchRequest from "./fetchreq.mjs"
   export async function UserRequest({ method, userID = null, username, consent, filename }){
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
    body: JSON.stringify({ username, consent, filename }),
       });

       try {
    const data = await response.json();
    return data;
      
       }catch(err){
        console.log(`Error ${err}`);
        throw err;
       }
  }

  export async function ConvertRequest(format) {
      let url = `/export/${format}`;


    const response = await fetchRequest(url, { 
      method: "GET"
       });

    try {
    if (format === "json") {
      return await response.json();
    } else {
      return await response.text();
    }
  } catch (err) {
    console.log(`Error ${err}`);
    throw err;
  }
}