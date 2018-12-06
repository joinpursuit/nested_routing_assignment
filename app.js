
let express = require('express');
let app = express();
let users = require('./routes/users');
let pictures = require("./routes/pictures");
let posts = require("./routes/posts")
const port = 8000;


app.use("/users", users);
app.use("/pictures", pictures);
app.use("/posts", posts);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Error"
  });
});

app.listen(8000, () => {
  "Listening on port 8000!";

})
