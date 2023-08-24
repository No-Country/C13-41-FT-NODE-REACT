const bcrypt = require("bcrypt");
const { Medic } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const editMedic = async (req, res) => {
  try {
    const {
      fullname,
      password,
      email,
      country,
      gender,
      birthdate,
      nid,
      profesionalid,
    } = req.body;

    if (
      !fullname ||
      !password ||
      !email ||
      !country ||
      !gender ||
      !birthdate ||
      !nid ||
      !profesionalid
    ) {
      throw new Error("All fields are required")
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const updatedMedic = await Medic.update(
      {
        fullname,
        password: hashedPwd,
        email,
        country,
        gender,
        nid,
        profesionalid,
        birthdate,
      },
      {
        where: {
          email: email,
        },
      }
    );

    if (!updatedMedic) {
      throw new Error("Medic not found")
    }

    return res
      .status(200)
      .json({ data: { medic: updatedMedic }, message: "medic updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Error" });
  }
};

module.exports = {
  editMedic,
};