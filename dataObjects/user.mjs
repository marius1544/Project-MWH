export const Users = {};

function user() {
  return {
    id: null,
    username: null,
    consent: false,
  };
}

export function generateID() {
  let id = null;
  do {
    id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
  } while (Users[id]);
  return id;
}

export default user;
