const Sequelize = require("sequelize");

const database = new Sequelize('samettnclll', 'samettncll', 'samet58+', {
    host: 'db4free.net',
    dialect: 'mysql'
});

module.exports = database;