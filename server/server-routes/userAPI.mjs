import express from "express";
import {createUser, deleteUser, putUser, getUser} from "../controllers/userController.mjs"

import validateFileType from "./middleware/validateFiletype.mjs";
const userRouter = express.Router();
userRouter.use(express.json());
userRouter.post("/", validateFileType, createUser);
userRouter.put("/:id", putUser)
userRouter.delete("/:id", deleteUser)
userRouter.get("/:id", getUser)

export default userRouter;
