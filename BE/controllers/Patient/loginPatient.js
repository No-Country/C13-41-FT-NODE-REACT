const {Patient} = require('../../database/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const loginPatient = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if(!email || !password)
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
      const isPasswordValid = await bcrypt.compare(password, patient.password)
  
      if (!isPasswordValid) {
        throw new Error('Invalid password')
      }
      const token = jwt.sign({patient},process.env.JWT_SECRET,{expiresIn:'5h'})
      return res.status(200).json({ message: 'Patient logged', data:{token} })
  
    } catch (error) {

      return res.status(400).json({ error: 'Login Patient', message:error.message })
    }
  }

  module.exports = {loginPatient}