const { Invoice } = require('../../database/models')

const successfulPurchase = async (req, res) => {
  try {
    const {patientEmail,medicEmail,medicFullname,patientFullname,invoiceId} = req.query

    //First, Update the Invoice with the status accepted
    await Invoice.update({
      status:'accepted',
      where:{
        id:serviceId
      }}
    )

    //Afterward, send emails for the invoice creation to both patients and medic
    await sendEmail(res, medicEmail, `Invoice #${invoiceId} Update`, templateInvoice(invoiceId,'Accepted',medicFullname))
    await sendEmail(res, patientEmail, `Invoice #${invoiceId} Update`, templateInvoice(invoiceId,'Accepted',patientFullname))




    return res.redirect(`${process.env.NODE_ENV == "development" ? DEV_FE_PAGE_SUCCESS : PRO_FE_PAGE_SUCCESS}`);
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Success Stripe" });
  }
};

module.exports = {
  successfulPurchase
};