import express from "express";
import validateFileType from "./middleware.mjs";
 const fileRouter = express.Router();
 import { getL10n } from "../services/getL10n.mjs";

fileRouter.post("/:id", validateFileType, (req, res) => {
  const { id } = req.params;

  res.status(201).json({
    message: `Added file ${id}`,
    filename: "picture1.png",
    filestatus: "not uploaded"
  });
});


fileRouter.put("/:id", (req, res) => {
  const l10n = getL10n(req);

  const { id } = req.params;
  res.status(200).send(`${l10n.check-file-feedback.changedFile} ${id}`);
})

fileRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(`${l10n.check-file-feedback.success} ${id}`);
})

fileRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id: `Retrived file ${id}`,
    filename: "picture1.png",
    filestatus: "not uploaded"
  });
});

export default fileRouter;
