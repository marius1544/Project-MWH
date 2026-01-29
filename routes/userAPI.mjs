import express from "express";
import user from "../dataObjects/user.mjs";
import { Users, generateID } from "../dataObjects/user.mjs";

const userRouter = express.Router();
userRouter.use(express.json());
userRouter.post("/", (req, res) => {
  let newUser = user();
  newUser.id = generateID();
  newUser.username = req.body.username;
  newUser.consent = "Consent:" + req.body.consent;

  Users[newUser.id] = newUser;
  res.json(JSON.stringify(newUser));
});

userRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (Users[id]) {
    delete Users[id];
    res.status(200).json(JSON.stringify(`User ${id} deleted.`));
  } else {
    res.status(404).json(JSON.stringify(`User not found are`));
  }
});

userRouter.get("/", (req, res) => {
   res.send(Users)
});

export default userRouter;