const { Medic } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const deleteMedic = async (req, res) => {
  try {
    const email = req.query.email;

    if (!email) {
      throw new Error("All fields are required")
    }

    const deletedMedic = await Medic.destroy({
      where: {
        email: email,
      },
    });

    if (!deletedMedic) {
      throw new Error("Medic not found")
    }

    return res
      .status(200)
      .json({ message: "medic deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Medic" });
  }
};

module.exports = {
  deleteMedic,
};