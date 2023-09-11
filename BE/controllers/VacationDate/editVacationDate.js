const {VacationDate} = require('../../database/models')

const editVacationDate = async (req, res) => {
    try {
  
      const { vacactionDateId,days} = req.body
  
      if (!vacactionDateId || !days) throw new Error('Query must contain vacactionDateId and days')

      const updateDate = await VacationDate.update(
        days,
      {
        where: {
          id:vacactionDateId,
        },
      }
    );

    if (updateDate == 0) {
      throw new Error("VacationDate not found")
    }

    const vacationDate = await VacationDate.findByPk(vacactionDateId)
    
      return res.status(200).json({ message: 'VacationDate Edited',data:{vacationDate}})
    } catch (error) {
      return res.status(400).json({ error: 'Add Vacation Date', message:error.message })
    }   
  }

  module.exports ={ editVacationDate } 