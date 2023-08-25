const { Consult } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const deleteConsult = async (req, res) => {
  try {
    const {
      id,
    } = req.body;

    if (
      !id
    ) {
      throw new Error("All fields are required")
    }

    const deletedConsult = await Consult.destroy({
      where: {
        id: id,
      },
    });

    if (!deletedConsult) {
      throw new Error("Consult not found")
    }

    return res
      .status(200)
      .json({ message: "consult deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Consult" });
  }
};

module.exports = {
  deleteConsult,
};