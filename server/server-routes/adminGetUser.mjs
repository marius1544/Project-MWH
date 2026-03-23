import express from "express";
import { getAllUsers, adminLogin } from "../controllers/adminGetUserController.mjs";

const getAdminUsers = express.Router();

getAdminUsers.get("/", getAllUsers);
getAdminUsers.post("/login", adminLogin);

export default getAdminUsers;