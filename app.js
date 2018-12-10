const express = require('express')
const app = express()
const {users, posts, pictures} = require('./data.js')
const userRoutes = require("./routes/users.js")
const postRoutes = require("./routes/posts.js")
const pictureRoutes = require("./routes/pictures.js")


// console.log(users,"this");
// app.get('/', (req, res) => {
//   res.json({users});
// })

app.use("/users", userRoutes)
app.use("/posts", postRoutes)
app.use("/pictures",pictureRoutes)









app.listen(8000, () => {
console.log("listening to port 8000");

})
