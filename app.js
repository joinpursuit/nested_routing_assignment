const express = require('express');
const app = express();
const port = 8000;
const users = require("./routes/users.js")
const posts = require("./routes/posts.js")
const pictures = require("./routes/pictures.js")

app.use("/users", users)
app.use("/posts", posts)
app.use("/pictures", pictures)



app.listen(port, () => {
    console.log(`Port ${port}`);    
})