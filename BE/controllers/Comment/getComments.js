const { Comment } = require("../../database/models");

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
      }
    });

    if (!comments.length) {
      throw new Error("Comments not found")
    }

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