const bcrypt = require("bcrypt");
const { Medic } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const changePasswordMedic = async (req, res) => {
  try {

    const { email, password } = req.body

    if(!email || !password)
    {
      throw new Error("Must contain email and password")
    }
      
    const hashedPwd = await bcrypt.hash(password, 10)

    const updatedMedic = await Medic.update(
        {
          password: hashedPwd
        },
      {
        where: {
          email,
        },
      }
    );

    if (updatedMedic == 0) {
      throw new Error("Medic not found")
    }

    const MedicFound = await Medic.findOne(
      {
        where: {
          email
        },
      }
    );

    return res
      .status(200)
      .json({ data:{MedicFound},message: "Medic Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Medic" });
  }
};

module.exports = {
  changePasswordMedic
};
