const express = require('express');
const router = express.Router();
const data = require('./data.js');

router.get('/', (req, res) => {
  res.json(data.users);
})

router.get('/:id',(req, res) => {
  let givenId = req.params.id;
  let idToShow =parseInt(givenId) - 1;
  res.json(data.users[idToShow]);
})

module.exports = router;