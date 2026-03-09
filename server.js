const express = require("express");
const cors = require("cors"); // ১. cors ইমপোর্ট করুন
require("dotenv").config();
const { connectDB } = require("./config/db");
const logger = require("./middleware/logger");
const productRoutes = require("./modules/product/product.route");
const authRoutes = require("./modules/auth/auth.route");

const app = express();
const PORT = process.env.PORT || 7000;

// ================= MIDDLEWARES =================
// ২. CORS কনফিগারেশন (এটি সবার উপরে রাখা ভালো)
app.use(cors({
  origin: "*", // আপাতত সব ডোমেইন অ্যালাউ করা হয়েছে, প্রোডাকশনে আপনার ডোমেইন নাম দিবেন
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use(logger);

// ================= ROUTES =================
app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce API");
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// ================= DB CONNECTION & SERVER START =================
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error("❌ Database connection failed:", err);
});