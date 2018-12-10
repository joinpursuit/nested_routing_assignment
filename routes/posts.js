let express = require("express");
let router = express.Router();
let data = require("../data");
let mod = require("../module");

router.get("/", (req, res) => {
  res.json(data.posts);
  // res.json({
  //   message: "all products OMEGALUL"
  // });
});

router.get("/:id", mod.getDataPosts, (req, res) => {
  // res.json(data.posts[req.params.id -1 ])
  res.json(res.sender);
});

// router.get("/user/:id", (req, res) => {
//   // let theId = data.users
//   res.json(data.posts[req.params.id -1])
// });

// router.get("/users/:id", mod.getUserId, (req, res) => {
//   res.json(res.sender);
// });

module.exports = router;
