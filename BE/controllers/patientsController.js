const bcrypt = require("bcrypt");
const { Patient } = require("../database/models");

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
      return res.status(400).json({ error: "All fields are required." });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const isDuplicated = await Patient.findOne({
      where: {
        email: email,
      },
    });

    if (isDuplicated) {
      return res.status(400).json({ error: "Patient duplicated" });
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

    res.status(201).json({ message: "Patient created", patient: newPatient });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error" });
  }
};

const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ error: "All fields are required" });
    }

    const patient = await Patient.findOne({
      where: {
        email: email,
      },
    });

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, patient.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    res.status(201).json({ message: "Patient logged", patient });
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({ error: "Error" });
  }
};

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
      return res.status(400).json({ error: "All fields are required." });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const updatedPatient = await Medic.update(
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
      return res.status(404).json({ error: "Patient not found" });
    }

    res
      .status(201)
      .json({ data: { patient: updatedPatient }, message: "patient updated" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: error.message, error: "Error" });
  }
};

module.exports = {
  createPatient,
  loginPatient,
  editPatient
};
