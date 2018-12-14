const express = require('express');
const router = express.Router();
const data = require('../data.js')

//==============================

const




router.get('/', (req, res) => {
  res.json({
    posts: posts
  })
})

router.get('/:id', (req, res) => {
  res.posts.map(postObject => {
    res.json({postId: req.params.id, post: res.postObject[postObject.req.params.id]})
  })
})

router.get('/user/:userId', (req, res) => {
  res.posts.map(postObject => {
  //   res.json({
  //     userId: req.params.userId, post: res.postObject.body[postObject.req.params.userId]
  //   })
  })
})

module.exports = router
