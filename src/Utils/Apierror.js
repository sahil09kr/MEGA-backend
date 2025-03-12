class ApiError extends error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors = [],
        statck = ""
    ){//now overwriting
        this.statusCode=statusCode
        super(message)
        this.message=message
        this.data=null
        this.success=false//handling error not response 
        this.errors=errors


        if(statck) {
            //properly comes in statck->Debugging
            this.stack=statck
        } else {
            Error.captureStackTrace(this,this.constructor)
            //passing instance 
        }
    }
}
    export {ApiError};
