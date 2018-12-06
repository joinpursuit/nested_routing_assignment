let express = require("express");
let app = express();
let users = require("./routes/Users.js");
let pictures = require("./routes/Picturs.js");
let posts = require("./routes/Posts.js");

app.use("/users", users);
app.use("/pictures", pictures);
app.use("/posts", posts);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Error"
  });
});

app.listen(5000, () => {
  console.log("you are listening to port 5000");
});
