module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "My_Most_Secure_Password$$$1234",
    DATABASE: "learn_seq",
    DIALECT: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}