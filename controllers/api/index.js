const router = require('express').Router();
const postRoutes = require('./postRoutes');

router.use('/posts', postRoutes);

const router = require("express").Router();
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
