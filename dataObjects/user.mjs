let storageProvider = null;
export const Users = {};

function user() {
  return {
    id: null,
    username: null,
    consent: false,
  };
}
function save(u) {
  storageProvider.save(u);
}

export function createUserBackend({username, consent}){
  validateConsent(consent)

  const newUser = user();
  newUser.id = generateID();
  newUser.username = username;
  newUser.consent = true;

Users[newUser.id] = newUser;
  return newUser;
}
export function validateConsent(consent) {
  const approved = consent === true || consent === "true";
    if (!approved) {
    throw new Error("You need to agree to the Terms of Service!");
    }
}

export function getUserBackend(id){
  const users = Users[id];
  return users;
}
function catchError(message){
 const err = new Error(message);
  err.status = 404;
  throw err;
}
export function putUserBackend(id, {username}){
  const user = Users[id]
  if(!user){
    throw catchError(`User ${id} not found`)
  }
  if (username !== undefined) {
    user.username = username
  }

  return user;
}
export function deleteUserBackend(id){
  getUser(id)
  delete Users[id]
  return JSON.stringify(`User ${id} deleted.`);
}

export function generateID() {
  let id = null;
  do {
    id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
  } while (Users[id]);
  return id;
}

export default user;
