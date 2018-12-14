let xpress = require("express");
let app = express();
let users = require("./routes/users");
let posts = require("./routes/posts");
let pictures = require("./routes/pictures");

app.use("/users", users);
app.use("/posts", posts);
app.use("/pictures", pictures);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Error"
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000.");
});
