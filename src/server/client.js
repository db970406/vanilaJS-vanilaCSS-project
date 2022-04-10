import { Client } from "pg";

export const client = new Client({
    user: process.env.DB_USERNAME,
    host: 'localhost',
    port: 5432,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})