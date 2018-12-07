let express = require('express');
let router = express.Router();
const data = require("../data.js")
// let users = data.users;

router.get('/', (req, res) => {
  res.json(data.users)
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  res.json(data.users[id-1])
})

module.exports = router;
