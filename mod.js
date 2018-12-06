let {
  users,
  pictures,
  posts
} = require('./data.js')


function getSpecificUser(req, res, next) {

  let theID = req.params.id;
  if (!users[theID - 1]) {
    res.msg = {
      status: "Failed",
      message: `${theID} is and invalid id`

    }
    next();
  }
  res.msg = users[theID - 1]
  next();
}

function getSpecificPost(req, res, next) {

  let theID = req.params.id;
  if (!posts[theID - 1]) {
    res.msg = {
      status: "Failed",
      message: `${theID} is and invalid id`

    }
    next();
  }
  res.msg = posts[theID - 1]
  next();
}
//
function getSpecificPicture(req, res, next) {
  // let type = req.params.type;
  let theID = req.params.id;
  if (!pictures[theID - 1]) {
    res.msg = {
      status: "Failed",
      message: `${theID} is and invalid id`

    }
    next();
  }
  console.log(req)
  res.msg = pictures[theID - 1]
  next();
}

function getPostsbyUserId(req, res, next) {
  let anId = parseInt(req.params.id);
  let result = posts.filter(obj =>
    obj["userId"] === anId)
  console.log(result);

  res.msg = result;
  next();
}

function getPicturesbyUserId(req, res, next) {
  let anId = parseInt(req.params.id);
  let result = pictures.filter(obj =>
    obj["userId"] === anId)
  console.log(result);
  res.msg = result;
  next();
}
module.exports = {
  getSpecificUser,
  getSpecificPost,
  getSpecificPicture,
  getPostsbyUserId,
  getPicturesbyUserId
}