const bcrypt = require('bcrypt')
const {Patient} = require('../../database/models')
const {Medic} = require('../../database/models')


const createPatient = async (req, res) => {
  try {

    const { fullname, password, email, country, gender, birthdate, nid } = req.body

    if (!fullname || !password || !email || !country || !gender || !birthdate || !nid) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    const hashedPwd = await bcrypt.hash(password, 10)

    const isDuplicated = await Patient.findOne({
      where: {
        email: email
      }
    })

    if (isDuplicated) {
      return res.status(400).json({ error: 'Patient duplicated' })
    }

    const newPatient = await Patient.create({
      fullname,
      password:hashedPwd,
      email,
      country,
      nid,
      gender,
      birthdate
    });


    res.status(201).json({ message: 'Patient created', patient: newPatient })
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error' })
  }   
}

const createMedic = async (req, res) => {
  try {

    const { fullname, password, email, country, gender, birthdate, nid, profesionalid } = req.body
    
    if (!fullname || !password || !email || !country || !gender || !birthdate || !nid || !profesionalid) {
      return res.status(400).json({ error: 'All fields are required.' })
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

    res.status(201).json({ data: { medic: newMedic }, message: "medic created" })
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: error.message, error: 'Error' })
  }   
}

module.exports = {
  createPatient,
  createMedic
}