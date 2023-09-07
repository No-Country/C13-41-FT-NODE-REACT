const { Consult } = require("../../database/models");

const editConsult = async (req, res) => {
  try {
    const { consultId } = req.body

    if(!consultId)
    {
      throw new Error("Must contain consultId")
    }

    const updatedConsult = await Consult.update(
        req.body,
      {
        where: {
          id: consultId,
        },
      }
    );

    if (updatedConsult == 0) {
      throw new Error("Consult not found")
    }

    const consult = await Consult.findByPk(consultId);

    return res
      .status(200)
      .json({ data: { consult }, message: "Consult Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Consult" });
  }
};

module.exports = {
  editConsult,
};