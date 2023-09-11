const { Consult } = require("../../database/models");

const getConsult = async (req, res) => {
  try {
    const {
      consultId, medicId, patientId
    } = req.query;

    if (
      !consultId && !medicId && !patientId
    ) {
      throw new Error("Query must have consultId or medicId or patientId")
    }
    
    let consult =
      consultId
        ? await Consult.findByPk(consultId)
        : await Consult.findAll({ where: medicId ? medicId : patientId })



    return res
      .status(200)
      .json({ message: 'Consult data', data: { consult } });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Get Consult" });
  }
};

module.exports = {
  getConsult,
};