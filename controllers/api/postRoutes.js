const sequelize = require("../../config/connection");
const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");
//RETRIEVE
router.get("/newpost", (req, res) => {
  console.log("Getting new Post");
  res.render("newPost");
});

router.get("/editpost", (req, res) => {
  console.log("Getting edit Post");
  res.render("editPost");
});

router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "content", "title", "name", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "created_at"],
      },
    ],
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const post = data.get({ plain: true });
      //de console.log(post);
      res.render("onePost", { post });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//

//CREATE
router.post("/", withAuth, (req, res) => {
  // QUERY USER TABLE
  // PULL NAME OUT OF OBJ
  User.findOne({
    where: {
      id: req.session.user_id,
    },
  }).then((userData) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    name: userData.name,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  // console.log(userData.name);
});
})
//UPDATE
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
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
