const database = require("../Utility/database");
const Sequelize = require("sequelize");

const Article = database.define("Article",{
    title : Sequelize.STRING,
    image : Sequelize.STRING,
    description : Sequelize.STRING
})

module.exports = Article;
