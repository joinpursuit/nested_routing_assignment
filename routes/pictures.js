let express = require("express");
let data = require("../data.js");
let router = express.Router();

router.get("/", (req, res) => {
  res.json(data.pictures);
});

router.get("/:id", (req, res) => {
  let selectId = req.params.id;
  let result = data.pictures[selectId - 1];

  res.json(result);
});

router.get("/user/:id", (req, res) => {
  let uId = parseInt(req.params.id);
  data.pictures.forEach(el => {
    if(uId === el.id){
      res.json(el.url);
    }
  })
});

module.exports = router;
