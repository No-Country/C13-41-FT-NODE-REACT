const {VacationDate} = require('../../database/models')

const deleteVacationDate = async (req, res) => {
    try {
      const { vacactionDateId} = req.query
  
      if (!vacactionDateId) throw new Error('Query must contain vacactionDateId.')
  
       await VacationDate.destroy({where:{id:vacactionDateId}})
  
      return res.status(200).json({ message: 'VacationDate deleted'})
    } catch (error) {
      return res.status(400).json({ error: 'Delete Vacation Date', message:error.message })
    }   
  }

  module.exports ={ deleteVacationDate } 