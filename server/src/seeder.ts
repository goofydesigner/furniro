import express, { Request, Response } from 'express'
import AsyncHandler from 'express-async-handler'

// pages import
import User from './models/user.model'
import users from './data/user.data'

const router = express.Router()

router.get('/test', (req, res) => {
    res.send("this is live")
})

router.post('/user', AsyncHandler(
    async (req: Request, res: Response) => {
        await User.deleteMany({})
    
        const UserSeeder = await User.insertMany(users)
        res.send({UserSeeder})
    }
))

export default router