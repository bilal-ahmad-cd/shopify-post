const controller = require("../controllers/products");
const router = require("express").Router();



router.post("/", controller.addProduct);


module.exports = router
