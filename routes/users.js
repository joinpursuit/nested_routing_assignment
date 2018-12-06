let express = require("express");
let router = express.Router();
let data = require('../data.js')
let mod = require('../mod.js')
router.get('/', (req, res) => {
  res.json(data.users);
});
router.get("/:id", mod.getSpecificUser, (req, res) => {
  res.json(res.msg)
});


module.exports = router;