const { Schedule } = require("../../database/models");

const deleteSchedule = async (req, res) => {
  try {
   
    return res
      .status(200)
      .json({ message: "Schedule Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Schedule" });
  }
};

module.exports = {
  deleteSchedule
};