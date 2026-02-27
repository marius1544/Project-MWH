import express from "express";
import { createUserService, getUserService, putUserService, deleteUserService } from "../modules/userService.mjs";
const userRouter = express.Router();
userRouter.use(express.json());
userRouter.post("/", async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(JSON.stringify({ error: err.message }));
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
    const user = await putUserService(req.params.id, req.body);
    return res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (err) {
    return res.status(404).json({ message: `PUTTER ${id} not found` });
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const result = await deleteUserService(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const result = await getUserService(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: `User not found` });
  }
});

export default userRouter;
