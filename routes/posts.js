const express = require('express')
const router = express.Router()
let { posts } = require('../data.js')

router.get('/', (req,res) =>{
  res.json(
    posts
  )
})

router.get('/:id', (req,res)=>{
  let id = parseInt(req.params.id);
  let found = posts.find(post => post.id === id)
  found ? res.json(found) : res.status(404).send("NOT FOUND")
})

router.get('/user/:id', (req,res) =>{
  let id = parseInt(req.params.id)
  let found = posts.find( posts => posts.userId === id)
  found ? res.json(found) : res.status(404).send('NOT FOUND')
})


module.exports = router;
