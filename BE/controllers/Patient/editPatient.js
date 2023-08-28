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

    if (updatedPatient == 0) {
      throw new Error("Patient not found")
    }

    const patient = await Patient.findOne(
      {
        where: {
          email: email,
        },
      }
    );

    return res
      .status(200)
      .json({ data:{patient},message: "Patient Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Patient" });
  }
};

module.exports = {
  editPatient
};
