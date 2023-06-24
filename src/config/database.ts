
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDatabase = async() =>{
 mongoose.connect(process.env.MONGO_URI as string).then(() =>{
    console.log("Connected to database")
 })
}

export default connectDatabase