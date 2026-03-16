import { client } from "../db/connection-sql.mjs"

export async function retrieveInfo(id) {
    const result = await client.query(
        `
    SELECT * FROM projectmwhtest where id = $1
    `,
[id]
)
    
    return result.rows[0];
};



export async function getUsers(id) {
    try {
        const users = await retrieveInfo(id);
        console.log(users);
    } catch (error) {
    }
}

export async function toJson(id) {
    const users = await retrieveInfo(id);
    return users;
}

export async function toCSV(id) {
    const users = await retrieveInfo(id);
    const csvRows = [];

    const headers = Object.keys(users);
    csvRows.push(headers.join(","));

    const values = Object.values(users).join(",")
    csvRows.push(values);

    return csvRows.join('\n');
}