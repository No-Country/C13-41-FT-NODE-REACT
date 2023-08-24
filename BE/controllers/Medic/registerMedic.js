const bcrypt = require('bcrypt')
const {Medic} = require('../../database/models')


const createMedic = async (req, res) => {
    try {
  
      const { fullname, password, email, country, gender, birthdate, nid, profesionalid } = req.body
      
      if (!fullname || !password || !email || !country || !gender || !birthdate || !nid || !profesionalid) {
        throw new Error('All fields are required.')
      }
      const hashedPwd = await bcrypt.hash(password, 10)
  
      const newMedic = await Medic.create({
        fullname,
        password:hashedPwd,
        email,
        country,
        gender,
        nid,
        profesionalid,
        birthdate
      });
  
      return res.status(201).json({ data: { medic: newMedic }, message: "Medic Created" })
    } catch (error) {
      return res.status(400).json({ message: error.message, error: 'Register Medic' })
    }   
  }


module.exports = { createMedic}