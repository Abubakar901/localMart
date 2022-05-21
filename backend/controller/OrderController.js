const Order = require("../models/OrderModel");
const Product = require("../models/ProductModel");
const Shop = require("../models/ShopModel");
const catachAsyncError = require("../middleware/catachAsyncError");
const ErrorHandler = require("../utils/errorhandler");

exports.newOrder = catachAsyncError( async(req, res, next ) => {
    const { shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

    const order = await Order.create({
        shippingInfo, orderItems, paymentInfo, itemsPrice, taxPrice, shippingPrice, totalPrice, paidAt:Date.now(), user: req.user._id,
    })

    res.status(201).json({
        success: true,
        order
    })
})

exports.getOrderDetails = catachAsyncError( async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if(!order) {
        return next(new ErrorHandler("Order Not Found!", 404));
    }

    res.status(200).json({
        success: true,
        order
    })
});


exports.myOrders = catachAsyncError( async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json({
        success: true,
        orders
    })
});



exports.getAllOrderAdmin = catachAsyncError( async (req, res, next) => {
    const orders = await Order.find().populate("user", "firstName lastName");

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice
    })

    const totalOrders = orders.length;

    res.status(200).json({
        success: true,
        orders,
        totalAmount,
        totalOrders
    })
});


exports.getSellerOrders = catachAsyncError( async (req, res, next) => {
    
    const user = req.user.id;
    
    const shops = await Shop.find({ user });
    
    // let shopId = []; 
    shops.map( async (shop) => {
        const shopId = JSON.stringify(shop._id);
        const orders = await Order.findById({ shopId })
        console.log(orders)
    })
        // console.log(shopId)
        // const orders =  await Order.findById({ shopId })

    res.status(200).json({
        success: true,
        // orders
    })

});


exports.updateOrderStatus = catachAsyncError( async (req, res, next) => {
    const order = await Order.findById(req.params.id);


    if(order.orderStatus === 'Delivered'){
        return next (new ErrorHandler("You have already Delivered this Order", 400));
    }

    order.orderItems.forEach(async (order) => {
        await updateStock(order.product, order.quantity)
    })

    order.orderstatus = req.body.status;

    if(req.body.status === 'Delivered'){
        order.deliveredAt = Date.now()
    }

    await order.save()
    
    res.status(200).json({
        success: true
    })
});

exports.deleteOrder = catachAsyncError( async( req, res, next ) => {
    const order = await Order.findById(req.params.id);

    if(!order) {
        return next( new ErrorHandler("No Order Found!" , 404));
    }

    await order.remove();

    res.status(200).json({
        success: true
    })
 });

async function updateStock(id, quantity){
    const product = await Product.findById(id);

    product.Stock -= quantity;

    await product.save({ validateBeforeSave : false})
}