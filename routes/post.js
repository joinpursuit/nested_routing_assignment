let express = require('express')
let router = express.Router()
let data = require('../modules/data.js')

router.get('/', (req, res) => {
  res.json(data.posts)
})

router.get('/:id', (req, res) => {
  res.json(data.posts[Number(req.params.id) - 1].body)
})

router.get('/user/:id', (req, res) => {
  let postObj = data.posts
  let filteredId = postObj.filter(post => post.userId === Number(req.params.id))
  res.json({
    userId: req.params.id,
    Post: filteredId[0].body
  })
})

module.exports = router
