const express = require('express');
const router = express.Router();
const {pictures} = require('../data')
// const users = require('./data.js');


router.get('/', (req,res)=> {
  res.json({
    pictures
  })
})

router.get('/:id', (req,res)=> {
  let userInput = req.params.id
  let results = pictures[userInput - 1]
  res.json(results)
})

router.get('/user/:id', (req,res)=> {
  let userInput = req.params.id
  let results = pictures[userInput - 1].url
  res.json(results)

})




module.exports = router;
