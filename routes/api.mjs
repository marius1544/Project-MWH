import express from "express";
import { validateFileType } from "../middleware.mjs";
export const fileRouter = express.Router();
fileRouter.post("/:id", validateFileType, (req, res) => {
  const { id } = req.params;

  res.status(201).json({
    message: `Added file ${id}`,
    filename: "picture1.png",
    filestatus: "not uploaded"
  });
});


fileRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Changed the file or the status on file ${id}`);
})

fileRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Successfully deleted file ${id}`);
})

fileRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id: `Retrived file ${id}`,
    filename: "picture1.png",
    filestatus: "not uploaded"
  });
});
