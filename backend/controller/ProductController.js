const Product = require('../models/ProductModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErros = require('../middleware/catachAsyncError');
const Apifeatures = require('../utils/apifeatures');

// create product -- seller
exports.createProduct = catchAsyncErros(async(req,res,next) => {

    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    }) 
}); 

// get all products -- admin, seller, customer
exports.getAllProducts = catchAsyncErros(async(req, res) => {

    const resultPerPage = 8;
    const productCount = await Product.countDocuments();

    const apifeature = new Apifeatures(Product.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerPage)

    const products = await apifeature.query;  

    res.status(200).json({
        success: true,
        products,
        productCount
    })
});

// get products Details - admin/seller/customer
exports.getProductDetails = catchAsyncErros(async(req,res,next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
       return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        success: true,
        product,
        productCount
    })
});

// update product -- seller
exports.updateProduct = catchAsyncErros(async(req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
       return next(new ErrorHandler("Product Not Found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body ,{new: true })

    res.status(200).json({
        success: true,
        product
    })
});

// delete products -- seller/admin
exports.deleteProducts = catchAsyncErros(async(req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Product Not Found", 404))
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message : "Product Delete Successfully"
    })
});

// create new review or update review 
exports.createProductReview = catchAsyncErros( async( req, res, next ) => {

    const {rating, comment, productId} = req.body
    const review = {
        user: req.user.id,
        name: req.body.name,
        rating: Number(rating),
        comment 
    }

    const product = await Product.findById(productId);
    
    const isReviewed = await product.reviews.find(rev => rev.user.toString() === req.user._id.toString())

    if(isReviewed) {
        product.reviews.forEach((rev => {
            if(rev.user.toString() === req.user._id.toString()){
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
    
    product.ratings = avg /product.reviews.length

    await product.save({ validateBeforeSave : false });

    res.status(200).json({
        success: true,
    })
}) 

// get all reviews - admin/seller/customer
exports.getProductReviews = catchAsyncErros( async( req, res, next) => {
    const product = await Product.findById(req.query.id);

    if(!product) {
        return next(new ErrorHandler("Product Not Found", 404));
    }

    res.status(200).json({
        success: true,
        reviews : product.reviews 
    })
})

// delete reviews admin
exports.deleteReview = catchAsyncErros( async( req, res, next) => {
    const product = await Product.findById(req.query.productId);

    if(!product) {
        return next( new ErrorHandler("Product Not Found", 404))
    }

    const reviews = product.reviews.filter(rev => rev._id.toString() !== req.query.id.toString());

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    })

    const ratings = avg/ reviews.length;

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