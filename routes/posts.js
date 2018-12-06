let express = require("express");
let router = express.Router();
let data = require('../data.js');
let mod = require('../mod.js');



router.get('/', (req, res) => {
  res.json(data.posts);
});
router.get("/:id", mod.getSpecificPost, (req, res) => {
  res.json(res.msg)
})

module.exports = router;