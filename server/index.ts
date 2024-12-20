// packages import
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// pages import
import connectDB from './src/config/db'
import seeder from './src/seeder'
import userRoutes from './src/routes/user.route'

dotenv.config()

const port = process.env.PORT

// connect to mongodb
connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/seed', seeder)
app.use('/api/users', userRoutes)

app.listen(port, () => {
    console.log(`Server is running at port ${port}/`)
})


