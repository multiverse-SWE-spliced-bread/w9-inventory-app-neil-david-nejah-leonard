const express = require("express");
const router = express.Router();

//different routers - maybe just one?
router.use('/item', require('./item'));

module.exports = router;