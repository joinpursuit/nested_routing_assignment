const express = require('express');
const router = express.Router();

let pictures = [
  {
    id: 1,
    userId: 6,
    url:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 2,
    userId: 2,
    url:
      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 3,
    userId: 4,
    url:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 4,
    userId: 8,
    url:
      "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 5,
    userId: 3,
    url:
      "https://images.pexels.com/photos/62321/kitten-cat-fluffy-cat-cute-62321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 6,
    userId: 1,
    url:
      "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 7,
    userId: 9,
    url:
      "https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 8,
    userId: 10,
    url:
      "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 9,
    userId: 5,
    url:
      "https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    id: 10,
    userId: 7,
    url:
      "https://images.pexels.com/photos/271955/pexels-photo-271955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

router.get('/', (req, res) => {
  res.json({
    pictures: pictures
  })
})

router.get('/:id', (req, res) => {
  res.json({
    pictures: pictures[req.params.id - 1]
  })
})

router.get('/user/:id', (req, res) => {

  let userPictures = pictures.filter(
    el => {
      return el.userId === parseInt(req.params.id)
    })

  res.json(userPictures)

})


module.exports = router;
