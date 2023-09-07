const { Schedule } = require('../../database/models')
const createSchedule = async (req, res) => {
  try {
    const { day, initialHour, finalHour, status, duration, medicId } = req.body

    if (!day || !initialHour || !finalHour || !status || !duration || !medicId) {
      throw new Error('Body must contain day, initialHour, finalHour, type, status, duration, medicId')
    }

      const newSchedule = await Schedule.create({
        day,
        initialHour,
        finalHour,
        status,
        duration,
        medicId
      })

    return res.status(201).json({ message: 'Schedule created',data:{newSchedule} })
  } catch (error) {
    return res.status(400).json({ error: 'Create Schedule', message: error.message })
  }
}

module.exports = { createSchedule } 