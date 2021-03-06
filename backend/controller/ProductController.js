const Product = require('../models/ProductModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErros = require('../middleware/catachAsyncError');
const Apifeatures = require('../utils/apifeatures');
const cloudinary = require('cloudinary');

// create product -- seller
exports.createProduct = catchAsyncErros(async(req, res, next) => {

    let images = [];

    if (typeof req.body.images === "string") {
        images.push(req.body.images)
    } else {
        images = req.body.images
    }

    const imagesLink = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "products",
        })
        imagesLink.push({
            public_id: result.public_id,
            url: result.secure_url
        })
    }

    req.body.images = imagesLink;
    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
});

// get all products --- customer
exports.getAllProducts = catchAsyncErros(async(req, res) => {

    const productCount = await Product.countDocuments();
    const category = [];
    const city = [];

    const apifeature = new Apifeatures(Product.find().populate("shopName", "name city state"), req.query)
        .search()
        .filter()

    const products = await apifeature.query

    products.map((product) => {
        if (category.includes(product.category)) {
            return
        } else {
            category.push(product.category)
        }
    })

    products.map((product) => {
        if (city.includes(product.shopName.city)) {
            return
        } else {
            city.push(product.shopName.city)
        }
    })



    res.status(200).json({
        success: true,
        products,
        productCount,
        category,
        city
    })
});

// get all products -- admin 
exports.getAdminProducts = catchAsyncErros(async(req, res, next) => {

    const products = await Product.find().populate("shopName", "name city");

    const totalProduct = products.length;

    res.status(200).json({
        success: true,
        products,
        totalProduct
    })
});

// get all products --  seller
exports.getSellerProducts = catchAsyncErros(async(req, res, next) => {

    const user = req.user.id;

    const products = await Product.find({ user });

    const totalProduct = products.length;

    res.status(200).json({
        success: true,
        products,
        totalProduct
    })
});


// get products Details - admin/seller/customer
exports.getProductDetails = catchAsyncErros(async(req, res, next) => {
    let product = await Product.findById(req.params.id).populate("shopName", "name city state");

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        success: true,
        product,
    })
});

// update product -- seller
exports.updateProduct = catchAsyncErros(async(req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
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
        for (let i = 0; i < product.images.length; i++) {
            await cloudinary.v2.uploader.destroy(product.images[i].public_id);
        }

        const imagesLinks = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "products",
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url,
            });
        }

        req.body.images = imagesLinks;
    }


    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
        success: true,
        product
    })
});

// delete products -- seller/admin
exports.deleteProducts = catchAsyncErros(async(req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404))
    }
    // deleteing images from cloudinary
    for (let i = 0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy(product.images[i].public_id)
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Delete Successfully"
    })
});

// create new review or update review 
exports.createProductReview = catchAsyncErros(async(req, res, next) => {

    const { rating, comment, productId } = req.body
    const review = {
        user: req.user.id,
        name: req.user.firstName + " " + req.user.lastName,
        rating: Number(rating),
        comment
    }

    const product = await Product.findById(productId);

    const isReviewed = await product.reviews.find(rev => rev.user.toString() === req.user._id.toString())

    if (isReviewed) {
        product.reviews.forEach((rev => {
            if (rev.user.toString() === req.user._id.toString()) {
                (rev.rating = rating), (rev.comment = comment)
            }
        }))
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length
    }

    let avg = 0;

    product.ratings = product.reviews.forEach((rev) => {
        avg += rev.rating
    })

    product.ratings = avg / product.reviews.length

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    })
})

// get all reviews - admin/seller/customer
exports.getProductReviews = catchAsyncErros(async(req, res, next) => {
    const product = await Product.findById(req.query.id).populate();

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews
    })
})

// delete reviews admin
exports.deleteReview = catchAsyncErros(async(req, res, next) => {
    const product = await Product.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404))
    }

    const reviews = product.reviews.filter(rev => rev._id.toString() !== req.query.id.toString());

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    })

    const ratings = avg / reviews.length;

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})


// delete Product Review --- by user
exports.deleteProductReviewByUser = catchAsyncErros(async(req, res, next) => {

    const product = await Product.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHandler("Product Not Found", 404))
    }

    const reviews = product.reviews.filter(rev => rev.user.toString() !== req.user.id.toString());

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    })

    const ratings = avg / reviews.length;

    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(req.query.productId, {
        reviews,
        ratings,
        numOfReviews
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true
    })
})


exports.getProductsByShop = catchAsyncErros(async(req, res, next) => {
    const id = req.params.id;

    let products = await Product.find({ shopName: id }).populate("shopName", "name");

    res.status(200).json({
        success: true,
        products,
    })

});