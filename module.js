function getDataUsers(req, res, next) {
  // let data = req.params.id
  if (!data.users[req.params.id]) {
    res.sender = data.users[req.params.id - 1];
    console.log("hii");
    next();
  } else {
    res.sender = {
      status: "failed",
      chooser: "invalid id"
    };
    console.log("heeyyyy");
    next();
  }
  console.log("something");
}

// function getDataUsers(req, res, next) {
//
//   if (!data.users[req.params.id - 1]) {
//     res.sender = res.send("failed");
//   } else {
//   res.sender = res.json(data.users[req.params.id - 1])
//   }
//   next();
// }

module.exports = { getDataUsers };
