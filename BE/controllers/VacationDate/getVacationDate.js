const {VacationDate} = require('../../database/models')

const getVacationDate = async (req, res) => {
    try {
      
      const {vacationDateId} = req.query
      if (!vacationDateId) {
        throw new Error('Must contain vacationDateId')
      }

      const dateFound = await VacationDate.findByPk(vacationDateId)

      return res.status(200).json({ message: 'VacationDate obtained',data:{dateFound}})
    } catch (error) {
      return res.status(400).json({ error: 'Add Vacation Date', message:error.message })
    }   
  }

  module.exports ={ getVacationDate } 