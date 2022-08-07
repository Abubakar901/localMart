const ErrorHandler = require("../utils/errorhandler");
const User = require("../models/UserModel");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail.js");
const cloudinary = require("cloudinary");
const crypto = require("crypto");

// register a User --- new user
exports.registerUser = catchAsyncError(async(req, res, next) => {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
    });

    const { firstName, lastName, phone, email, password } = req.body;

    const user = await User.create({
        firstName,
        lastName,
        phone,
        email,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
    });

    sendToken(user, 201, res);
});

// login user --- all user
exports.loginUser = catchAsyncError(async(req, res, next) => {
    const { email, password } = req.body;

    //checking if user has given password and email both

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email And Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (isPasswordMatched) {
        sendToken(user, 200, res);
    } else {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
});

// logout --- all user
exports.logout = catchAsyncError(async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logout Successfully",
    });
});

exports.forgotPassword = catchAsyncError(async(req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("User Not Found ", 404));
    }

    // get resetPassword token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

    const message = `Your password Reset Token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, please ignore it`;

    try {
        await sendEmail({
            email: user.email,
            subject: `localMart Password Recovery`,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email send to ${user.email} Successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }

    //     const message = `Your password Reset Token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, please ignore it`;

    // try {
    //     await sendEmail({
    //         email: user.email,
    //         subject: `localMart Password Recovery`,
    //         message,
    //     });

    //     res.status(200).json({
    //         success: true,
    //         message: `Email send to ${user.email} Successfully`,
    //     });
    // } catch (error) {
    //     user.resetPasswordToken = undefined;
    //     user.resetPasswordExpire = undefined;

    //     await user.save({ validateBeforeSaave: false });

    //     return next(new ErrorHandler(error.message, 500));
    // }
});

// reset password
exports.resetPassword = catchAsyncError(async(req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(
            new ErrorHandler("Reset Password Token Invalid or has been Expired", 400)
        );
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not Match", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
});

// get user details --- all user
exports.getUserDetails = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});

// update user password --- all user
exports.updatePassword = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const { oldPassword, newPassword, confirmPassword } = req.body;

    const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old Password is Incorrect", 401));
    }

    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler("New Password Doesn't Match", 401));
    }

    user.password = newPassword;

    await user.save();

    sendToken(user, 200, res);

    res.status(200).json({
        success: true,
        user,
    });
});

// update User Profile --- all user
exports.updateProfile = catchAsyncError(async(req, res, next) => {
    const newUserData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    };

    if (req.body.avatar !== "") {
        const user = await User.findById(req.user.id);

        const imageId = user.avatar.public_id;

        await cloudinary.v2.uploader.destroy(imageId);

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: "avatars",
            width: 150,
            crop: "scale",
        });

        newUserData.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        };
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });
});

// get all user details  --- admin
exports.getallUsers = catchAsyncError(async(req, res, next) => {
    const users = await User.find();

    const usersCount = users.length;

    res.status(200).json({
        success: true,
        users,
        usersCount,
    });
});

// get all user details  --- admin
exports.getSingleUser = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler("User Doesn't Exist", 404));
    }

    res.status(200).json({
        success: true,
        user,
    });
});

// update role - admin
exports.UpdateRole = catchAsyncError(async(req, res, next) => {
    const newUserData = {
        role: req.body.role,
    };

    const user = await User.findByIdAndUpdate(req.params.id, newUserData);

    if (!user) {
        return next(
            new ErrorHandler(`No User Exist with This Id : ${req.params.id}`, 404)
        );
    }

    res.status(200).json({
        success: true,
        user,
    });
});

// delete user - admin
exports.deleteUser = catchAsyncError(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler("No User Found", 404));
    }

    await user.remove();

    res.status(200).json({
        success: true,
        message: "User Deleted Successfully",
    });
});