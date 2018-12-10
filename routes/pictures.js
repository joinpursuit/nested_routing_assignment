let express = require("express");
let router = express.Router();
let data = require("../data")
let mod = require("../module");

router.get("/", (req, res) => {
  res.json(data.pictures)
  // res.json({
  //   message: "all products OMEGALUL"
  // });
});

router.get("/:id",mod.getDataPictures ,(req, res) => {
  // res.json(data.posts[req.params.id -1 ])
  res.json(res.sender)
});


// router.get("/user/:id", (req, res) => {
//   // let theId = data.users
//   res.json(data.posts[req.params.id -1])
// });

 router.get('/users/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let selectedPic = data.pictures.filter( picObj => {
    return (picObj.id === id)
  })
  res.json(selectedPic[0])
})

module.exports = router;
