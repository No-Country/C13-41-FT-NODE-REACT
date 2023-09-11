const { Consult } = require("../../database/models");

const deleteConsult = async (req, res) => {
  try {
    const {consultId} = req.query;

    if (!consultId) {
      throw new Error("Must contain consultId")
    }

    const deletedConsult = await Consult.destroy({
      where: {
        id: consultId,
      },
    });

    if (!deletedConsult) {
      throw new Error("Consult not found")
    }

    return res
      .status(200)
      .json({ message: "Consult Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Consult" });
  }
};

module.exports = {
  deleteConsult,
};