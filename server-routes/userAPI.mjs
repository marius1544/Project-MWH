import express from "express";
import user, { getUserBackend } from "../dataObjects/user.mjs";
import {
  Users,
  createUserBackend,
  deleteUserBackend,
  putUserBackend,
} from "../dataObjects/user.mjs";

const userRouter = express.Router();
userRouter.use(express.json());
userRouter.post("/", (req, res) => {
  try {
    const newUser = createUserBackend(req.body);
    res.json(JSON.stringify(newUser));
  } catch (err) {
    res.status(400).json(JSON.stringify({ error: err.message }));
  }
});

userRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  try {
    const user = putUserBackend(id, req.body);
    res.status(200).json({
      message: "User updated successfully",
      user
    });
  } catch (err) {
    return res.status(404).json({ message: `PUTTER ${id} not found` });
  }
});

userRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  try {
    const result = deleteUserBackend(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

userRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  try {
    const result = getUserBackend(id);
    res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: `User ${id} not found` });
  }
});

export default userRouter;
