import mongoose from "mongoose";
import DB_NAME from '../constants.js'
console.log("inside mongo file")
console.log(process.env.MONGODB_URI)
console.log(DB_NAME)
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // const connectionInstance = await mongoose.connect(`mongodb+srv://shubhamdhiman00sd:SHUBHAMdhiman753m@cluster0.utdi8md.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log(`\n MongoDB Connected !! DB HOST :${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error: ", error)
        process.exit(1)
    }
}


export default connectDB