const Order = require("../models/OrderModel");
const Shop = require("../models/ShopModel");
const Product = require("../models/ProductModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");

// create new order by user --- all user
exports.newOrder = catchAsyncError(async(req, res, next) => {
    const { shippingInfo, orderItems, paymentInfo, delivery, totalPrice } =
    req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        delivery,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(201).json({
        success: true,
        order,
    });
});

// get single order details --- seller
exports.getOrderDetails = catchAsyncError(async(req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "firstName lastName phone email"
    );

    if (!order) {
        return next(new ErrorHandler("Order Not Found!", 404));
    }

    res.status(200).json({
        success: true,
        order,
    });
});

// get user orders --- all user
exports.myOrders = catchAsyncError(async(req, res, next) => {
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json({
        success: true,
        orders,
    });
});

// get admin orders --- admin
exports.getAllOrderAdmin = catchAsyncError(async(req, res, next) => {
    const orders = await Order.find().populate("user", "firstName lastName");

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    });

    const totalOrders = orders.length;

    res.status(200).json({
        success: true,
        orders,
        totalAmount,
        totalOrders,
    });
});

// seller total amount and orders
exports.getSellerOrderAdditional = catchAsyncError(async(req, res, next) => {
    const user = req.user.id;

    const totalOrders = await Order.countDocuments();

    let totalAmount = 0;

    const validShop = await Shop.find({ user });

    const orders = await Promise.all(
        validShop.map(async(element) =>
            Order.find({ "orderItems.shop": element._id })
        )
    );

    orders.forEach((order) => {
        order.forEach((eachOrder) => {
            totalAmount += eachOrder.totalPrice;
        });
    });

    res.status(200).json({
        success: true,
        totalOrders,
        totalAmount,
    });
});

// get seller order --- seller
exports.getSellerOrders = catchAsyncError(async(req, res, next) => {
    const user = req.user.id;

    const validShop = await Shop.find({ user });

    const exist = validShop.find((element) => {
        if (element._id.toString() === req.params.id) {
            return true;
        }
        return false;
    });

    if (!exist) {
        return next(new ErrorHandler("Invalid shop!", 404));
    }

    const orders = await Order.find({
        "orderItems.shop": req.params.id,
    }).populate("user", "firstName lastName");

    if (!orders) {
        return next(new ErrorHandler("No Order Found!", 404));
    }

    res.status(200).json({
        success: true,
        orders,
    });
});

// order update --- seller
exports.updateOrderStatus = catchAsyncError(async(req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHander("Order not found with this Id", 404));
    }

    if (order.orderstatus === "Delivered" && order.orderstatus === "Picked Up") {
        return next(new ErrorHandler("This Order is Already Done", 400));
    }

    order.orderItems.forEach(async(item) => {
        await updateStock(item.product, item.quantity);
    });

    order.orderstatus = req.body.status;

    await order.save();

    res.status(200).json({
        success: true,
        order,
    });
});

// delete order --- seller
exports.deleteOrder = catchAsyncError(async(req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("No Order Found!", 404));
    }

    await order.remove();

    res.status(200).json({
        success: true,
    });
});

// update stock after order
async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.Stock -= quantity;

    await product.save({ validateBeforeSave: false });
}