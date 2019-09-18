const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => res.json({ msg: "This is the products route" }));

const Product = require("../../models/Product");

router.get("/", (req, res) => {
  Product.find()
    .sort({ title: 1 })
    .then(products => res.json(products))
    .catch(err => res.status(404).json( {noproductsfound: 'No products found'} ));
});

router.get("/:product_id", (req, res) => {
  Product.find( {product_id: req.params.product_id })
    .sort({ title: 1 })
    .then(products => res.json(products))
    .catch(err => res.status(404).json( {noproductsfound: 'No product found with that id'} ));
});

module.exports = router;