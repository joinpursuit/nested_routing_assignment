const express = require('express');
const app = express();
const port = 7000;
const user = require('./routes/user');
const post = require('./routes/post');
const picture = require('./routes/picture');

const endRoute = (req, res) => {
  res.json({
    message: 'homepage',
  });
};

const errMsg = (req, res) => {
  res.json({
    message: '404 error',
  });
};

const listening = () => {
  console.log(`listening on port ${port}`);
};

app.use('/user', user);
app.use('/post', post);
app.use('/picture', picture);

app.get('/', endRoute);

app.get('*', errMsg);

app.listen(port, listening);
