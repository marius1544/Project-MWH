import express from "express";
import { generateID } from "../dataObjects/user.mjs";
import user from "../dataObjects/user.mjs";
import { generateUsername, Users} from "../dataObjects/user.mjs";
const userRouter = express.Router();
userRouter.use(express.json())

userRouter.post('/', (req, res) => {
  let newUser = user();
  newUser.id = generateID(); 
  newUser.username = "";
  
 if(!newUser.username){
    newUser.username = generateUsername("Mariu");
 }
  Users[newUser.id] = newUser;
  res.json(JSON.stringify(newUser));
})

userRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  if(Users[id]){
    delete Users[id];
    res.status(200).json(JSON.stringify(`User ${id} deleted.`));
  } else {
    res.status(404).json(JSON.stringify(`User not found are`))
  }
});

userRouter.get('/', (req, res) => {
  const ids = Object.keys(Users);
  res.json(JSON.stringify(`Current ids stored: ${ids} `))
})


export default userRouter;