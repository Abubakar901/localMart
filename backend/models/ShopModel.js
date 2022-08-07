const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Shop name"],
    },
    contact: {
        type: String,
        required: [true, "Please Enter Shop Contact Number"],
    },
    delivery: {
        type: String,
        default: "not available",
    },
    address: {
        type: String,
        required: [true, "Please Enter Shop Address"],
    },
    city: {
        type: String,
        required: [true, "Please Enter Shop City"],
    },
    state: {
        type: String,
        required: [true, "Please Enter Shop State"],
    },
    country: {
        type: String,
        required: [true, "Please enter Shop Country"],
    },
    category: {
        type: String,
        required: [true, "Please enter Shop Category"],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [{
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    }, ],
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
    }, ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Shop", shopSchema);