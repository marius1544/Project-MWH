import { Client } from 'pg'

export const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
})

export async function connectDB() {
  
try {
  client.connect()
  console.log("Connected to PostgreSQL")  
} catch (error) {
  console.error("Failed to connect", error);
  throw error
}
}