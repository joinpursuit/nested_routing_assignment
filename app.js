const express = require("express");
const app = express();
const { user, post, picture } = require("./data.js");
const userRoute = require("./routes/user.js");
const postRoute = require("./routes/post.js");
const pictureRoute = require("./routes/picture.js");
const port = 8000;

app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/picture", pictureRoute);

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Error"
  });
});

app.listen(port, () => {
  console.log(`You are listening to port ${port}`);
});
