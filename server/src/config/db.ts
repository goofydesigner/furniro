import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        return connection
    } catch(error) {
        console.error(`Mongo DB connection error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB