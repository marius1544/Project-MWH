import { viewMap } from "../../controllers/views.mjs";
import loadView from "../../controllers/viewLoader.mjs";

const API_BASE = "http://localhost:8081/upload";

export class DropboxClass extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const template = await loadView(viewMap.Dropbox);
    this.appendChild(document.importNode(template.content, true));

    const uploadButtonVar = this.querySelector("#uploadBtn");
    const fileInput = this.querySelector("#fileinput");

   uploadButtonVar.addEventListener("click", async () => {
   try{
   const filename = fileInput.filename;
   return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify("Test")
   }
    
   }catch(err){
    console.error(err)
   } 
  })
  }
} 
