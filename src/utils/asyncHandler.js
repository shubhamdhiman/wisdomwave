// Defining an async handler function that takes a request handler function as input
const asyncHandler = (requestHandler) => {
    // Returning an anonymous function that takes req, res, and next as parameters
    (req, res, next) => {
        // Wrapping the requestHandler in a Promise to handle asynchronous operations
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

// Defining an async handler function using async/await syntax
// const asyncHandler = (fn) => async (req, res, next) => {
// Wrapping the async function fn in an async function that takes req, res, and next as parameters
//     try {
//         // Invoking the async function fn with req, res, and next
//         await fn(req, res, next)
//     } catch (error) {
//         // Handling errors that occur during the execution of fn
//         res.status(err.code || 500).json({
//             // Sending a JSON response with error details
//             success: false,
//             message: err.message
//         })
//     }
// }
