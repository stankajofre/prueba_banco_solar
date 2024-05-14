import 'dotenv/config'
import express from 'express'
import userRoutes from './routes/banco.route.js'
import bancoRoutes from './routes/banco.route.js'
import transferenciaRoutes from './routes/transferencia.route.js'


const app = express()
const __dirname = import.meta.dirname
const { Pool } = require('pg');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users', userRoutes)
app.use(bodyParser.json())
app.use('/', bancoRoutes)
app.use('/', transferenciaRoutes)

// Configuración de PostgreSQL
const pool = new Pool({
    user: 'tvannesa',
    host: 'localhost',
    database: 'b_solar_dos',
    password: 'root',
    port: 5432,
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})
