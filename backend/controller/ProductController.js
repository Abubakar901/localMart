const Product = require('../models/ProductModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErros = require('../middleware/catachAsyncError');
const Apifeatures = require('../utils/apifeatures');

// create product -- seller
exports.createProduct = catchAsyncErros(async(req,res,next) => {
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
        products
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