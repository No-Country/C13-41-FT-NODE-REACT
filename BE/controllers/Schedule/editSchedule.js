const { Schedule } = require("../../database/models");

const editSchedule = async (req, res) => {
  try {
   

    return res
      .status(200)
      .json({ data:{Schedule}, message: "Schedule Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Schedule" });
  }
};

module.exports = {
  editSchedule
};