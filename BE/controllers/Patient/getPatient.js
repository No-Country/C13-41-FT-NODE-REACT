const {Patient} = require('../../database/models')

// TODO: Cambiar con middleware de atenticación
const getPatient = async (req, res) => {
    try {
      const { email } = req.query;
  
      const patient = email
      ?
      (await Patient.findOne({
        where: {
          email: email
        }
      }))
      : await Patient.findAll()

      return res.status(200).json({ message: 'Patient data', data:{patient} })
  
    } catch (error) {

      return res.status(400).json({ error: 'Get Patient', message:error.message })
    }
  }

  module.exports = {getPatient}