
const { SocialNetwork } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const editSocialNetwork = async (req, res) => {
  try {

    const { id, link } = req.body

    if(!id || !link)
    {
      throw new Error("Must contain id/email")
    }

    const updatedSocialNetwork = await SocialNetwork.update(
        req.body,
      {
        where: {
          id,
        },
      }
    );

    if (updatedSocialNetwork == 0) {
      throw new Error("SocialNetwork not found")
    }

    const updateSocialNetwork = await SocialNetwork.findOne(
      {
        where: {
          id
        },
      }
    );

    return res
      .status(200)
      .json({ data:{updateSocialNetwork},message: "Social Network Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Social Network" });
  }
};

module.exports = {
  editSocialNetwork
};
