import { toCSV, toJson } from "../../modules/storageProviderSQL.mjs";
export const exportJSON = async (req, res) => {
    try {
        const id = req.params.id;
        const jsonData = await toJson(id);
        return res.status(200).json(jsonData);
      } catch (error) {
        return res.status(500).json({ error: "Could not export JSON" });
      }
    }

export const exportCSV = async (req, res) => {
    try {
        const id = req.params.id;
        const csvData = await toCSV(id);
        res.header('Content-Type', 'text/csv');
    res.attachment('data.csv');
    return res.status(200).send(csvData);
      } catch (error) {
        return res.status(500).json({ error: "Could not export CSV" });
      }
}