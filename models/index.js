//Define the relationships between the two models, Comment and Post.
const Post = require("./posts");
const Comment = require("./comments");

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

module.exports = { Post, Comment };
