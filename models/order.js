const mongoose = require("mongoose");

// page 
const OrderSchema = mongoose.Schema({
    name:{
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    cart: {
        type: String,
    },
    total: {
        type: Number,
    },
});

const Order = (module.exports = mongoose.model("Order", OrderSchema));