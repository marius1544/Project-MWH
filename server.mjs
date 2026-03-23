import express from "express";
import "dotenv/config";
import userRouter from "./server/server-routes/userAPI.mjs";
import { connectDB } from "./db/connection-sql.mjs";
import { getL10n } from "./server/services/getL10n.mjs";
import { getUsers } from "./modules/storageProviderSQL.mjs";
import exportRouter from "./server/server-routes/settingsAPI.mjs";
import getAdminUsers from "./server/server-routes/adminGetUser.mjs";
const PORT = process.env.PORT || 3000; 
const app = express();


app.use(express.json());
app.use(express.static("public"));
await connectDB()
await getUsers();
app.use("/admin", getAdminUsers)
app.use("/export", exportRouter)
app.use("/user", userRouter);
app.get("/lang", (req, res) => {
    const l10n = getL10n(req)
    res.json(l10n);
});

app.listen(PORT, () => {
  console.log("Server is running");
});