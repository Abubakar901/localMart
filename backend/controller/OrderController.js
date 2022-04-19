const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");
const catachAsyncError = require("../middleware/catachAsyncError");
const ErrorHandler = require("../utils/errorhandler");

exports.newOrder = catachAsyncError( async(req, res, next ) => {
    const { shippingInfo, orderItems, paymentInfo, Itemsprice, TaxPrice, shippingPrice, totalPrice } = req.body;

    const order = await Order.create({
        shippingInfo, orderItems, paymentInfo, Itemsprice, TaxPrice, shippingPrice, totalPrice, paidAt:Date.now(), user: req.user._id,
    })

    res.status(201).json({
        success: true,
        order
    })
})