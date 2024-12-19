import express from 'express'
import {
    signin, singup, signout, getUserProfile, updateUserProfile
} from '../controllers/user.controller'
import { protect, admin } from '../middleware/auth.middleware'

const router = express.Router()

// router.route('/').post(singup).get(protect, admin)
router.post('/signup', singup)
router.post('/signin', signin)
router.post('/signout', signout)

router.route('/profile')
    .post(protect, getUserProfile)
    .put(protect, updateUserProfile)



export default router