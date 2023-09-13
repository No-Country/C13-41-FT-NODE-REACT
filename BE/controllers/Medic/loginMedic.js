const bcrypt = require('bcrypt')
const {Medic,Comment,Consult,Invoice,Schedule,VacationDate,Specialty,SocialNetwork,Service} = require('../../database/models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

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
        },include: [
          {
            model: SocialNetwork,
            as: 'socialnetworks'
          },            
          {
            model: Specialty,
            as: 'specialties'
          },
          {
            model: Schedule,
            as: 'schedules'
          },
        ]
      });
      
      if (!medic) {
        throw new Error('Medic not found')
      }
  
      const isPasswordValid = await bcrypt.compare(password, medic.password)
  
      if (!isPasswordValid) {
         throw new Error('Invalid password')
      }

      const token = jwt.sign({medic},process.env.JWT_SECRET,{expiresIn:'5h'})

      return res.status(200).json({ message: 'Medic logged', data:{token}})
  
    } catch (error) {
      return res.status(400).json({ error: 'Login medic', message: error.message })
    }   
  }

  module.exports ={loginMedic} 