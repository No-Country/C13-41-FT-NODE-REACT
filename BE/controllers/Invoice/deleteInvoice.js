const { Invoice } = require("../../database/models");

const deleteInvoice = async (req, res) => {
  try {

    const { invoiceId } = req.query

    await Invoice.update(
      {status: 'cancelled'},
      {
        where: {
          id: invoiceId
        }
      }
    )
 
    return res
      .status(200)
      .json({ message: "Invoice Cancelled" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Cancel Invoice" });
  }
};

module.exports = {
  deleteInvoice
};
