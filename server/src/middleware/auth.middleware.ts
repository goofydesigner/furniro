import AsyncHandler from 'express-async-handler'
import { Request, Response, NextFunction} from 'express'
import User from '../models/user.model'
import jwt from 'jsonwebtoken'

const protect = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
            
            req.user = await User.findById(decodedToken.id).select('-password')
            if (!req.user) {
                res.status(404);
                throw new Error('User not found');
            }
            
            next()
        } catch(err) {
            console.log('Error in auth.middleware: ', err)
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized user...')
    }
})

const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401);
        throw new Error('Not authorized as admin')
    }
}



export { protect, admin }