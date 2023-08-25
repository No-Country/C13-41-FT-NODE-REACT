const {Medic} = require('../../database/models')

// TODO: Cambiar con middleware de atenticación
const getMedic = async (req, res) => {
    try {
      const { email } = req.body;
  
      if(!email)
      {
        throw new Error('All fields are required')
      }
  
      const medic = await Medic.findOne({
        where: {
          email: email
        }
      });
      
      if (!medic) {
        throw new Error('Medic not found')
      }

      return res.status(201).json({ message: 'Medic data', medic })
  
    } catch (error) {

      return res.status(400).json({ error: 'Get Medic', message:error.message })
    }
  }

  module.exports = {getMedic}