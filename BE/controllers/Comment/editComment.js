const { Comment } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const editComment = async (req, res) => {
  try {
    const { commentId } = req.body

    if(!commentId)
    {
      throw new Error("Must contain id")
    }

    const updatedComment = await Comment.update(
      req.body,
      {
        where: {
          id: commentId,
        },
      }
    );

    if (updatedComment == 0) {
      throw new Error("Comment not found")
    }

    const findComment = await Comment.findOne(
      {
        where: {
          id: commentId,
        },
      }
    );


    return res
      .status(200)
      .json({ data: { findComment }, message: "Comment updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Comment" });
  }
};

module.exports = {
  editComment,
};