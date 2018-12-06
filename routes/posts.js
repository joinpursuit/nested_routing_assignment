const express = require('express');
const router = express.Router();
const data = require('./data.js');

router.get('/', (req, res) => {
  res.json(data.posts);
})

router.get('/:id', (req, res) => {
  let givenId = req.params.id;
  let idToShow = parseInt(givenId) - 1;
  res.json(data.posts[idToShow]);
})

router.get('/user/:id', (req, res) => {
  let postArr = data.posts;
  for (let i = 0; i < postArr.length; i++) {
    if(parseInt(req.params.id) === postArr[i].userId) {
      res.json(postArr[i]);
    }
  } 
  res.json({
    message: 'No such a post,please try again!'
  });
  
})

module.exports = router;
