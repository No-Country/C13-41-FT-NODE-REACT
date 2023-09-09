const { Invoice } = require("../../database/models");

const editInvoice = async (req, res) => {
  try {

    const { invoiceId } = req.body

    if (!invoiceId) throw new Error("invoiceId is required")

    const updatedInvoice = await Invoice.update(
      req.body,
      {
        where: {
          id: invoiceId
        }
      }
    )

    if (updatedInvoice == 0) {
      throw new Error('Invoice not found')
    }

    const invoice = await Invoice.findByPk(invoiceId)


    return res
      .status(200)
      .json({ data: {invoice}, message: "Invoice Updated" });
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Edit Invoice" });
  }
};

module.exports = {
  editInvoice
};