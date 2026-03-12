import user from "../dataObjects/user.mjs";
import { client } from "../db/connection-sql.mjs"

export async function retrieveInfo() {
    const result = await client.query(
        `
    SELECT * FROM projectmwhtest
    `);
    return result.rows[0];
};



export async function getUsers() {
    try {
        const users = await retrieveInfo();
        console.log(users);
        console.log("first type is " + typeof (users));
    } catch (error) {
        console.error("The error is", error)
    }
}

async function toJson() {
    const users = await retrieveInfo();
    const stringified = JSON.stringify(users)
    console.log(stringified);
    console.log("second string is " + typeof (stringified));
}

async function toCSV() {
    const users = await retrieveInfo();
    const csvRows = [];

    const headers = Object.keys(users);
    csvRows.push(headers.join(','));

    const values = Object.values(users).join(',');
    csvRows.push(values)

    return csvRows.join('\n')

}

async function main() {
    const csv = await toCSV();
    console.log(csv);
    console.log("last string is " + typeof (toCSV()));
}



getUsers();
toJson();
main();
