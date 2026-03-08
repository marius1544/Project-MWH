import express from "express";
import validateFileType from "./middleware.mjs";
import { getL10n } from "../services/getL10n.mjs";
const dropboxRouter = express.Router();

dropboxRouter.post("/", (req, res) => {
  const { filename } = req.body;
  const l10n = getL10n(req);


  res.status(201).json(`${l10n.feedback.DropboxSuccess}` `${filename}`);
});

dropboxRouter.get("/:id", (req, res) => {
  const l10n = getL10n(req);

  const { filename, type } = req.query;

  if (!filename || !type) {
    return res.status(400).json({ error: l10n.feedback.DropboxMissingFile });
  }
});
export default dropboxRouter;
