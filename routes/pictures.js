const express = require('express')
const router = express.Router()
let { pictures } = require('../data.js')

router.get('/', (req,res) =>{
  res.json({
     pictures
  })
})

router.get('/:id', (req,res) =>{
  let id = parseInt(req.params.id)
  let found = pictures.find( pictures => pictures.id === id)
  found ? res.json(found) : res.status(404).send('NOT FOUND')
})

router.get('/user/:id', (req,res) =>{
  let id = parseInt(req.params.id)
  let found = pictures.find( pictures => pictures.userId === id)
  found ? res.json(found) : res.status(404).send('NOT FOUND')
})

module.exports = router;
