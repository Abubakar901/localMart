const Shop = require('../models/ShopModel');
const ErrorHandler = require('../utils/errorhandler');
const Apifeatures = require('../utils/apifeatures');
const catchAsyncError = require('../middleware/catachAsyncError');

// create shops - seller
exports.createShops = catchAsyncError( async( req, res, next) => {
    
    req.body.user = req.user.id;

    const shop = await Shop.create(req.body);

    res.status(201).json({
        success: true,
        shop
    }) 
});

// get all shops --- admin/seller/customer
exports.getAllShops = catchAsyncError( async(req, res, next) =>{

    const resultPerPage = 8;
    const shopCount = await Shop.countDocuments();

    const apifeature = new Apifeatures(Shop.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerPage)

    const shops = await apifeature.query;  

    res.status(200).json({
        success: true,
        shops,
        shopCount
    })
});

// get Single Shop --- admin/seller/customer
exports.getShopDetails = catchAsyncError( async( req, res, next) => {
    let shop = await Shop.findById(req.params.id);

    if(!shop){
       return next(new ErrorHandler("Shop Not Found", 404));
    }

    res.status(200).json({
        success: true,
        shop,

    })
});

// update Shop --- seller/admin 
exports.updateShop = catchAsyncError( async( req, res, next )=> {
    let shop = await Shop.findById(req.params.id);

    if(!shop){
       return next(new ErrorHandler("Shop Not Found", 404));
    }

    shop = await Shop.findByIdAndUpdate(req.params.id, req.body ,{new: true })

    res.status(200).json({
        success: true,
        shop
    })
});


// delete shop - seller/admin
exports.deleteShop = catchAsyncError( async( req, res, next) => {
    const shop = await Shop.findById(req.params.id);

    if(!shop) {
        return next(new ErrorHandler("Shop Not Found", 404))
    }

    await shop.remove();

    res.status(200).json({
        success: true,
        message : "Shop Delete Successfully"
    })
})

// create new review or update the review 
exports.createShopReview = catchAsyncError (async (req, res, next) => {

    const {rating, comment, shopId} = req.body

    const review = {
        user: req.user.id,
        name: req.body.name,
        rating: Number(rating),
        comment 
    }

    const shop = await Shop.findById(shopId);
    
    const isReviewed = await shop.reviews.find(rev => rev.user.toString() === req.user._id.toString())

    if(isReviewed) {
        shop.reviews.forEach((rev => {
            if(rev.user.toString() === req.user._id.toString()){
                (rev.rating = rating), (rev.comment = comment)
            }
        }))
    } else {
        shop.reviews.push(review);
        shop.numOfReviews = shop.reviews.length
    }

    let avg = 0;

    shop.ratings = shop.reviews.forEach((rev) => {
        avg += rev.rating
    })
    
    shop.ratings = avg /shop.reviews.length

    await shop.save({ validateBeforeSave : false });

    res.status(200).json({
        success: true,
    })
});

// get all shop reviews
exports.getShopReviews = catchAsyncError( async (req, res, next) => {
    const shop = await Shop.findById(req.query.id);

    if(!shop) {
        return next(new ErrorHandler("Shop Not Found", 404));
    }

    res.status(200).json({
        success: true,
        reviews : shop.reviews  
    })
});

// delete Shop Review 
exports.deleteShopReview = catchAsyncError( async(req, res, next) =>{
    const shop = await shop.findById(req.query.shopId);

    if(!shop) {
        return next( new ErrorHandler("Shop Not Found", 404))
    }
 
    const reviews = shop.reviews.filter(rev => rev._id.toString() !== req.query.id.toString());

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