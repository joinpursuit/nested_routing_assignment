let express = require("express");
let app = express();
let users = require('./routes/users.js');
let posts = require('./routes/posts')
let pictures = require('./routes/pictures');



app.use('/users', users);
app.use('/post', posts);
app.use('/picture', pictures);

app.get('*', (req, res) => {
  let errorInput = req
  res.status(404).json({
    message: `Hold it there...Youre not supposed to be here... the Zucc will get you!`
  });
});

app.listen(5000, () => {
  console.log("5k fake Facebook!")
})