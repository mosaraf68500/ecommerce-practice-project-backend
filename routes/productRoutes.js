const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../controllers/productController");

// GET all products
router.get("/", getProducts);

// POST add product
router.post("/", addProduct);

module.exports = router;