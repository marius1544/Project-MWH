let fileEndings = ['jpg', 'jpeg', 'ppx', 'gif', 'docx', 'xlxs', 'png', 'exe']
for (let i = 0; i < fileEndings.length; i++) {
    const file = fileEndings[i];
}



let aFileTest = 'mytest.exe'

export function validateFileType(fileType){
    const fileEnding = fileType.split('.').pop();
     const isValid = fileEndings.find(item => item === fileEnding);

   if(isValid){
    console.log(fileType + " is a valid file type");
   } else {
    console.log(fileType + " is not a valid file type");
   }
}

validateFileType(aFileTest)