const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, rext) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // wrong mongodb id error
    if (err.name === "CastError") {
        const message = `Resource not Found. Invalid ${err.path} `;
        err = new ErrorHandler(message, 400);
    }

    // Duplicate Key Error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
    }

    // Json Web Token Error
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is Invalid. Try Again`;
        err = new ErrorHandler(message, 400);
    }

    // JWT Expire Error
    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired. Try Again`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};