import express from 'express' // Importing the express framework to build the API
import cors from 'cors' // Importing cors middleware for enabling Cross-Origin Resource Sharing
import cookieParser from 'cookie-parser' // Importing cookie-parser middleware for parsing cookies

const app = express() // Creating an instance of the express application

app.use(cors({ // Using cors middleware with specified options
    origin: process.env.CORS_ORIGIN, // Allowing requests from specified origin defined in the environment variable
    credentials: true, // Allowing credentials to be included in CORS requests
}))

app.use(express.json({ limit:'16kb' })) // Parsing incoming JSON requests with a size limit of 16kb
app.use(express.urlencoded({ extended:true, limit:'16kb' })) // Parsing incoming URL-encoded requests with extended parsing enabled and a size limit of 16kb
app.use(express.static("public")) // Serving static files from the 'public' directory
app.use(cookieParser()) // Parsing cookies from incoming requests

export { app } // Exporting the express application instance
