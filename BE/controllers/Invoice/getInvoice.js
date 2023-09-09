const { Invoice } = require("../../database/models");

const getInvoice = async (req, res) => {
  try {
    const {invoiceId} = req.query

    if (!invoiceId) {
      throw new Error('Query must contain invoiceId')
    }

    const InvoicesFound = await Invoice.findOne({where: { id: invoiceId}})
    
    return res.status(200).json({ message: 'Get Invoice', data:{InvoicesFound} });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Get Invoice" });
  }
};

module.exports = {
  getInvoice
};