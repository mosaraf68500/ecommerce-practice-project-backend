const express = require("express");
require("dotenv").config();
const { connectDB } = require("./config/db");
const logger = require("./middleware/logger");
const productRoutes = require("./modules/product/product.route");
const authRoutes = require("./modules/auth/auth.route");

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce API");
});

// Database connect
connectDB();

// important for vercel
module.exports = app;