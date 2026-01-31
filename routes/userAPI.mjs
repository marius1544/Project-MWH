import express from "express";
import user from "../dataObjects/user.mjs";
import { Users, generateID } from "../dataObjects/user.mjs";

const userRouter = express.Router();
userRouter.use(express.json());
userRouter.post("/", (req, res) => {
const consent = req.body.consent;

  if (consent !== true) {
    res.status(400).send("You need to agree to the Terms of Sercice!");
    return;
  }
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
    res.status(404).json(JSON.stringify(`User ${id} not found`));
  }
});

userRouter.get("/", (req, res) => {
   res.send(Users)
});

export default userRouter;