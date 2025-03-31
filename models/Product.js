const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Number,
    discount: Number,
    offerprice: Number,
    reviews: Number
});

module.exports = mongoose.model("Product", ProductSchema);
