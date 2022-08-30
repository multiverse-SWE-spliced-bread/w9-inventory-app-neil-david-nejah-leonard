// This is a snippet for populating the database with seed data.

const {sauces, items} = require('./seedData.js');

const {database} = require('../server/db');
const {Item, Sauce} = require('../server/models');


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await database.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));
        await Promise.all(items.map(item => Sauce.create(item)));
        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
