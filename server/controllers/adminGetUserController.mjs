import { getAllUsersService } from "../services/userService.mjs";
import { getL10n } from "../services/getL10n.mjs";
export const getAllUsers = async (req, res) => {
const l10n = getL10n(req);
  try {
    const result = await getAllUsersService();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: l10n.feedback.IncorrectId });
  }
};

export const adminLogin = async (req, res) => {
  res.status(200).send("Success")
}