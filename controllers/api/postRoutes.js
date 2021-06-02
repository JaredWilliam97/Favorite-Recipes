const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Post } = require("../../models");

//RETRIEVE
router.get("/newpost", (req, res) => {
  console.log("Getting new Post");
  res.render("newPost");
});

//CREATE
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
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
