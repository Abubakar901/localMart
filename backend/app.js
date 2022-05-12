const express = require('express');
const app = express();
const errormiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser");
const cors = require("cors")
const fileUpload = require("express-fileupload");
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const productRoute = require('./routes/ProductRoute');
const userRoute = require('./routes/userRoute');
const shopRoute = require('./routes/shopRoute');
const orderRoute = require('./routes/orderRoute');

app.use('/api/v1', productRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', shopRoute);
app.use('/api/v1', orderRoute);


// middle ware for error
app.use(errormiddleware);

module.exports = app;