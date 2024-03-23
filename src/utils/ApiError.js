class ApiError extends Error{ // Defining a class named ApiError which extends the built-in Error class
    constructor(statusCode, message="Something Went Wrong", error=[], stack="" ){ // Constructor function to initialize objects of the class
        super(message) // Calling the constructor of the Error class with the provided message
        this.statusCode = statusCode // Assigning the statusCode parameter to the instance variable statusCode
        this.data = null // Initializing the data property to null
        this.message = message // Assigning the message parameter to the instance variable message
        this.success = false // Setting the success property to false by default
        this.errors = error // Assigning the error parameter to the instance variable errors
        if(stack){ // Checking if stack is provided
            this.stack = stack // Assigning the provided stack to the instance variable stack if available
        } else {
            Error.captureStackTrace(this, this.constructor) // Capturing the stack trace if stack is not provided
        }
    }
}
