let express = require('express')
let router = express.Router()
let data = require('../modules/data.js')

router.get('/', (req, res) => {
  res.json(data.pictures)
})

router.get('/:id', (req, res) => {
  res.json(data.pictures[Number(req.params.id) - 1])
})

router.get('/user/:id', (req, res) => {
  let pictureObj = data.pictures
  let filteredPics = pictureObj.filter(picture => picture.userId === Number(req.params.id))
  res.json({
    userId: req.params.id,
    picture_url: filteredPics[0].url
  })
})

module.exports = router
