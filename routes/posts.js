let express = require('express');
let router = express.Router();
const data = require('../data.js');

let posts = data.posts;
router.get('/', (req, res) => {
  res.json(posts);
});

router.get('/:id', (req, res) => {
  let postId = posts[req.params.id - 1];
  res.json(postId);
});

router.get('/user/:id', (req, res) => {
  let userInput = parseInt(req.params.id);
  posts.forEach(el => {
    if (userInput === el['userId']) {
      res.json(el.body);
    }
  });
});

module.exports = router;
