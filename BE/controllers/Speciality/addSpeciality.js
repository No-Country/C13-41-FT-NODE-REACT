const {Speciality} = require('../../database/models')

const addSpeciality = async (req, res) => {
    try {
  
      const { name } = req.body
  
      if (!fullname) throw new Error('Speciality name is required.')
  
      const isDuplicated = await Speciality.findOne({
        where: {
          name: name
        }
      })
  
      if (isDuplicated) throw new Error('Speciality already exists.')
  
      const newSpeciality = await Speciality.create({ name: name });
  
      return res.status(201).json({ message: 'Speciality created', patient: newSpeciality })
    } catch (error) {
      return res.status(400).json({ error: 'Register Speciality', message:error.message })
    }   
  }

  module.exports ={ addSpeciality } 