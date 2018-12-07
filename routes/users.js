let express = require('express');
let router = express.Router();
const data = require('../data.js');

let users = data.users;
router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  let userId = users[req.params.id - 1];
  res.json(userId);
});

module.exports = router;
