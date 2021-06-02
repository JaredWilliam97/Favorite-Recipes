const router = require("express").Router();
const { Post } = require("../../models");

// router.post('/', async (req, res) => {
//     try {
//       const newPost = await Post.create({

//       title: req.body.title,
//       content: req.body.content,
//     });

//   res.status(200).json(newPost);}
//   catch (err){ res.status(400).json(err);}

//     })

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

module.exports = router;
