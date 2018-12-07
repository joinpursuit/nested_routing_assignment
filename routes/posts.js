const express = require('express');
const router = express.Router();
const {posts} = require('../data')
let results = [];



router.get('/', (req,res)=> {
  res.json({
    posts
  })
})

router.get("/user/:id", (req, res) => {
    let userInput = parseInt(req.params.id);
    let results = []
    let idResults = Object.values(posts);
    for (let i = 0; i < idResults.length; i++) {
        // console.log(idResults[i].userId);
        results.push(idResults[i].userId)
        if(results.includes(userInput)=== true){
            res.json(posts[i])
        }
    }
})

router.get('/:id', (req,res)=> {
  let userInput = req.params.id;
  let results = posts[userInput - 1]
  res.json(results)
})

router.get('*',(req,res)=> {
  res.status(404).json({
    message:error
  })
})


module.exports = router;
