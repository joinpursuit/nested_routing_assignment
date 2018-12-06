let express = require('express')
let app = express()
let users = require('./routes/users.js')
let post = require('./routes/post.js')
let data = require('./modules/data.js')
let picture = require('./routes/picture.js')

app.use('/user', users)
app.use('/post', post)
app.use('/picture', picture)
app.listen(3000, () => {
  console.log('Listening to port 3000')
})
