const { application } = require("express");
const express = require("express")
const router = express.Router();
const {Item, Sauce} = require("../models")

application.use(express.json())

//Get all Items - routes from localhost:3000/item
router.get("/", async (req, res, next) => {
    
    try {
        const items = await Item.findAll();
        console.log(items)
        res.send(items);
    } catch (error){
        next(error);
    }
})

// Get Single Item  

//Routes via localhost:3000/item/ItemName
router.get("/:title", async (req, res, next) => {
    console.log(req.params.title)
    try {
        console.log("Lemon")
        const item = await Item.findOne(({ where: { title: req.params.title} }))
        res.send(item);
    } catch (error){
        next(error);
    }
})


module.exports = router


