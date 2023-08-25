const bcrypt = require("bcrypt");
const { Consult } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const editConsult = async (req, res) => {
  try {
    const {
      id,
      diagnostic,
      recipe,
      consultTimestamp,
      status,
      resume,
      urlFile
    } = req.body;

    if (
      !id ||
      !diagnostic ||
      !recipe ||
      !consultTimestamp ||
      !status ||
      !resume ||
      !urlFile
    ) {
      throw new Error("All fields are required")
    }

    const updatedConsult = await Consult.update(
      { 
        diagnostic,
        recipe,
        consultTimestamp,
        status,
        resume,
        urlFile
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (updatedConsult == 0) {
      throw new Error("Consult not found")
    }

    const consult = await Consult.findOne(
      {
        where: {
          id: id,
        },
      }
    );


    return res
      .status(200)
      .json({ data: { consult }, message: "consult updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Consult" });
  }
};

module.exports = {
  editConsult,
};