const { getDB } = require("../config/db");
const productCollection = require("../models/productModel");

// GET all products
const getProducts = async (req, res) => {
  try {
    const db = getDB();
    const products = await db.collection(productCollection).find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST add product
const addProduct = async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection(productCollection).insertOne(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProducts, addProduct };
