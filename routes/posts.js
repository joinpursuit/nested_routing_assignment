let express = require("express");
let router = express.Router();
let data = require("../data")


router.get("/", (req, res) => {
  res.json(data.posts)
  // res.json({
  //   message: "all products OMEGALUL"
  // });
});

router.get("/:id", (req, res) => {
  // let theId = data.users
  res.json(data.posts[req.params.id -1 ])
});

router.get("/user/:id", (req, res) => {
  // let theId = data.users
  res.json(data.posts[req.params.id -1])
});


module.exports = router;
