const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const data = require('../data.js')

//=================================
const showAllUsers = (req, res) => {
  res.json(data.users)
}

const singleUserById = (req, res) => {
  const id = req.params.id
  const findUser = data.users.find(object => {
      // console.log(object.id);
    return object.id == id
  })

  if(findUser){
    res.json(findUser)
  }
  else {
    res.json('NOT A USER')
  }

  // data.users.find(object =>{
  //   if (object.id === id) {
  //     res.json(object)
  //   }
  //   else {
  //     res.json({ message: 'Not a user' })
  //   }
  // })
    // console.log(object)})

  // res.json(data.user);
  // res.data.forEach(user => {
  //   console.log(req.params.id);
  //   // res.json(req.params.id)
  // })
}

router.get('/', showAllUsers)
router.get('/:id', singleUserById)
// router.get('/:id', middleWare2, finalFunction2)

//============================

module.exports = router;
