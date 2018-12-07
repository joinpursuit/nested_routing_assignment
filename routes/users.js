const express = require('express');
const router = express.Router();
const {users} = require('../data.js');


router.get('/', (req,res)=> {
  res.json({
    message: users
  })
})

router.get('/:id', (req,res)=> {
  let userId = req.params.id
  let results = users[userId - 1]
  res.json(
    results
  )
})


module.exports = router;
