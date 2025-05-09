import mongoose, {Document} from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    isAdmin: Boolean,
    createdAt: Date,
    matchPassword: (enteredPassword: string) => Promise<boolean>
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

userSchema.methods.matchPassword = async function(enteredPassword): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre("save", async function(next) {
    if(!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model<IUser>('User', userSchema)

export default User