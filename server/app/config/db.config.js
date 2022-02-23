module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "rootpassword123",
    DB: "machinations",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    }
}