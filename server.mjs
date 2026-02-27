import express from "express";
import fileRouter from "./server-routes/check-file-api.mjs";
import "dotenv/config";
import userRouter from "./server-routes/userAPI.mjs";
import { connectDB } from "./db/connection-sql.mjs";

const PORT = process.env.PORT || process.env.Local_PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));
await connectDB()
app.use("/files", fileRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Hello Worlds");
});

app.listen(PORT, () => {
  console.log("Server is running");
});