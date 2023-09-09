const { Service } = require("../../database/models");

const deleteService = async (req, res) => {
  try {
    const id = req.query.serviceId;

    if (!id) throw new Error("serviceId is required")

    await Service.destroy({
      where: {
        id: id
      }
    });

    return res
      .status(200)
      .json({ message: "Service Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Service" });
  }
};

module.exports = {
  deleteService
};