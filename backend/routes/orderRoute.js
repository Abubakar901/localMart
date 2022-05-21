const express = require("express");
const { newOrder, getOrderDetails, myOrders, getAllOrderAdmin, updateOrderStatus, deleteOrder, getSellerOrders } = require("../controller/OrderController");
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/me").get(isAuthenticatedUser, myOrders);

router.route("/order/:id").get(isAuthenticatedUser, getOrderDetails);

router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrderAdmin);

router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrderStatus)

router.route("/order/:id").delete(isAuthenticatedUser, deleteOrder);

router.route("/seller/orders").get(isAuthenticatedUser, authorizeRoles("seller"), getSellerOrders);


module.exports = router;
