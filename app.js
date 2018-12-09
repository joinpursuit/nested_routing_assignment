const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const picturesRouter = require('./routes/pictures');
let port = 5000;

res.set("Access-Control-Allow-Origin", "*");

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/pictures', picturesRouter);

app.get('*', (req, res) => {
  res.status(404).send(`Error 404: Something went wrong.`)
});

app.listen(port, () => {
  console.log(`Listening to port ${port}.`);
});
