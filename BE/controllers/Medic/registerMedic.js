const bcrypt = require('bcrypt')
const {Medic} = require('../../database/models')
const {sendEmail} = require('../Email/sendEmail')


const createMedic = async (req, res) => {
    try {
  
      const { fullname, password, email, country, gender, birthdate, nid, profesionalid } = req.body
      
      if (!fullname || !password || !email || !country || !gender || !birthdate || !nid || !profesionalid) {
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
        birthdate
      });

      const emailSubject = 'Welcome to Klinika Merchacovz'

      const emailBody = `<h1>Hello ${fullname}</h1>,
      <h2>Thank you for registering on our platform. We are excited to have you as a Medic!</h2>
      
      Best regards,
      Klinika Mercharcovz`;
      
      return sendEmail(res, email, emailSubject, emailBody, 'Email confirmation for registration sent')

    } catch (error) {
      return res.status(400).json({ message: error.message, error: 'Register Medic' })
    }   
  }


module.exports = { createMedic }