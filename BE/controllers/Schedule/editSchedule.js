const { Schedule } = require("../../database/models");

const editSchedule = async (req, res) => {
  try {

    const { scheduleId } = req.query

    const updatedSchedule = await Schedule.update(
      req.body,
      {
        where: {
          id: scheduleId
        }
      }
    )

    if (updatedSchedule == 0) {
      throw new Error('Schedule not found')
    }

    const schedule = await Schedule.findByPk(scheduleId)


    return res
      .status(200)
      .json({ data: {schedule}, message: "Schedule Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Schedule" });
  }
};

module.exports = {
  editSchedule
};