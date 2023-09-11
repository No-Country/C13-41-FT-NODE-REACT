const cancelPurchase = async (req, res) => {
    try {
      
      const {patientEmail,medicEmail,medicFullname,patientFullname,invoiceId} = req.query

      //First, Update the Invoice with the status accepted
      await Invoice.update({
        status:'canceled',
        where:{
          id:serviceId
        }}
      )
  
      //Afterward, send emails for the invoice creation to both patients and medic
      await sendEmail(res, medicEmail, `Invoice #${invoiceId} Update`, templateInvoice(invoiceId,'Canceled',medicFullname))
      await sendEmail(res, patientEmail, `Invoice #${invoiceId} Update`, templateInvoice(invoiceId,'Canceled',patientFullname))

    return res.redirect(`${process.env.NODE_ENV == "development" ? DEV_FE_PAGE_CANCEL : PRO_FE_PAGE_CANCEL}`);
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Cancel Stripe" });
  }  
  }

  module.exports ={ cancelPurchase } 