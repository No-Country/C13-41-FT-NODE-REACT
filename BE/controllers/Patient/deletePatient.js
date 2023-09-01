const { Patient } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const deletePatient = async (req, res) => {
  try {
    const email = req.query.email;

    if (!email) {
      throw new Error("All fields are required")
    }

    const deletedPatient = await Patient.destroy({
      where: {
        email: email,
      },
    });

    if (!deletedPatient) {
      throw new Error("Patient not found")
    }

    return res
      .status(200)
      .json({ message: "patient deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Patient" });
  }
};

module.exports = {
  deletePatient,
};