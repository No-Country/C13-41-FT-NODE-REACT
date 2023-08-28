const { Speciality } = require("../../database/models");

const deleteSpeciality = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) throw new Error("Id is required")

    const deletedSpeciality = await Speciality.destroy({
      where: {
        id: id
      }
    });

    if (deletedSpeciality == 0) {
      throw new Error("Speciality not found")
    }

    return res
      .status(200)
      .json({ data:{deletedSpeciality}, message: "Speciality Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Speciality" });
  }
};

module.exports = {
  deleteSpeciality
};