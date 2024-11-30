// packages import
import express from 'express'
import dotenv from 'dotenv'

// pages import
import connectDB from './src/config/db'
import seeder from './src/seeder'

dotenv.config()

const port = process.env.PORT

// connect to mongodb
connectDB()

const app = express()

app.use('/api/seed', seeder)

app.listen(port, () => {
    console.log(`Server is running at port ${port}/`)
})


