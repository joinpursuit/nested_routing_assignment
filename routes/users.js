let express = require("express");
let router = express.Router();
let data = require("../data");
let mod = require("../module");
router.get("/", (req, res) => {
  res.json(data.users);

});

router.get("/:id", mod.getDataUsers, (req, res) => {
  // res.json(data.users[req.params.id - 1])
  res.json(res.sender);

});




module.exports = router;
