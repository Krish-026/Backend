class ApiResponse{
    constructor(
        statusCode,
        data,
        message= "Success",
    ) {
        // learn status code
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode >= 200 && statusCode < 300;
    }
}

export { ApiResponse };