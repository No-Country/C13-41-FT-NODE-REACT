const { Invoice } = require("../../database/models");

const deleteInvoice = async (req, res) => {
  try {

    const { invoiceId } = req.query

    await Invoice.destroy({ where: { id: invoiceId } })

    return res
      .status(200)
      .json({ message: "Invoice Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Delete Invoice" });
  }
};

module.exports = {
  deleteInvoice
};