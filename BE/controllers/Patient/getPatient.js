const {Patient} = require('../../database/models')

// TODO: Cambiar con middleware de atenticación
const getPatient = async (req, res) => {
    try {
      const { email } = req.body;
  
      if(!email)
      {
        throw new Error('All fields are required')
      }
  
      const patient = await Patient.findOne({
        where: {
          email: email
        }
      });
      
      if (!patient) {
        throw new Error('Patient not found')
      }

      return res.status(201).json({ message: 'Patient data', patient })
  
    } catch (error) {

      return res.status(400).json({ error: 'Get Patient', message:error.message })
    }
  }

  module.exports = {getPatient}