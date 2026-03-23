import express from "express";
import { exportJSON, exportCSV } from "../controllers/settingsController.mjs";

export const settingsRouter = express.Router();
export const exportRouter = express.Router();

exportRouter.get('/json/:id', exportJSON)
exportRouter.get('/csv/:id', exportCSV)

export default exportRouter;
