const bcrypt = require("bcrypt");
const { Patient } = require("../../database/models");
const {sendEmail} = require('../Email/sendEmail')
const generatePassword = require('../../helpers/passwordGenerator')

// TODO: Cambiar con middleware de atenticación
const changePasswordPatient = async (req, res) => {
  try {

    const { email } = req.body

    if(!email)
    {
      throw new Error("Must contain email")
    }
      
    const password = generatePassword()
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
    
    const emailSubject = 'Password reset (Klinika Mecharcovz)'

    const emailBody = `<h1>Your new password is: ${password}</h1>,
    
    Best regards,
    Klinika Mercharcovz`;
    
    return sendEmail(res, email, emailSubject, emailBody, 'Email notification for password reset sent')

  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Patient" });
  }
};

module.exports = {
  changePasswordPatient
};
