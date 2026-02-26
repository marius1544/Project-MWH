import { client } from "./connection-sql.mjs"
async function createUser(id, name) {
  const result = await client.query(
    `INSERT INTO projectmwhtest (id, name)
     VALUES (9999993, 'Hansen')
     `,
    [id, name]
  );

  return result.rows[0];
}

export default createUser;