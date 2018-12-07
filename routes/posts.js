let express = require("express");
let data = require("../data.js");
let router = express.Router();

router.get("/", (req, res) => {
  res.json(data.posts);
});

router.get("/:id", (req, res) => {
  let selectId = req.params.id;
  let result = data.posts[selectId - 1];

  res.json(result);
});

router.get("/user/:id", (req, res) => {
  let uId = parseInt(req.params.id);
  data.posts.forEach(el => {
    if(uId === el.id){
      res.json(el.body);
    }
  })
});

module.exports = router;
