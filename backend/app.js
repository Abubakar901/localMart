const express = require('express');
const app = express();
const errormiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const productRoute = require('./routes/ProductRoute');
const userRoute = require('./routes/userRoute');

app.use('/api/v1', productRoute);
app.use('/api/v1', userRoute)

// middle ware for error
app.use(errormiddleware);

module.exports = app;