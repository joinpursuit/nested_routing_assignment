let express = require("express.js");
let users = require("./routes/users.js");
let posts = require("./routes/posts.js");
let pictures = require("./routes/pictures.js");
let app = express();
//connect data file here

app.use("/users", users);
app.use("/posts", posts);
app.use("/pictures", pictures);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Error"
  });
});
app.listen(3000, () => {
  console.log("You are listening in port 3000");
});
