const express = require("express");
const router = express.Router();

const Category = require("../models/category");

// GET page
router.get("/", (req, res) =>{
    Category.find({}, (error, categories) => {
        if (error) console.log(error);
        res.json(categories);
    });
});


module.exports = router;