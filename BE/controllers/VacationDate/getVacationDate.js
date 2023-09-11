const {VacationDate} = require('../../database/models')

const getVacationDate = async (req, res) => {
    try {
      
      const {vacationDateId,medicId} = req.query
      console.log(vacationDateId,medicId)
      if (!vacationDateId || !medicId) {
        throw new Error('Must contain vacationDateId or medicId')
      }
      
      const dateFound = vacationDateId ? await VacationDate.findByPk(vacationDateId): await VacationDate.findOne({where:{medicId}})

      return res.status(200).json({ message: 'VacationDate obtained',data:{dateFound}})
    } catch (error) {
      return res.status(400).json({ error: 'Add Vacation Date', message:error.message })
    }   
  }

  module.exports ={ getVacationDate } 