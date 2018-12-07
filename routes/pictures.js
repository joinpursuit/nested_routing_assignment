let express = require('express');
let router = express.Router();
const data = require("../data.js")

router.get('/', (req, res) => {
  res.json(data.pictures)
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  res.json(data.pictures[id-1])
})

router.get('/user/:id', (req, res) => {
  let uId = parseInt(req.params.id);
  data.pictures.forEach(el => {
    if(uId === el.userId){
      res.json(el.url)
    }
  })
})

module.exports = router;
