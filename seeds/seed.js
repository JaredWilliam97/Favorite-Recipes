const sequelize = require("../config/connection");
const { Comment, Post } = require("../models");

const postData = require("./postData.json");
const commentData = require("./comment_data.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postData, {
    individualiHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualiHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
