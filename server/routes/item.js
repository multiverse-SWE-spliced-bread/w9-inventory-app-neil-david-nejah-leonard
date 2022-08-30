const express = require("express")
const router = express.Router();
const {Item, Sauce} = require("../models")

//Get all Items
router.get("/", async (req, res, next) => {
    try {
        const items = await Item.findAll();
        res.send(items);
    } catch (error){
        next(error);
    }
})

// Get Single Item
router.get("/:title", async (req, res, next) => {
    try {
        const item = await Item.findByPk(req.params.title, {
            include: [{model: Item}],
        });
        res.send(item);
    } catch (error){
        next(error);
    }
})


module.exports = router


