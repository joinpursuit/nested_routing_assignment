const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

let users = [
  { id: 1, name: "Gregor Samsa", age: 54 },
  { id: 2, name: "Bobbie Tillman", age: 23 },
  { id: 3, name: "Tabitha Ealhstan", age: 34 },
  { id: 4, name: "Kamal Ante", age: 46 },
  { id: 5, name: "Keenan Kristian", age: 19 },
  { id: 6, name: "Lynne Meztli", age: 44 },
  { id: 7, name: "Amrita Gabriela", age: 62 },
  { id: 8, name: "Daniel Elke", age: 78 },
  { id: 9, name: "Roberta Alba", age: 27 },
  { id: 10, name: "Julia Layla", age: 55 }
];

//==================================
const middleWare1 = (req, res, next) => {
  res.users = users;
  next()
}

const finalFunction1 = (req, res) => {
  res.json({allUsers: res.users})
}
//=================================

const middleWare2 = (req, res, next) => {
  users.map(usersObject => {
    res.usersObject === usersObject.req.params.id
  })
  next();
}

const finalFunction2 = (req, res) => {
  res.json({userInfo: res.usersObject})
}

//=================================

router.get('/', middleWare1, finalFunction1)
router.get('/:id', middleWare2, finalFunction2)

//============================

module.exports = router;
