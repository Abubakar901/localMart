const Cart = require('../models/CartModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErros = require('../middleware/catachAsyncError');

exports.createCartItem = catchAsyncErros( async (req, res, next) => {

    req.body.user = req.user.id;

    const {user, product} = (req.body)

    const findProducdId = await Cart.findOne({ user, product })

    if(findProducdId) {
        return next(new ErrorHandler("Prdduct Exist", 200));
    } else {
        const cart = await Cart.create({user, product})

        res.status(201).json({
            success: true,
            cart
        })
    }

    
});

exports.getCart = catchAsyncErros( async (req, res ,next) => {
    const user = req.user.id

    const cartCount = await Cart.countDocuments({ user });

    const cartItems = await Cart.find({ user }).populate("product", "name images price Stock shopName");

    res.status(200).json({
        success: true,
        cartItems,
        cartCount
    })
});


exports.DeleteCartItem = catchAsyncErros( async (req, res, next) => {
    req.body.user = req.user.id

    const cartItem = await Cart.findById(req.params.id);
    
    if(!cartItem) {
        return next(new ErrorHandler("Product Not Found in Cart", 404))
    }

    await cartItem.remove();

    res.status(200).json({
        success: true,
        message : "Item Deleted from Cart Delete Successfully"
    })

});