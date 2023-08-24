const {Medic} = require('../../database/models') 
const {Patient} = require('../../database/models') 

const bcrypt = require('bcrypt')

const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password)
    {
      return res.status(404).json( { error: 'All fields are required'} )
    }

    const patient = await Patient.findOne({
      where: {
        email: email
      }
    });
    
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, patient.password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' })
    }
    res.status(201).json({ message: 'Patient logged', patient })

  } catch (error) {
    console.error('Error creating patient:', error)
    res.status(500).json({ error: 'Error' })
  }
}

const loginMedic = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password)
    {
      return res.status(404).json( { error: 'All fields are required'} )
    }

    const medic = await Medic.findOne({
      where: {
        email: email
      }
    });
    
    if (!medic) {
      return res.status(404).json({ error: 'Medic not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, medic.password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' })
    }

    res.status(201).json({ message: 'Medic logged', medic })

  } catch (error) {
    console.error('Error creating medic:', error)
    res.status(500).json({ error: 'Error' })
  }   
}

module.exports = {
  loginPatient,
  loginMedic
}