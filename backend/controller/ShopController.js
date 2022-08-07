const Shop = require("../models/ShopModel");
const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/errorhandler");
const Apifeatures = require("../utils/apifeatures");
const catchAsyncError = require("../middleware/catchAsyncError");
const cloudinary = require("cloudinary");

// create shops - seller
exports.createShops = catchAsyncError(async(req, res, next) => {
    let images = [];

    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    const imagesLink = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "shops",
        });
        imagesLink.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

    req.body.images = imagesLink;
    req.body.user = req.user.id;

    const shop = await Shop.create(req.body);

    res.status(201).json({
        success: true,
        shop,
    });
});

// home shop
exports.getHomeShop = catchAsyncError(async(req, res, next) => {
    const resultPerPage = 10;

    const apifeature = new Apifeatures(Shop.find(), req.query)
        .pagination(resultPerPage)

    const shops = await apifeature.query;

    res.status(200).json({
        success: true,
        shops
    })
});

// get all shops --- all user
exports.getAllShops = catchAsyncError(async(req, res, next) => {
    const shopCount = await Shop.countDocuments();
    let shopCategory = [];

    const apifeature = new Apifeatures(Shop.find(), req.query).search().filter();

    const shops = await apifeature.query;

    shops.map((shop) => {
        if (shopCategory.includes(shop.category)) {
            return;
        } else {
            shopCategory.push(shop.category.toLowerCase().trim());
        }
    });

    res.status(200).json({
        success: true,
        shops,
        shopCount,
        shopCategory,
    });
});

// Get All Product --- admin
exports.getAdminShops = catchAsyncError(async(req, res, next) => {
    const shops = await Shop.find();

    const totalShops = shops.length;

    res.status(200).json({
        success: true,
        shops,
        totalShops,
    });
});

// get shop details seller --- seller
exports.getShopSeller = catchAsyncError(async(req, res, next) => {
    const user = req.user.id;

    const shops = await Shop.find({ user });

    const totalShops = shops.length;

    res.status(200).json({
        success: true,
        shops,
        totalShops,
    });
});

// get Single Shop --- all user
exports.getShopDetails = catchAsyncError(async(req, res, next) => {
    let shop = await Shop.findById(req.params.id);

    if (!shop) {
        return next(new ErrorHandler("Shop Not Found", 404));
    }

    res.status(200).json({
        success: true,
        shop,
    });
});

// update Shop --- seller
exports.updateShop = catchAsyncError(async(req, res, next) => {
    let shop = await Shop.findById(req.params.id);

    if (!shop) {
        return next(new ErrorHandler("Shop not found", 404));
    }

    // Images Start Here
    let images = [];

    if (typeof req.body.images === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    if (images !== undefined) {
        // Deleting Images From Cloudinary
        for (let i = 0; i < shop.images.length; i++) {
            await cloudinary.v2.uploader.destroy(shop.images[i].public_id);
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "shops",
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        req.body.images = imagesLinks;
    }

    shop = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({
        success: true,
        shop,
    });
});

// delete shop - seller/admin
exports.deleteShop = catchAsyncError(async(req, res, next) => {
    const shop = await Shop.findById(req.params.id);

    if (!shop) {
        return next(new ErrorHandler("Shop Not Found", 404));
    }

    // deleteing images from cloudinary
    for (let i = 0; i < shop.images.length; i++) {
        await cloudinary.v2.uploader.destroy(shop.images[i].public_id);
    }

    const products = await Product.find({ shopName: req.params.id });
    await shop.remove();

    products.forEach(async(product) => {
        // deleteing images from cloudinary
        for (let i = 0; i < product.images.length; i++) {
            await cloudinary.v2.uploader.destroy(product.images[i].public_id);
        }
        await product.remove();
    });

    res.status(200).json({
        success: true,
        message: "Shop Delete Successfully",
    });
});

// create new review or update the review --- all user
exports.createShopReview = catchAsyncError(async(req, res, next) => {
    const { rating, comment, shopId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.firstName + " " + req.user.lastName,
        rating: Number(rating),
        comment,
    };

    const shop = await Shop.findById(shopId);

    const isReviewed = await shop.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
        shop.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString()) {
                (rev.rating = rating), (rev.comment = comment);
            }
        });
    } else {
        shop.reviews.push(review);
        shop.numOfReviews = shop.reviews.length;
    }

    let avg = 0;

    shop.ratings = shop.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    shop.ratings = avg / shop.reviews.length;

    await shop.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
});

// delete Shop Review --- all user
exports.deleteShopReviewByUser = catchAsyncError(async(req, res, next) => {
    const shop = await Shop.findById(req.query.shopId);

    if (!shop) {
        return next(new ErrorHandler("Shop Not Found", 404));
    }

    const reviews = shop.reviews.filter(
        (rev) => rev.user.toString() !== req.user.id.toString()
    );

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    });

    const ratings = avg / reviews.length;

    const numOfReviews = reviews.length;

    await Shop.findByIdAndUpdate(
        req.query.shopId, {
            reviews,
            ratings,
            numOfReviews,
        }, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    });
});