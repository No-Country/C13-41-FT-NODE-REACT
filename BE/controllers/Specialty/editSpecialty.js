const { Specialty } = require("../../database/models");

const editSpecialty = async (req, res) => {
  try {
    const { id, name } = req.body;

    if (!id) throw new Error("Id is required")

    const updatedSpecialty = await Specialty.update(
      { name },
      {
        where: {
          id: id,
        },
      }
    );

    if (updatedSpecialty == 0) {
      throw new Error("Specialty not found")
    }

    const specialty = await Specialty.findOne(
      {
        where: {
          id: id,
        },
      }
    );

    return res
      .status(200)
      .json({ data:{specialty}, message: "Specialty Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Specialty" });
  }
};

module.exports = {
  editSpecialty
};