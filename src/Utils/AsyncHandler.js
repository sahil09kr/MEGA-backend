

//requestHandler is a async function therefore it return promise
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
         .catch((err) => next(err))
    }
}
//if error is caught then it is passed to 
// Express's next(err), which sends it to the error-handling middleware.

// const asyncHandler = () => {}
// const asyncHandler = (func) =>{ return () => {}}
// const asyncHandler = (func) => async (req,res,next) => {inside this try & catch=> 
// iside try func(req,res,next)will be executed}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })

//     }
// }

export { asyncHandler }
