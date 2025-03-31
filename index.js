require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

// Import Models
const User = require("./models/User");
const Product = require("./models/Product");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3008;
const mongoURI = process.env.MONGO_URI;

// ✅ Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB Successfully"))
  .catch((err) => console.log("❌ Error connecting to MongoDB", err));

// ✅ Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API 🚀");
});

// ✅ Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error registering user", error });
  }
});

// ✅ Add Product Route
app.post("/addproduct", async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newProduct = new Product({ name, price, description });
    await newProduct.save();

    res.status(201).json({ success: true, message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding product", error });
  }
});

// ✅ Get All Products Route
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching products", error });
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
