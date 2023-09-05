const { Consult } = require("../../database/models");

// TODO: Cambiar con middleware de atenticación
const editConsult = async (req, res) => {
  try {
    const { id } = req.body

    if(!id)
    {
      throw new Error("Must contain id")
    }

    const updatedConsult = await Consult.update(
        req.body,
      {
        where: {
          id: id,
        },
      }
    );

    if (updatedConsult == 0) {
      throw new Error("Consult not found")
    }

    const consult = await Consult.findOne(
      {
        where: {
          id: id,
        },
      }
    );


    return res
      .status(200)
      .json({ data: { consult }, message: "consult updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Consult" });
  }
};

module.exports = {
  editConsult,
};