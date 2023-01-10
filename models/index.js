const sequelize = require("../utils/database");
// database tables
const Product = require("./product");


const db = {product: Product};

sequelize
    .sync({force: false})
    .then(result => {
        // console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

module.exports = db;

