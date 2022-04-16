const ErrorHandler = require('../utils/errorhandler');

module.exports = (err, req, res, rext) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // wrong mongodb id error
    if(err.name === "CastError"){
        const message = `Resource not Found. Invalid ${err.path} `;
        err = new error
    }



    res.status(err.statusCode).json({
        success : false,
        error: err.message,
    });
}; 