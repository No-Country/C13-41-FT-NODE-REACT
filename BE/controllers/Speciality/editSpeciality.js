const { Speciality } = require("../../database/models");

const editSpeciality = async (req, res) => {
  try {
    const { id, name } = req.body;

    if (!id) throw new Error("Id is required")

    const updatedSpeciality = await Speciality.update(
      { name },
      {
        where: {
          id: id,
        },
      }
    );

    if (updatedSpeciality == 0) {
      throw new Error("Speciality not found")
    }

    return res
      .status(200)
      .json({ data:{updatedSpeciality},message: "Speciality Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Speciality" });
  }
};

module.exports = {
  editSpeciality
};