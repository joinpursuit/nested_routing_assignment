let express = require("express");
let data = require("../data.js");
let router = express.Router();

router.get("/", (req, res) => {
  // const arr = [];
  // data.users.forEach(el => {
  //   arr.push(el.name);
  // })
  // res.json(arr);
  res.json(data.users)
});

router.get("/:id", (req, res) => {
  let selectId = req.params.id
  let results =data.users[selectId]
res.json(results)
});

module.exports = router;
