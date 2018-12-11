const express = require('express')
const router = express.Router()
let { users } = require('../data.js')

router.get('/', (req,res) =>{
  res.json({
    users
  })
})

router.get('/:id', (req,res) =>{
  let id = parseInt(req.params.id);
  let found = users.find(users => users.id === id)
  found ? res.json(found) : res.status(404).send("NOT FOUND")
})

module.exports = router;
