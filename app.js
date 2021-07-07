const express = require('express');
// const bodyParser = require('body-parser');

//============================
const users = require('./routes/users');
const posts = require('./routes/posts');
const pictures = require('./routes/pictures');

//============================
const app = express();

//============================
app.use('/user', users);
app.use('/post', posts);
app.use('/picture', pictures);

//============================
app.get('/', (req, res) => {
  // res.json(
  //   'FACEBOOK'
  // )
  res.sendFile(__dirname + '/frontDisplay/home.html')
})

app.get('/*', (req, res) => {
  res.status(404).json({
    message: "🤭 How embarrassing.4️⃣0️⃣4️⃣ "
  })
})

//============================
app.listen(5000, () => {
  console.log("Port 5000");
})

//============================
