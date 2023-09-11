const { SocialNetwork } = require("../../database/models");

const deleteSocialNetwork = async (req, res) => {
  try {
    const id = req.query.id;

    if (!id) throw new Error("id is required")

    await SocialNetwork.destroy({
      where: {
        id
      }
    });

    return res
      .status(200)
      .json({ message: "SocialNetwork Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete SocialNetwork" });
  }
};

module.exports = {
  deleteSocialNetwork
};