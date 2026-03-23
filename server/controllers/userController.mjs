import { createUserService, getUserService, putUserService, deleteUserService } from "../services/userService.mjs";
import { getL10n } from "../services/getL10n.mjs";

export const createUser = async (req, res) => {
  const l10n = getL10n(req);
  try {
    const newUser = await createUserService(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: l10n.filelabel });
  }
};

export const putUser = async (req, res) => {
  const l10n = getL10n(req);
  try {
    const { username } = req.body
    const user = await putUserService(req.params.id, username, true);
    return res.status(200).json({
      message: l10n.feedback.UserUpdateSuccess,
      user,
    });
  } catch (err) {
    return res.status(404).json({ message: l10n.feedback.CannotFindId });
  }
};

export const deleteUser = async (req, res) => {
  const l10n = getL10n(req);
  try {
    const result = await deleteUserService(req.params.id);
    return res
      .status(200)
      .json({ message: l10n.feedback.SuccessfulDeletion, result });
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: l10n.feedback.ErrorDeletion });
  }
};

export const getUser = async (req, res) => {
  const l10n = getL10n(req);
  try {
    const result = await getUserService(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: l10n.feedback.IncorrectId });
  }
};
