import { createUser, getUser, putUser, deleteUser } from "../db/dbfile.mjs";

export async function createUserService({ username, consent }) {

  if (consent !== true) {
    throw new Error("User must accept TOS to update account");
  }
  return await createUser(username, consent);
}

export async function getUserService(id) {
  return await getUser(id);
}

export async function putUserService(id, body) {
  return await putUser(id, body);
}

export async function deleteUserService(id) {
  return await deleteUser(id);
}
