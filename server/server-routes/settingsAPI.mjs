import express from "express";
export const settingsRouter = express.Router();
export const exportRouter = express.Router();
import { retrieveInfo, toJson, toCSV } from "../../modules/storageProviderSQL.mjs";
exportRouter.get('/json/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const jsonData = await toJson(id);
    return res.status(200).json(jsonData);
  } catch (error) {
    return res.status(500).json({ error: "Could not export JSON" });
  }
});
  

exportRouter.get('/csv/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const csvData = await toCSV(id);
    res.header('Content-Type', 'text/csv');
res.attachment('data.csv');
return res.status(200).send(csvData);
  } catch (error) {
    return res.status(500).json({ error: "Could not export CSV" });
  }
})

settingsRouter.get('/', (req, res) => {
})



export default exportRouter;
