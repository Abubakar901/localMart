const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProducts, getProductDetails, createProductReview, getProductReviews, deleteReview } = require('../controller/ProductController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// getting all products route
router.route("/products").get(getAllProducts);

// creating new product route
router.route("/unique/products/new").post(isAuthenticatedUser, authorizeRoles("seller"), createProduct);

// updating and delete product route
router.route("/unique/products/:id")
.put(isAuthenticatedUser, authorizeRoles("seller"), updateProduct)
.delete(isAuthenticatedUser, authorizeRoles("admin" , "seller"), deleteProducts)

// get products details
router.route("/products/:id").get(getProductDetails);

router.route("/product/review").put(isAuthenticatedUser, createProductReview);

router.route("/product/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);
    
module.exports = router;
