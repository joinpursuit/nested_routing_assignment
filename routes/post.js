const express = require("express");
const router = express.Router();
const { post } = require("../data.js");

router.get("/", (req, res) => {
  res.json(post);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let result = post[id - 1];
  res.json(result);
});

router.get("/user/:id", (req, res) => {
  let userId = req.params.id;
  let values = Object.values(post);

  for (let i = 0; i < values.length; i++) {
    if (values[i].userId === Number(userId)) res.json(values[i]);
  }
});

router.get("*", (req, res) => {
  res.status(404).json({
    message: "Error"
  });
});

module.exports = router;
