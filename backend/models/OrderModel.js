const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            require: true,
        },
        state: {
            type: String,
            required: true,
        },
        pinCode: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: Number,
            required: true,
        },
    },

    orderItems: [{
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        delivery: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
        },
        product: {
            type: mongoose.Schema.ObjectId,
            ref: "Product",
            required: true,
        },
        shop: {
            type: mongoose.Schema.ObjectId,
            ref: "Shop",
            required: true,
        },
        shopName: {
            type: String,
            required: true,
        },
        shopCity: {
            type: String,
            required: true,
        },
    }, ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    paymentInfo: {
        type: String,
        default: "Cash On Delivery",
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    orderstatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    deliveryAt: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Orders", orderSchema);