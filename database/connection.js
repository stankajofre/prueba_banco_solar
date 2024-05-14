import 'dotenv/config'
import pg from 'pg'
const { Pool } = pg

const connectionString = process.env.CONNECTION_STRING_URL
console.log(connectionString)

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true
})

try {
    await pool.query('SELECT $1::text as message', ['Hello world!'])
    console.log("DB conectada!")// hello world!
} catch (err) {
    console.log(err);
}