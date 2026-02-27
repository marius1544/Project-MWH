import express from "express";
import { createUser, getUser, deleteUser, putUser } from "../db/dbfile.mjs";
const userRouter = express.Router();
userRouter.use(express.json());
userRouter.post("/", async (req, res) => {
  const { username, consent } = req.body;

  try {
    const newUser = await createUser(username, consent);
    res.json(newUser);
  } catch (err) {
    res.status(400).json(JSON.stringify({ error: err.message }));
  }
});

userRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await putUser(id, req.body);
    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (err) {
    return res.status(404).json({ message: `PUTTER ${id} not found` });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteUser(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

userRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await getUser(id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: `User not found` });
  }
});

export default userRouter;
