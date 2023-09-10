const { MedicSpecialty } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const delMedicSpecialty = async (req, res) => {
  try {
    const {specialtyId, medicId}= req.query;

    if (!specialtyId && !medicId) {
      throw new Error("specialtyId and medicId are required")
    }

    const deletedMedicSpecialty = await MedicSpecialty.destroy({
      where: {
        medicId,
        specialtyId,
      },
    });

    if (!deletedMedicSpecialty) {
      throw new Error("MedicSpecialty not found")
    }

    return res
      .status(200)
      .json({ message: "MedicSpecialty deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete MedicSpecialty" });
  }
};

module.exports = {
  delMedicSpecialty,
};