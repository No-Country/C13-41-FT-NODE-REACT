const bcrypt = require("bcrypt");
const { Patient } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const editPatient = async (req, res) => {
  try {
    const { fullname, password, email, country, gender, birthdate, nid } =
      req.body;

    if (
      !fullname ||
      !password ||
      !email ||
      !country ||
      !gender ||
      !birthdate ||
      !nid
    ) {
      throw new Error("All fields are required")
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const updatedPatient = await Patient.update(
      {
        fullname,
        password: hashedPwd,
        email,
        country,
        nid,
        gender,
        birthdate,
      },
      {
        where: {
          email: email,
        },
      }
    );

    if (!updatedPatient) {
      throw new Error("Patient not found")
    }

    return res
      .status(200)
      .json({ data: { patient: updatedPatient }, message: "patient updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Error" });
  }
};

module.exports = {
  editPatient
};
