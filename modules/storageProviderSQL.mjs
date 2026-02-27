import { client } from "../db/connection-sql.mjs"

async function retrieveInfo(){
const result = await client.query(
    `
    SELECT * FROM projectmwhtest
    `);
     return result.rows[0];
};

export default retrieveInfo;