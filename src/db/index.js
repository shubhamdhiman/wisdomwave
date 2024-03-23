import mongoose from "mongoose";
import DB_NAME from '../constants.js'
console.log("inside mongo file")
console.log(process.env.MONGODB_URI)
console.log(DB_NAME)
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST :${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error: ", error)
        process.exit(1)
    }
}


export default connectDB