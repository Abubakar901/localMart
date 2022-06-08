const express = require("express");
const {
  createPayment,
  sendStripeApiKey
} = require("../controller/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment/create").post(isAuthenticatedUser, createPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;