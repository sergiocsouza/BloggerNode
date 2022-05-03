const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'sergio157',{
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection