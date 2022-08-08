const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please Enter Your First Name"],
        maxlength: [15, "Name cannot exceed 30 Characters"],
        minlength: [2, "Name should have more than 4 Characters"],
    },
    lastName: {
        type: String,
        required: [true, "Please Enter Your Last Name"],
        maxlength: [15, "Name cannot exceed 30 Characters"],
        minlength: [2, "Name should have more than 4 Characters"],
    },
    phone: {
        type: Number,
        required: [true, "Please Enter Your Last Name"],
        maxlength: [10, "Number cannot exceed 10 Characters"],
        minlength: [10, "Number should have 10 Characters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter Valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Passowrd"],
        minlength: [8, "Password should be greater than 8 Characters"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role: {
        type: String,
        default: "customer",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJWTToken = function() {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// generating password reset token
userSchema.methods.getResetPasswordToken = function() {
    // generating token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // hashing and adding password to reset token
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model("User", userSchema);