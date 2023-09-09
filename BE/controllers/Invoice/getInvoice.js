const { Invoice } = require("../../database/models");

const getInvoice = async (req, res) => {
  try {
    const {medicId, patientId} = req.query

    if (!medicId && !patientId) throw new Error("medicId or patientId is required")


    const InvoicesFound = medicId ? 
    await Invoice.findAll({where: { medicId: medicId}}) :
    await Invoice.findAll({where: { patientId: patientId}})
     
    return res.status(200).json({ message: 'Get Invoice', data:{InvoicesFound} });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Get Invoice" });
  }
};

module.exports = {
  getInvoice
};