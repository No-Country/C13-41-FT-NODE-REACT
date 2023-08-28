const bcrypt = require('bcrypt')
const {Medic} = require('../../database/models')


const loginMedic = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if(!email || !password)
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
  
      const isPasswordValid = await bcrypt.compare(password, medic.password)
  
      if (!isPasswordValid) {
         throw new Error('Invalid password')
      }
  
      return res.status(200).json({ message: 'Medic logged', medic })
  
    } catch (error) {
      return res.status(400).json({ error: 'Login medic', message: error.message })
    }   
  }

  module.exports ={loginMedic} 