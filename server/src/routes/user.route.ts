import express, { Request, Response } from 'express'
import AsyncHandler from 'express-async-handler'

// pages import
import User from '../models/user.model'

const router = express.Router()

// api for login user
// post api
router.post('/signin', AsyncHandler(
    async (req: Request, res: Response) => {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if(user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt
            })
        } else {
            res.status(401)
            throw new Error('Invalid email or password')
        }
    }
))

// api for register user
// post api
router.post('/signup', AsyncHandler(
    async (req: Request, res: Request) => {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({ email })

        if(existingUser) {
            res.status(400)
            throw new Error('User already exists')
        } else {
            const user = await User.create({
                name,
                email,
                password
            })

            if(user) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt
                })
            } else {
                res.status(400)
                throw new Error('Invalid user data')
            }
        }

    }
))

export default router