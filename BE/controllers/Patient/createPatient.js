const bcrypt = require("bcrypt");
const { Patient } = require("../../database/models");

const createPatient = async (req, res) => {
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

    const isDuplicated = await Patient.findOne({
      where: {
        email: email,
      },
    });

    if (isDuplicated) {
      throw new Error("Patient duplicated")
    }

    const newPatient = await Patient.create({
      fullname,
      password: hashedPwd,
      email,
      country,
      nid,
      gender,
      birthdate,
    });

    return res.status(201).json({ message: "Patient created", patient: newPatient });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Error" });
  }
};

module.exports = {
  createPatient
};
