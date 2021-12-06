const express = require("express");
const router = express.Router();

const{getAllProducts,getProductsById} = require("../controller/productControllers");

router.get("/" ,getAllProducts);

router.get("/:id" ,getProductsById);

module.exports = router;