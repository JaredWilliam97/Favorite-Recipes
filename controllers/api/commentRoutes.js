const router = require("express").Router();
const { Comment } = require("../../models");

// CREATE
router.post("/", (req, res) => {
  Comment.create({
    comment: req.body.comment_text,
    post_id: req.body.post_id,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
