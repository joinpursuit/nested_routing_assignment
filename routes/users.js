let express = require("express");
let router = express.Router();
let data = require("../data");
let mod = require("../module");
router.get("/", (req, res) => {
  res.json(data.users);
  // res.json({
  //   message: "all products OMEGALUL"
  // });
});

router.get("/:id", (req, res, getDataUsers) => {
  // res.json(data.users[req.params.id - 1])

  res.json(res.sender);
});

module.exports = router;
