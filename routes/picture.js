const express = require("express");
const router = express.Router();
const { picture } = require("../data.js");

router.get("/", (req, res) => {
  res.json(picture);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let result = picture[id - 1];
  res.json(result);
});

router.get("/user/:id", (req, res) => {
  let userId = req.params.id;
  let values = Object.values(picture);

  for (let i = 0; i < values.length; i++) {
    if (values[i].userId === Number(userId)) res.json(values[i]);
  }
});

module.exports = router;
