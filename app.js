const express = require('express')
const app = express()
let users = require('./routes/users');
let posts = require('./routes/posts');
let pictures = require('./routes/pictures');

app.use('/users', users);
app.use('/posts', posts);
app.use('/pictures', pictures);

app.get("*", (req,res)=>{
  res.status(404).json({
    message: 'error'
  })
})

app.listen(3000, ()=>{
  console.log('Lets do this 3000');
})
