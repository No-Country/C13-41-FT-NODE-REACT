const bcrypt = require("bcrypt");
const { Medic } = require("../database/models");

const createMedic = async (req, res) => {
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
      return res.status(400).json({ error: "All fields are required." });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const newMedic = await Medic.create({
      fullname,
      password: hashedPwd,
      email,
      country,
      gender,
      nid,
      profesionalid,
      birthdate,
    });

    res
      .status(201)
      .json({ data: { medic: newMedic }, message: "medic created" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: error.message, error: "Error" });
  }
};

const loginMedic = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ error: "All fields are required" });
    }

    const medic = await Medic.findOne({
      where: {
        email: email,
      },
    });

    if (!medic) {
      return res.status(404).json({ error: "Medic not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, medic.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.status(201).json({ message: "Medic logged", medic });
  } catch (error) {
    console.error("Error creating medic:", error);
    res.status(500).json({ error: "Error" });
  }
};

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
      return res.status(400).json({ error: "All fields are required." });
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
      return res.status(404).json({ error: "Medic not found" });
    }

    res
      .status(201)
      .json({ data: { medic: updatedMedic }, message: "medic updated" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: error.message, error: "Error" });
  }
};

module.exports = {
  createMedic,
  loginMedic,
  editMedic,
};
