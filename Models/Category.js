const database = require("../Utility/database");
const Sequelize = require("sequelize");

const Category = database.define("Category",{
    name : Sequelize.STRING
});

module.exports = Category;