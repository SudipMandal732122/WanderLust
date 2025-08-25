class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message); // ✅ Properly initialize Error with message
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;
