let express = require("express");
let router = express.Router();
let mod = require('../mod.js')
let data = require('../data.js')

router.get('/', (req, res) => {
  res.json(data.pictures);
});
router.get("/:id", mod.getSpecificPicture, (req, res) => {
  res.json(res.msg)
})

module.exports = router;