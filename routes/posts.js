let express = require('express');
let router = express.Router();
const data = require("../data.js")

router.get('/', (req, res) => {
  res.json(data.posts)
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json(data.posts[id-1])
})

router.get('/user/:id', (req, res) => {
  let uId = parseInt(req.params.id);
  data.posts.forEach(el => {
    if(uId === el.userId){
      res.json(el.body)
    }
  })
})

module.exports = router;
