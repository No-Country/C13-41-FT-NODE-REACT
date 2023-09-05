const { Specialty } = require("../../database/models");

const getSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.findAll();

    if (!specialties.length) {
      throw new Error("Specialties not found")
    }

    return res
      .status(200)
      .json({ data:{specialties}});
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Get Specialties" });
  }
};

module.exports = {
  getSpecialties
};