let express = require("express");
let router = express.Router();
let data = require("../data")

router.get("/", (req, res) => {
  res.json({
    message: "all products OMEGALUL"
  });
});

router.get("/:id", (req, res) => {
  let theId = req.params.id;
  res.json({
    message: "This product?",
    product: theId
  });
});

module.exports = router;
