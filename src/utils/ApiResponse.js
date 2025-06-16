class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.StatusCode = this.StatusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}