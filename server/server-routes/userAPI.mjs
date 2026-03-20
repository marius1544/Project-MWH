import express from "express";
import { createUserService, getUserService, putUserService, deleteUserService } from "../services/userService.mjs";
import { getL10n } from "../services/getL10n.mjs";
import validateFileType from "./middleware/validateFiletype.mjs";
const userRouter = express.Router();
userRouter.use(express.json());
userRouter.post("/", validateFileType, async (req, res) => {
  const l10n = getL10n(req);
  try {
    const newUser = await createUserService(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
   return res.status(500).json({message: l10n.filelabel});
  }
});

userRouter.put("/:id", async (req, res) => {
      const l10n = getL10n(req);
  try {
    const user = await putUserService(req.params.id, req.body);
    return res.status(200).json({
      message: l10n.feedback.UserUpdateSuccess,
      user,
    });
  } catch (err) {
    return res.status(404).json({ message: l10n.feedback.CannotFindId });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const l10n = getL10n(req);
  try {
    const result = await deleteUserService(req.params.id);
    return res.status(200).json({message: l10n.feedback.SuccessfulDeletion, result});
  } catch (err) {
    console.error(err)
    return res.status(404).json({ message: l10n.feedback.ErrorDeletion });
  }
});

userRouter.get("/:id", async (req, res) => {
    const l10n = getL10n(req);
  try {
    const result = await getUserService(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: l10n.feedback.IncorrectId });
  }
});

export default userRouter;
