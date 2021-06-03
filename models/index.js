//Define the relationships between the two models, Comment and Post.
const Post = require("./posts");
const Comment = require("./comments");
const User = require ("./user");

User.hasMany(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",

})
Post.belongsTo(User,{
through: 'post_id'

} )
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

module.exports = { Post, Comment, User };
