const Sequelize = require('sequelize');
const DB_CONFIG = require('../config/db-config')

const sequelize = new Sequelize(
    DB_CONFIG.DATABASE,
    DB_CONFIG.USER,
    DB_CONFIG.PASSWORD,
    {
        dialect: DB_CONFIG.DIALECT,
        host: DB_CONFIG.HOST,
        pool: {
            max: DB_CONFIG.pool.max,
            min: DB_CONFIG.pool.min,
            acquire: DB_CONFIG.pool.acquire,
            idle: DB_CONFIG.pool.idle
        }
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("DATABASE CONNECTED SUCCESSFULLY!");
    })
    .catch(err => {
        console.log("ERROR: " + err);
    });

module.exports = sequelize;