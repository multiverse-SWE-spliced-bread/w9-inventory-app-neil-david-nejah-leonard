const {Sequelize} = require('sequelize')
const {database} = require('../db')

const Item = database.define("item", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
        
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
    }
})

const Sauce = database.define("sauce", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    image: {
        type: Sequelize.STRING,
    }
});


module.exports = {
    db: database,
    Item
};