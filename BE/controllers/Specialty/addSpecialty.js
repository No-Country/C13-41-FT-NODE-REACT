const {Specialty} = require('../../database/models')

const addSpecialty = async (req, res) => {
    try {
  
      const { name } = req.body
  
      if (!name) throw new Error('Specialty name is required.')
  
      const isDuplicated = await Specialty.findOne({
        where: {
          name: name
        }
      })
  
      if (isDuplicated) throw new Error('Specialty already exists.')
  
      const newSpecialty = await Specialty.create({ name: name });
  
      return res.status(201).json({ message: 'Specialty created', data: newSpecialty })
    } catch (error) {
      return res.status(400).json({ error: 'Register Specialty', message:error.message })
    }   
  }

  module.exports ={ addSpecialty } 