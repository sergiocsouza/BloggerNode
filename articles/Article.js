const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/category");

const Article = connection.define('Articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // uma categoria tem mts artigos;
Article.belongsTo(Category); // relacionamento um para um;




module.exports = Article;