let data = require('./data.js')


function getSpecificUser(req, res, next) {

  let theID = req.params.id;
  if (!data.users[theID - 1]) {
    res.msg = {
      status: "Failed",
      message: `${theID} is and invalid id`

    }
    next();
  }
  res.msg = data.users[theID - 1]
  next();
}

function getSpecificPost(req, res, next) {

  let theID = req.params.id;
  if (!data.posts[theID - 1]) {
    res.msg = {
      status: "Failed",
      message: `${theID} is and invalid id`

    }
    next();
  }
  res.msg = data.posts[theID - 1]
  next();
}
//
function getSpecificPicture(req, res, next) {

  let theID = req.params.id;
  if (!data.pictures[theID - 1]) {
    res.msg = {
      status: "Failed",
      message: `${theID} is and invalid id`

    }
    next();
  }
  console.log(req)
  res.msg = data.pictures[theID - 1]
  next();
}
module.exports = {
  getSpecificUser,
  getSpecificPost,
  getSpecificPicture,
}