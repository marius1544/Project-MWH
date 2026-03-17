import { createUserSQL, getUserSQL, putUserSQL, deleteUserSQL } from "../../db/dbfile.mjs";

export async function createUserService({ username, consent, filename }) {

  if (consent !== true) {
    throw new Error("User must accept TOS to update account");
  }
  return await createUserSQL(username, consent, filename);
}

export async function getUserService(id) {
  const user = await getUserSQL(id)
  if(!user){
    throw new Error("User not found")
  }
  return user;
}

export async function putUserService(id, body) {
  const user = await putUserSQL(id, body); 
  if(!user){
    throw new Error("User not found")
  }
  return user;
}

export async function deleteUserService(id) {
 const user = await deleteUserSQL(id);
    if (!user) {
    throw new Error("User not found");
  }

  return user;
}
