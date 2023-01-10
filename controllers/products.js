const db = require("../models");

// create main
const Product = db.product;

const addProduct = async (req, res) => {
    let info = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock ?? 0
    }
    const product = await Product.create(info);
    res.status(200).send(product);
};


module.exports = {
    addProduct,
}

