const {Patient} = require('../../database/models')
const crypto = require('node:crypto');
const bcrypt = require('bcrypt')

const createPatient = async (req, res) => {
    try {
  
      const { fullname, password, email, country, gender, birthdate, nid } = req.body
  
      if (!fullname || !password || !email || !country || !gender || !birthdate || !nid) {
        throw new Error('All fields are required.')
      }
  
      const hashedPwd = await bcrypt.hash(password, 10)
  
      const isDuplicated = await Patient.findOne({
        where: {
          email: email
        }
      })
  
      if (isDuplicated) {
       throw new Error('Patient duplicated')
      }
  
      const newPatient = await Patient.create({
        id: crypto.randomUUID(),
        fullname,
        password:hashedPwd,
        email,
        country,
        nid,
        gender,
        birthdate
      });
  
  
      return res.status(201).json({ message: 'Patient created', patient: newPatient })
    } catch (error) {
      return res.status(400).json({ error: 'Register Patient', message:error.message })
    }   
  }

  module.exports ={ createPatient } 