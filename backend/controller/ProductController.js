const Product = require('../models/ProductModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErros = require('../middleware/catachAsyncError');
const Apifeatures = require('../utils/apifeatures');

// create product -- seller
exports.createProduct = catchAsyncErros(async(req,res,next) => {

    let images = [];

    if(typeof req.body.images==="string"){
        images.push(req.body.images)
    } else {
        images = req.body.images
    }
    
    const imagesLink = [];

    for(let i=0;i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "products",
        })
        imagesLink.push({
            public_id :result.public_id,
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

    const apifeature = new Apifeatures(Product.find().populate("shopName","name city state" ), req.query)
    .search()
    .filter()

    const products = await apifeature.query
    
    products.map((product) => {
        if(category.includes(product.category)){
            return
        } else {
            category.push(product.category)
        }
    })


    res.status(200).json({
        success: true,
        products,
        productCount,
        category
    })
});

// get all products -- admin 
exports.getAdminProducts = catchAsyncErros(async(req, res, next) => {

    const products = await Product.find().populate("shopName","name");

    let totalProduct = 0;

    products.map((product) => {
        totalProduct += 1;
    });

    res.status(200).json({
        success: true,
        products,
        totalProduct
    })
});

// get all products --  seller
exports.getSellerProducts = catchAsyncErros(async(req, res, next) => {
    
    const user = req.user.id;

    const products = await Product.find({ user })

    res.status(200).json({
        success: true,
        products,
    })
});


// get products Details - admin/seller/customer
exports.getProductDetails = catchAsyncErros(async(req,res,next) => {
    let product = await Product.findById(req.params.id).populate("shopName","name city state" );

    if(!product){
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
    // deleteing images from cloudinary
    for(let i=0; i < product.images.length; i++) {
        await cloudinary.v2.uploader.destroy([product].images[i].public_id)
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
    const product = await Product.findById(req.query.id).populate();

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