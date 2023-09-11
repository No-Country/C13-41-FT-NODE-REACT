const {Patient} = require('../../database/models')
const {sendEmail} = require('../Email/sendEmail')
const bcrypt = require('bcrypt')
const {templatePatientRegister} = require('../../config/email')

const createPatient = async (req, res) => {
    try {
  
      const { fullname, password, email, country, gender, birthdate, nid, phone } = req.body
  
      if (!fullname || !password || !email || !country || !gender || !birthdate || !nid || !phone) {
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
  
      await Patient.create({
        fullname,
        password:hashedPwd,
        email,
        country,
        nid,
        gender,
        birthdate,
        phone
      });

      await sendEmail(res, email, 'Welcome to Klinika Merchacovz', templatePatientRegister(fullname))
      return res.status(201).send({message:'Email confirmation for registration sent'})

    } catch (error) {
      return res.status(400).json({ error: 'Register Patient', message:error.message })
    }   
  }

  module.exports ={ createPatient } 