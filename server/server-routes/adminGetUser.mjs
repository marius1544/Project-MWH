import express from "express";
import { getAllUsers, adminLogin } from "../controllers/adminGetUserController.mjs";
import securityAudit from "./middleware/securityAudit.mjs";
import passwordValidation from "./middleware/passwordValidation.mjs";

const getAdminUsers = express.Router();

getAdminUsers.get("/", getAllUsers);
getAdminUsers.post("/login",securityAudit, passwordValidation, adminLogin);

export default getAdminUsers;