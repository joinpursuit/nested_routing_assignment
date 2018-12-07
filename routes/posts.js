const express = require('express')
const router = express.Router()
module.exports = router;
const {posts} = require("../data.js")

router.get("/", (req, res) => {
    res.json(posts)
})

router.get("/user/:id", (req, res) => {
    let userInput = parseInt(req.params.id);
    let results = []
    let idResults = Object.values(posts);
    for (let i = 0; i < idResults.length; i++) {
        results.push(idResults[i].userId)
        if(results.includes(userInput)=== true){
            res.json(posts[i])
        }
    }    
})



router.get("*", (req, res) => {
    res.status(404).json("ERROR")
})
