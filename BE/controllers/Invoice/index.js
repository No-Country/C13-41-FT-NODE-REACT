const { createInvoice } = require("./createInvoice");
const { getInvoice } = require("./getInvoice");
const { editInvoice } = require("./editInvoice");
const { deleteInvoice } = require("./deleteInvoice");

module.exports = {
  createInvoice,
  getInvoice,
  editInvoice,
  deleteInvoice
};
