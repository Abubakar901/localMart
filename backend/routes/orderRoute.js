const express = require("express");
const { newOrder, getOrderDetails, myOrders, getAllOrderAdmin, updateOrderStatus, deleteOrder } = require("../controller/OrderController");
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/me").get(isAuthenticatedUser, myOrders);

router.route("/order/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getOrderDetails);

router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrderAdmin);

router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrderStatus).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);




module.exports = router;
