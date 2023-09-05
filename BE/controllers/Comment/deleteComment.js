const { Comment } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const deleteComment = async (req, res) => {
  try {
    const id = req.query.id;

    if (!id) {
      throw new Error("All fields are required")
    }

    const deletedComment = await Comment.destroy({
      where: {
        id: id,
      },
    });

    if (!deletedComment) {
      throw new Error("Comment not found")
    }

    return res
      .status(200)
      .json({ message: "Comment deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Comment" });
  }
};

module.exports = {
  deleteComment,
};