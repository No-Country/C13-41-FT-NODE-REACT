const {VacationDate} = require('../../database/models')

const addVacationDate = async (req, res) => {
    try {
  
      const { days,medicId } = req.body
  
      if (!days || !medicId) throw new Error('Body must contain days and medicId')
  
      const newVacationDate = await VacationDate.create({days,medicId})
  
      return res.status(201).json({ message: 'VacationDate created',data:{newVacationDate}})
    } catch (error) {
      return res.status(400).json({ error: 'Add Vacation Date', message:error.message })
    }   
  }

  module.exports ={ addVacationDate } 