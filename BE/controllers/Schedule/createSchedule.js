const { Schedule } = require('../../database/models')
const { uuid } = require("uuidv4")
const createSchedule = async (req, res) => {
  try {
    const { day, initialHour, finalHour, type, status, duration, medicId } = req.body

    if (!day || !initialHour || !finalHour || !type || !status || !duration || !medicId) {
      throw new Error('Body must contain day, initialHour, finalHour, type, status, duration, medicId')
    }


    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    let idSchedule = uuid()

    if (type == 'daily') {
      await Schedule.create({
        id: idSchedule,
        day,
        initialHour,
        finalHour,
        type,
        status,
        duration,
        medicId
      })
    } else {
      for (let i = 0; i < weekDays.length; i++) {
        let weekId = idSchedule +'#'+ weekDays[i]
        await Schedule.create({
          id: weekId,
          day:weekDays[i],
          initialHour,
          finalHour,
          type,
          status,
          duration,
          medicId
        })
      }
    }

    return res.status(201).json({ message: 'Schedule created' })
  } catch (error) {
    return res.status(400).json({ error: 'Create Schedule', message: error.message })
  }
}

module.exports = { createSchedule } 