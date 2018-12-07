const express = require('express')
const router = express.Router()
module.exports = router;
const {users} = require("../data.js")

router.get("/", (req, res) => {
    res.json({
        USERS: users
    })
})

router.get("/:id", (req, res) => {
    let userInput = req.params.id
    let result = users[userInput - 1]
    res.json(result)
})
