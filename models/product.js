const mongoose = require("mongoose");

// page 
const ProductSchema = mongoose.Schema({
    name:{
        type: String,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const Product = (module.exports = mongoose.model("Product", ProductSchema));