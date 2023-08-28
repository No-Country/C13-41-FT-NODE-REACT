const { Speciality } = require("../../database/models");

const getSpecialities = async (req, res) => {
  try {
    const specialities = await Speciality.findAll();

    if (!specialities.length) {
      throw new Error("Specialities not found")
    }

    return res
      .status(200)
      .json({ data:{specialities}});
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Get Specialities" });
  }
};

module.exports = {
  getSpecialities
};