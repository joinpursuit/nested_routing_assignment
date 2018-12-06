let express = require("express");
let app = express();
let users = require("./routes/users");
let posts= require("./routes/posts");
let pictures = require("./routes/pictures");

app.use("/users", users);
//.use takes an instance of middleware or Router
app.use("/pictures", pictures);
app.use("/posts", posts);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "error"
  });
});

app.listen(5000, () => {
  console.log("listening 5000");
});
