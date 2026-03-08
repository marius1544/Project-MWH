import express from "express";
import fileRouter from "./server/server-routes/check-file-api.mjs";
import "dotenv/config";
import userRouter from "./server/server-routes/userAPI.mjs";
import { connectDB } from "./db/connection-sql.mjs";
import { getL10n } from "./server/services/getL10n.mjs";
const PORT = process.env.Local_PORT ||8081;
const app = express();


app.use(express.json());
app.use(express.static("public"));
await connectDB()
app.use("/files", fileRouter);
app.use("/user", userRouter);
app.get("/lang", (req, res) => {
    const l10n = getL10n(req)
    res.json(l10n);
});

app.listen(PORT, () => {
  console.log("Server is running");
});