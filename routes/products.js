const express = require("express");
const router = express.Router();

const Product = require("../models/product");

// GET page
router.get("/", (req, res) =>{
    Product.find({}, (error, products) => {
        if (error) console.log(error);
        res.json(products);
    });
});


module.exports = router;