const router = require("express").Router();
const { Post, Comment } = require("../models");
//const withAuth = require('../utils/auth');

//need to put in router.get
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "created_at"],
      },
    ],
  }).then((postData) => {
    res.json(postData);
  });
});
// .then((dbPostData) => {
//   const posts = dbPostData.map((post) => post.get({ plain: true }));
//   res.render("homepage", { posts, loggedIn: req.session.loggedIn });
// })
// .catch((err) => {
//   console.log(err);
//   res.status(500).json(err);
// });
// });

module.exports = router;
