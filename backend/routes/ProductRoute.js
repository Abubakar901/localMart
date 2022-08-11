const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProducts,
    getProductDetails,
    createProductReview,
    getSellerProducts,
    getAdminProducts,
    getProductsByShop,
    deleteProductReviewByUser,
    getHomeProducts,
} = require("../controller/ProductController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();


// get home products
router.route("/home/products").get(getHomeProducts);

// get all products
router.route("/products").get(getAllProducts);

// creating new product by seller
router
    .route("/seller/products/new")
    .post(isAuthenticatedUser, authorizeRoles("seller"), createProduct);

// updating and delete product route by admin and seller
router
    .route("/unique/product/:id")
    .put(isAuthenticatedUser, authorizeRoles("seller", "admin"), updateProduct)
    .delete(
        isAuthenticatedUser,
        authorizeRoles("admin", "seller"),
        deleteProducts
    );

// get products for admin
router
    .route("/admin/products")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

// get products for seller
router
    .route("/seller/products")
    .get(isAuthenticatedUser, authorizeRoles("seller"), getSellerProducts);

// get products details
router.route("/products/:id").get(getProductDetails);

// create new review
router
    .route("/product/review/new")
    .put(isAuthenticatedUser, createProductReview);

// delete review by user
router
    .route("/product/delete/review")
    .delete(isAuthenticatedUser, deleteProductReviewByUser);

// get products by shop
router.route("/shop/products/:id").get(getProductsByShop);

module.exports = router;