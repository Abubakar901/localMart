const express = require("express");
const {
    getHomeShop,
    createShops,
    getAllShops,
    getShopDetails,
    updateShop,
    deleteShop,
    createShopReview,
    getAdminShops,
    getShopSeller,
    deleteShopReviewByUser,
    getShopReviews,
} = require("../controller/ShopController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// get home shop
router.route("/home/shops").get(getHomeShop);

// create new shop --- seller
router
    .route("/seller/shops/new")
    .post(isAuthenticatedUser, authorizeRoles("seller"), createShops);

// get all shops
router.route("/shops").get(getAllShops);

// get shops details
router.route("/shop/:id").get(getShopDetails);

// get shop for admin
router
    .route("/admin/shops")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminShops);

// get shop for seller
router
    .route("/seller/shops")
    .get(isAuthenticatedUser, authorizeRoles("seller"), getShopSeller);

// updating and delete shop route
router
    .route("/unique/shop/:id")
    .put(isAuthenticatedUser, authorizeRoles("seller"), updateShop)
    .delete(isAuthenticatedUser, authorizeRoles("seller", "admin"), deleteShop);

// create shop review
router.route("/shop/review/new").put(isAuthenticatedUser, createShopReview);

// delete review by user
router
    .route("/shop/delete/reviews")
    .delete(isAuthenticatedUser, deleteShopReviewByUser);

module.exports = router;