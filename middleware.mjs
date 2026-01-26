let fileEndings = ['jpg', 'jpeg', 'ppx', 'gif', 'docx', 'xlxs', 'png', 'exe']

function validateFileType(req, res, next){
    const fileType = req.body.filename

    if(!fileType){
        console.log("Feil: Mangler filnavn i body.");
        return res.status(400).send("Bad Request: Missing 'filename' property in JSON body.");
    }
    const fileEnding = fileType.split('.').pop();
     const isValid = fileEndings.find(item => item === fileEnding);

   if(isValid){
    console.log(fileType + " is a valid file type");
    next();
   } else {
    console.log(fileType + " is not a valid file type");
    res.status(400).send("Invalid file type");
   }
}

export default validateFileType;