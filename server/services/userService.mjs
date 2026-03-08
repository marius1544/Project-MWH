import { createUserSQL, getUserSQL, putUserSQL, deleteUserSQL } from "../../db/dbfile.mjs";

export async function createUserService({ username, consent, filename }) {

  if (consent !== true) {
    throw new Error("User must accept TOS to update account");
  }
  return await createUserSQL(username, consent, filename);
}

export async function getUserService(id) {
  return await getUserSQL(id);
}

export async function putUserService(id, body) {
  return await putUserSQL(id, body);
}

export async function deleteUserService(id) {
  return await deleteUserSQL(id);
}
