const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();
const { createCartItem, getCart, DeleteCartItem } = require('../controller/CartController');

router.route("/cart/new").post(isAuthenticatedUser, createCartItem);

router.route("/carts").get(isAuthenticatedUser,  authorizeRoles("customer", "seller", "admin"), getCart );

router.route("/cart/delete/:id").delete(isAuthenticatedUser,  authorizeRoles("customer", "seller", "admin"), DeleteCartItem);




module.exports = router;