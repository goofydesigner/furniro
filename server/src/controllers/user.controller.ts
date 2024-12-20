import express, { Request, Response } from 'express'
import AsyncHandler from 'express-async-handler'

// pages import
import User from '../models/user.model'
import generateWebToken from '../../utils/generateToken'

const router = express.Router()

// api for login user
// post api
const signin = AsyncHandler(
    async (req: Request, res: Response) => {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if(user && (await user.matchPassword(password))) {
            res.json({
                message: 'Login Successful',
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateWebToken(user._id),
                createdAt: user.createdAt
            })
        } else {
            res.status(401)
            .json({
                message: 'Invalid email or password'
            })
            throw new Error('Invalid email or password')
        }
    }
)

// api for register user
// post api
const singup = AsyncHandler(
    async (req: Request, res: Request) => {
        const { name, email, password, isAdmin } = req.body
        const existingUser = await User.findOne({ email })

        if(existingUser) {
            res.status(400)
            throw new Error('User already exists')
        } else {
            const userData : {
                name: string,
                email: string,
                password: string,
                isAdmin?: boolean
            } = {
                name,
                email,
                password,
            }

            if(isAdmin !== undefined) {
                userData.isAdmin = isAdmin
            }

            const user = await User.create(userData)

            if(user) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    createdAt: user.createdAt
                })
            } else {
                res.status(400)
                throw new Error('Invalid user data')
            }
        }

    }
)

// api for signout
// post api
const signout = AsyncHandler(
    async (req: Request, res: Response) => {
        res.clearCookie('jwt')
        res.status(200).json({ message: 'logged out successfully'})
    }
)

// api for profile user
// get api
const getUserProfile = AsyncHandler(
    async (req: Request, res: Response) => {
        const user = await User.findById(req.user._id)

        if(user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt
            })
        } else {
            res.status(404)
            throw new Error("User not found")
        }
    }
)

// api for profile user update
// put api
const updateUserProfile = AsyncHandler(
    async (req: Request, res: Request) => {
        const user = await User.findById(req.user._id)

        if(user) {
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email

            if(req.body.password) {
                user.password = req.body.password
            }

            const updatedUser = await user.save()
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateWebToken(updatedUser._id),
                createdAt: user.createdAt
            })

        } else {
            res.status(404)
            throw new Error("User not found")
        }
    }
)

export { signin, singup, signout, getUserProfile, updateUserProfile } 