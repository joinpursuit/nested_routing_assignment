let express = require('express')
let router = express.Router()
let data = require('../modules/data.js')

router.get('/', (req, res) => {
  res.json(data.users)
})

router.get('/:id', (req, res) => {
  res.json(data.users[Number(req.params.id) - 1])
})


module.exports = router
