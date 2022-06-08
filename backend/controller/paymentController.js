const catchAsyncError = require("../middleware/catachAsyncError");
const stripe = require('stripe')('sk_test_51KyxW6SFpyHW5a0c8p4eihBh0bPpPa4G66iZbIbAFDy1pCVy5gJ7tZjcL4oMqSX49IkcrScTi9XPp2OmMOoZe86z007mN9xo2L');

exports.createPayment = catchAsyncError(async (req, res, next) => {
  const total = req.body.amount;
  console.log("Payment Rquest recived for this rupess : ", total);
  const session = await stripe.checkout.sessions.create({
    total: req.body.price,
    mode: 'payment',
    success_url: `${process.env.PORT}?success=true`,
    cancel_url: `${process.env.PORT}?canceled=true`,
  });

  res.redirect(303, session.url);

});

exports.sendStripeApiKey = catchAsyncError (async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});