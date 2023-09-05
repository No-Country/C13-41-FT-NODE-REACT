const bcrypt = require("bcrypt");
const { Patient } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const changePasswordPatient = async (req, res) => {
  try {

    const { email, password } = req.body

    if(!email || !password)
    {
      throw new Error("Must contain email and password")
    }
      
    const hashedPwd = await bcrypt.hash(password, 10)

    const updatedPatient = await Patient.update(
        {
          password: hashedPwd
        },
      {
        where: {
          email,
        },
      }
    );

    if (updatedPatient == 0) {
      throw new Error("Patient not found")
    }

    const patient = await Patient.findOne(
      {
        where: {
          email
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
  changePasswordPatient
};
