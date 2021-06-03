const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Comment } = require("../../models");

// CREATE

router.post("/", (req, res) => {
  console.log("a new comment is being created");
  Comment.create({
    post_id: req.body.post_id,
    comment_text: req.body.comment_text,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
