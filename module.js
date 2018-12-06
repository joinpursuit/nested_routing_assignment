const data = require("./data");

function getDataUsers(req, res, next) {
  let thedata = req.params.id;
  if (data.users[thedata.length - 1]) {
    res.sender = data.users[thedata - 1];
    console.log("what isnt working");
    next();
  } else if (!data.users[thedata.length - 1]) {
    res.sender = "here";
    next();
    //not working currently
  }
}

function getDataPosts(req, res, next) {
  let thedata = parseInt(req.params.id);
  if (!data.posts[thedata-1]) {
    res.sender = "oh la la ";
    console.log(thedata);
    next();
  } else {
    res.sender = data.posts[thedata - 1];
    console.log("okie dokie");
    next();
  }
}

function getDataPictures(req, res, next) {
  let thedata = req.params.id;
  if (data.pictures[thedata.length - 1]) {
    res.sender = data.pictures[thedata - 1];
    console.log("what isnt working");
    next();
  } else if (!data.pictures[thedata.length - 1]) {
    res.sender = "here";
    next();
    //not working currently
  }
}
function getUserId(req, res, next) {
  let id = parseInt(Object.values(req.params));
  // res.json(posts[1])
  let output = [];
  data.posts.forEach(function(element) {
    if (element.userId === id) {
      output.push(element);
    }
  });
  res.sender = output;
  next();
}

//  router.get('/user/:id', (req, res) => {
//   let id = parseInt(req.params.id);
//   let selectedPic = pictures.filter( picObj => {
//     return (picObj.userId === id)
//   })
//   res.json(selectedPic[0])
// })

module.exports = { getDataUsers, getDataPosts, getDataPictures };
