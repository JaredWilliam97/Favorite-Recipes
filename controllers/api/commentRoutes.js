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

//DELETE
router.delete("/:id", (req, res) => {
  console.log("entered delete route");

  Comment.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
