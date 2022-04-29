const express = require("express");
const { createShops , getAllShops, getShopDetails, updateShop, deleteShop, createShopReview, deleteShopReview, getShopReviews, getAdminShops, getShopSeller} = require('../controller/ShopController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route("/unique/shops/new").post(isAuthenticatedUser, authorizeRoles("seller"), createShops);

// get all shops
router.route("/shops").get(getAllShops);

// get shops details
router.route("/shop/:id").get(getShopDetails);


router
  .route("/admin/shops")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminShops);

// get seller shop 
router.route("/seller/shops").get(isAuthenticatedUser, authorizeRoles("seller"), getShopSeller);

// updating and delete shop route
router.route("/unique/shop/:id")
.put(isAuthenticatedUser, authorizeRoles("seller"), updateShop)
.delete(isAuthenticatedUser, authorizeRoles("seller"), deleteShop)

// create shop review
router.route("/shop/review").put(isAuthenticatedUser, createShopReview);

router.route("/shop/reviews").get(getShopReviews).delete(isAuthenticatedUser, deleteShopReview)

module.exports = router;