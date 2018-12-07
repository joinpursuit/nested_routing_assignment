const express = require('express')
const router = express.Router()
module.exports = router;
const {pictures} = require("../data.js")

router.get("/", (req, res) => {
    res.json({
        users: pictures
    })
})

router.get("/:id", (req, res) => {
    let userInput = req.params.id;
    let result = pictures[userInput - 1].url;
    res.json({result})
})

router.get("/user/:id", (req, res) => {
    let userInput = req.params.id;
    let result = pictures[userInput - 1]
    res.json({result})
})

router.get("*", (req, res) => {
    res.status(404).send("ERROR")
})
