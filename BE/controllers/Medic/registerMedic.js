const bcrypt = require('bcrypt')
const {Medic} = require('../../database/models')
const {sendEmail} = require('../Email/sendEmail')
const {templateMedicRegister} = require('../../config/email')

const createMedic = async (req, res) => {
    try {
  
      const { fullname, password, email, country, gender, birthdate, nid, profesionalid, phone } = req.body
      
      if (!fullname || !password || !email || !country || !gender || !birthdate || !nid || !profesionalid || !phone) {
        throw new Error('All fields are required.')
      }

      const isDuplicated = await Medic.findOne({
        where: {
          email: email
        }
      })

      if (isDuplicated) {
        throw new Error('Medic duplicated')
       }

      const hashedPwd = await bcrypt.hash(password, 10)
  
      await Medic.create({
        fullname,
        password:hashedPwd,
        email,
        country,
        gender,
        nid,
        profesionalid,
        birthdate,
        phone
      });
      
      await sendEmail(res, email, 'Welcome to Klinika Merchacovz', templateMedicRegister(fullname))

      return res.status(201).send({message:'Email confirmation for registration sent'})

    } catch (error) {
      return res.status(400).json({ message: error.message, error: 'Register Medic' })
    }   
  }


module.exports = { createMedic }