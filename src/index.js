import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

// Configuring dotenv to load environment variables from a custom path './env'
dotenv.config({
    path:'./env'
})

// Establishing connection to the database and starting the Express server
connectDB().then(()=>{
    // Starting the Express server to listen on the specified port or default port 8000
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is listenting on port ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log("Mongo Connection Error")
})
