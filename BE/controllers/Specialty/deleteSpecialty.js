const { Specialty } = require("../../database/models");

const deleteSpecialty = async (req, res) => {
  try {
    const id = req.query.id;

    if (!id) throw new Error("Id is required")

    const deletedSpecialty = await Specialty.destroy({
      where: {
        id: id
      }
    });

    if (deletedSpecialty == 0) {
      throw new Error("Specialty not found")
    }

    return res
      .status(200)
      .json({ message: "Specialty Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Specialty" });
  }
};

module.exports = {
  deleteSpecialty
};