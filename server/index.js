import express from 'express'
import 'dotenv/config'

import connectDB from './config/db.js'
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.listen(port, () => {
    console.log(`Server is running at port ${port}/`)
})


