const bcrypt = require("bcrypt");
const { Medic } = require("../../database/models");
const {sendEmail} = require('../Email/sendEmail')
const {faker} = require('@faker-js/faker')

// TODO: Cambiar con middleware de atenticación
const changePasswordMedic = async (req, res) => {
  try {

    const { email } = req.body

    if(!email)
    {
      throw new Error("Must contain email")
    }
    
    const password = faker.internet.password(
    {
      length: 10,
      memorable: true,
      pattern: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&_-])[A-Za-z\d@$!%?&_-]{8,}$/
    })

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

    const emailSubject = 'Password reset (Klinika Mecharcovz)'

    const emailBody = `<h1>Your new password is: ${password}</h1>,
    
    Best regards,
    Klinika Mercharcovz`;
    
    return sendEmail(res, email, emailSubject, emailBody, 'Email notification for password reset sent')

  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Medic" });
  }
};

module.exports = {
  changePasswordMedic
};
