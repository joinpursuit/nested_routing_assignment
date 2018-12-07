let express = require('express');
let router = express.Router();
let data = require('../data.js');

let pics = data.pictures;

router.get('/', (req, res) => {
  res.json(pics);
});

router.get('/:id', (req, res) => {
  let picId = pics[req.params.id - 1];
  res.json(picId);
});

router.get('/user/:id', (req, res) => {
  let userInput = parseInt(req.params.id);
  pics.forEach(el => {
    if (userInput === el['userId']) {
      res.json(el.url);
    }
  });
});

module.exports = router;
