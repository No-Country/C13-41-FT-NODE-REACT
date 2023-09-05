
const { Patient } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const editPatient = async (req, res) => {
  try {

    const { email, password } = req.body

    if(!email)
    {
      throw new Error("Must contain email")
    }
    
    if(password)
    {
      throw new Error("Not must contain password")
    }

    const updatedPatient = await Patient.update(
        req.body,
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
  editPatient
};
