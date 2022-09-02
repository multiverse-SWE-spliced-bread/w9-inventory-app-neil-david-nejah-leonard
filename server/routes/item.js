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


//create New item
router.post("/create", async (req,res, next) => {
    try{
        await Item.create(req.body)
        console.log(req.body + 'test log')
        res.send("Item created!")
    }catch (error) {
        next(error)
    }
    });

//update item - IS THIS RIGHT TO LINK IN WITH LEONARDS FORM? ("/:title")
router.put("/:title", async (req,res, next) => {
    console.log(req.params.title)
    try{
        await Item.update(req.body,{
           where: {
            title: req.params.title
           }
    });
        res.send("Item updated!")
    }catch (error) {
        next(error)
    }
    });

    router.delete("/:title", async (req, res, next) => {
    
        try{
            await Item.destroy({
                where: {
                    title: req.params.title
                }
            })
            res.json('Item deleted')
        }catch (error) {
            next(error)
        }
    })





module.exports = router