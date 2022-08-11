const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const errormiddleware = require("./middleware/error");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// routes
const productRoute = require("./routes/ProductRoute");
const userRoute = require("./routes/UserRoute");
const shopRoute = require("./routes/ShopRoute");
const orderRoute = require("./routes/OrderRoute");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", shopRoute);
app.use("/api/v1", orderRoute);

// middle ware for error
app.use(errormiddleware);

module.exports = app;