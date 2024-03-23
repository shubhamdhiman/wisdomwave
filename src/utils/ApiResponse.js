class ApiResponse{ // Defining a class named ApiResponse
    constructor(statusCode, data, message = "Success"){ // Constructor function to initialize objects of the class
        this.statusCode = statusCode, // Assigning the statusCode parameter to the instance variable statusCode
        this.data = data, // Assigning the data parameter to the instance variable data
        this.message = message // Assigning the message parameter to the instance variable message
        this.success = statusCode < 400 // Determining the success status based on the statusCode, if it's less than 400, it's considered a success
    }
}
