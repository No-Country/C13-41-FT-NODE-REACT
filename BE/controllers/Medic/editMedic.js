
const { Medic } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const editMedic = async (req, res) => {
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

    const updatedMedic = await Medic.update(
        req.body,
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
  editMedic
};
