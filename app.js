const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const formmidableMiddleware = require("express-formidable");
const config = require("./config/database");


/**Connection */

mongoose.connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connnected to MongoDB"));

/** init app */

const app = express();

/** fromidable minddleware */

app.use(formmidableMiddleware());

/** set public folder */

app.use(express.static(path.join(__dirname, "public")));

/** Router */

const pages = require("./routes/pages");
const categories = require("./routes/categories");
const products = require("./routes/products");
const orders = require("./routes/orders");

app.use("/pages", pages);;
app.use("/categories", categories);
app.use("/products", products);
app.use("/orders", orders);

/** Start server port */

const port = 3000;
app.listen(port, () => console.log("Server runing at " + port));