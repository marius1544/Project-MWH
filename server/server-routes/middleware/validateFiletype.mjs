let fileEndings = ["jpg", "jpeg", "pptx", "gif", "docx", "xlsx", "png", "exe"];

function validateFileType(req, res, next) {
  const fileType = req.body.filename;
  if (!fileType) {
    return res
      .status(400)
      .json({
        error: "Bad Request: Missing 'filename' property in JSON body.",
      });
  }
  const fileEnding = fileType.split(".").pop();
  const isValid = fileEndings.find((item) => item === fileEnding);

  if (isValid) {
    next();
  } else {
    return res.status(400).json({ error: "Invalid file type" });
  }
}

export default validateFileType;
