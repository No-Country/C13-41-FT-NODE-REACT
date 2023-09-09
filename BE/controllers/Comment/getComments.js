const { Comment, Patient } = require("../../database/models");

const getComments = async (req, res) => {
  try {

    const { type, id } = req.query

    if(!type || !id)
    {
      throw new Error("Must contain type/id")
    }

    const typeFieldMapping = {
      patient: 'patientId',
      medic: 'medicId',
    };
    
    if (!(type in typeFieldMapping)) {
      throw new Error(`Invalid type: ${type}`);
    }
    
    const field = typeFieldMapping[type];

    const comments = await Comment.findAll({
      where: {
        [field]: id  
      }, include: Patient
    });
    delete comments[0].dataValues.Patient.dataValues.password

    return res
      .status(200)
      .json({ data:{comments}});
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Get Comments" });
  }
};

module.exports = {
  getComments
};