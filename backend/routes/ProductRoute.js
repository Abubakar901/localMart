const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProducts, getProductDetails } = require('../controller/ProductController');

const router = express.Router();

// getting all products route
router.route("/products").get(getAllProducts);

// creating new product route
router.route("/products/new").post(createProduct);

// updating and delete product route
router.route("/products/:id").put(updateProduct).delete(deleteProducts).get(getProductDetails);

module.exports = router;
