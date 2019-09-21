const express = require("express");
const router = express.Router();

const Product = require("../../models/Product");

// @route  GET api/products
// @desc   GET All Products
// @access Private

router.get("/", (req, res) => {
  Product.find()
    .sort({ title: 1 })
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No products found' }));
});

router.get("/:product_id", (req, res) => {
  Product.find({ product_id: req.params.product_id })
    .sort({ title: 1 })
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No product found with that id' }));
});

module.exports = router;