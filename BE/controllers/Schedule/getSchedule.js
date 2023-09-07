const { Schedule} = require("../../database/models");

const getSchedule = async (req, res) => {
  try {
    const {medicId} = req.query
    if (!medicId) {
      throw new Error('Query must contain medicId')
    }

    const schedulesFound = await Schedule.findAll({where: { medicId }})
    
    return res.status(200).json({ message: 'Get Schedules', data:{schedulesFound} });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Get Schedules" });
  }
};

module.exports = {
  getSchedule
};