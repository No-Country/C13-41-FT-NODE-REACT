const { Consult } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const getConsult = async (req, res) => {
  try {
    const {
      id,
    } = req.body;

    if (
      !id
    ) {
      throw new Error("All fields are required")
    }

    const consult = await Consult.findOne({
      where: {
        id: id
      }
    });

    if (!consult) {
      throw new Error("Consult not found")
    }
    return res
      .status(200)
      .json({ message: 'Consult data', consult });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Get Consult" });
  }
};

module.exports = {
  getConsult,
};