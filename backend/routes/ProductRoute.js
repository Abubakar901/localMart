const express = require('express');
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProducts,
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview,
    getSellerProducts,
    getAdminProducts,
    getProductsByShop,
    deleteProductReviewByUser
} = require('../controller/ProductController');
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');

const router = express.Router();

// getting all products route
router.route("/products").get(getAllProducts);

// creating new product route
router.route("/seller/products/new").post(isAuthenticatedUser, authorizeRoles("seller"), createProduct);

// updating and delete product route
router.route("/unique/product/:id").put(isAuthenticatedUser, authorizeRoles("seller", "admin"), updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin", "seller"), deleteProducts)


// get products admin
router.route("/admin/products").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

// get products admin
router.route("/seller/products").get(isAuthenticatedUser, authorizeRoles("seller"), getSellerProducts);

// get products details
router.route("/products/:id").get(getProductDetails);

router.route("/product/review/new").put(isAuthenticatedUser, createProductReview);

router.route("/product/reviews").get(getProductReviews).delete(isAuthenticatedUser, deleteReview);

router.route("/product/delete/review").delete(isAuthenticatedUser, deleteProductReviewByUser);

router.route("/products/shops").get(getProductsByShop);

module.exports = router;
