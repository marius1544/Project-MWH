import { generateID } from "../dataObjects/user.mjs";
import { client } from "./connection-sql.mjs";
export async function createUserSQL(username, consent, filename) {

  const id = generateID();

  const result = await client.query(
    `INSERT INTO projectmwhtest (id, username, consent, filename)
     VALUES ($1, $2, $3, $4)
     RETURNING *
     `,
     [id, username, consent, filename]
  );

  return result.rows[0];
}

export async function getUserSQL(id) {
  const result = await client.query(
    `SELECT * from projectmwhtest WHERE id=$1`,
    [id]
  );
  return result.rows[0];
}

export async function deleteUserSQL(id){
   const result = await client.query(
    `DELETE FROM projectmwhtest where id=$1
     RETURNING *
    `,
    [id]
  );
  return result.rows[0];
}

export async function putUserSQL(id, { username, consent }) {
  const result = await client.query(
    `UPDATE projectmwhtest
     SET username = $2,
         consent = $3
     WHERE id = $1
     RETURNING *`,
    [id, username, consent]
  );

  return result.rows[0];
}