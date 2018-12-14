const express = require('express');
const router = express.Router();

//==============================

router.get('/', (req, res) => {
  res.json({
    pictures: pictures
  })
})

router.get('/:id', (req, res) => {
  // res.posts.map(pictureObject => {
  //   res.json({pictureId: req.params.id, picture: res.pictureObject[pictureObject.req.params.id]})
  // })
})

router.get('/user/:userId', (req, res) => {
  // res.picture.map(pictureObject => {
  //   res.json({
  //     userId: req.params.userId, pictures: res.pictureObject.url[pictureObject.req.params.userId]
  //   })
  // })
})

module.exports = router
