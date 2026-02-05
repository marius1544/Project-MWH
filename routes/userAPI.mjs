import express from "express";
import user from "../dataObjects/user.mjs";
import { Users, generateID } from "../dataObjects/user.mjs";

const userRouter = express.Router();
userRouter.use(express.json());
userRouter.post("/", (req, res) => {
const consent = req.body.consent === true || req.body.consent === "true";
    if (!consent) {
        res.status(400).send("You need to agree to the Terms of Service!");
        return;
    }
  let newUser = user();
  newUser.id = generateID();
  newUser.username = req.body.username;
  newUser.consent = "Consent:" + req.body.consent;

  Users[newUser.id] = newUser;
  res.json(JSON.stringify(newUser));
});

userRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  
   if (req.body.username !== undefined){
    Users[id].username = req.body.username;
   }

   res.status(200).json({
    message: "User updated successfully",
    user: Users[id],
});
})

userRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  if (Users[id]) {
    delete Users[id];
    res.status(200).json(JSON.stringify(`User ${id} deleted.`));
  } else {
    res.status(404).json(JSON.stringify(`User ${id} not found`));
  }
});

userRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  if (Users[id]){
     res.send(Users[id]) 
  } else {
    return res.status(404).json({ message: `User ${id} not found` });
  }
  
});

export default userRouter;