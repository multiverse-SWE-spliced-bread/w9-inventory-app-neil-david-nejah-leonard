const { Sequelize, DataTypes, Model } = require('sequelize');
const path = require('path');

const database = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
});

module.exports = {database}