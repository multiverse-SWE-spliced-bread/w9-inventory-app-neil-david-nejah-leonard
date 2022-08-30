const express = require("express")
const router = express.Router();
const {Item, Sauce} = require("../models")

//Get all Items
router.get("/", async (req, res, next) => {
    
    try {
        const items = await Item.findAll();
        console.log("Apple")
        res.send(items);
    } catch (error){
        console.log("Orange")
        next(error);
    }
})

// Get Single Item  
// #TODO Figure out why this isn't playing nice
router.get("/:title", async (req, res, next) => {
    
    try {
        console.log("Lemon")
        const item = await Item.findOne(req.params.title, {
            include: [{model: Item}],
        });
        res.send(item);
    } catch (error){
        console.log("Pineapple")
        next(error);
    }
})


module.exports = router


