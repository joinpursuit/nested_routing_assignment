const express = require('express');
const app = express();
const users = require('./routes/users');
const posts = require('./routes/posts');
const pictures = require('./routes/pictures');


app.use('/users', users);
app.use('/posts', posts);
app.use('/pictures', pictures);


app.get('*', (req, res) => {
  res.status(404).json({
    message: "Error"
  })
})

app.listen(5004, () => {
  console.log("you are doing facebook homework, and listening to port 5004")
})
