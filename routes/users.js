let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.json({
    let users = req.params.users,
     message: users
  });
});
router.get('/:id', (req, res) => {
  let userId = req.params.name
  let thisId = req.params.id;
  res.json({
    user: "",
    userID: thisID;
  });
});

module.exports = router;
