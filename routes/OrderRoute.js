const express = require("express");
const {
    newOrder,
    getOrderDetails,
    myOrders,
    getAllOrderAdmin,
    updateOrderStatus,
    deleteOrder,
    getSellerOrders,
    getSellerOrderAdditional,
} = require("../controller/OrderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

// creating new order
router.route("/order/new").post(isAuthenticatedUser, newOrder);

// getting user orders
router.route("/order/me").get(isAuthenticatedUser, myOrders);

// get order details
router.route("/order/:id").get(isAuthenticatedUser, getOrderDetails);

// get admin orders
router
    .route("/admin/orders")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrderAdmin);

// get seller orders
router
    .route("/seller/order/:id")
    .get(isAuthenticatedUser, authorizeRoles("seller"), getSellerOrders);

// get seller additonal details
router
    .route("/seller/additional")
    .get(isAuthenticatedUser, authorizeRoles("seller"), getSellerOrderAdditional);

// update orders by seller
router
    .route("/seller/order/:id")
    .put(isAuthenticatedUser, authorizeRoles("seller"), updateOrderStatus);

// delete orders by all users
router.route("/order/:id").delete(isAuthenticatedUser, deleteOrder);

module.exports = router;