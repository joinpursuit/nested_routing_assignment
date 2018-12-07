const express = require("express");
const router = express.Router();
const { user } = require("../data.js");

router.get("/", (req, res) => {
  res.json(user);
});

router.get("/:id", (req, res) => {
  let userId = req.params.id;
  let result = user[userId - 1];
  res.json(result);
});

module.exports = router;
