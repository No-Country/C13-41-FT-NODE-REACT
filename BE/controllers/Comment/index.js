const { createComment } = require("./createComment");
const { deleteComment } = require("./deleteComment");
const { editComment } = require("./editComment");
const { getComments } = require("./getComments");

module.exports = {
  createComment,
  deleteComment,
  editComment,
  getComments
};
