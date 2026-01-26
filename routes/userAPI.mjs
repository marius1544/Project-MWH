import express from "express";
import { generateID } from "../dataObjects/user.mjs"
import user from "../dataObjects/user.mjs"
import settingsRouter from "./settingsAPI.mjs";
const userRouter = express.Router();
userRouter.use(express.json())

userRouter.post('/', (req, res) => {
  let newUser = user();
  newUser.id = generateID(); 

  res.json(JSON.stringify(newUser));
})

export default userRouter;