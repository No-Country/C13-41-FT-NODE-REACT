const Stripe = require("stripe");
const {createInvoice} = require('../Invoice/index')
const {sendEmail} = require('../Email/sendEmail')
const {templateInvoice} = require('../../config/email')
const createSession = async (req, res) => {
  try {
    //First, Create the new Invoice with the status preaccepted

    const {invoiceId,patient,medic,service,error} = await createInvoice(req,res)
    if (error) {
      throw new Error(error.message)
    }

    //Afterward, send emails for the invoice creation to both patients and medic
    /* await sendEmail(res, patient.email, `New Invoice #${invoiceId}`, templateInvoice(invoiceId,'Created',patient.fullname))
    await sendEmail(res, medic.email, `New Invoice #${invoiceId}`, templateInvoice(invoiceId,'Created',medic.fullname)) */
    
    const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
    const session = await stripe.checkout.sessions.create({
      
      line_items: [
        {
          price_data: {
            product_data: {
              name: service.description,
            },
            currency: "usd",
            unit_amount: service.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NODE_ENV == "development" ? process.env.DEV_STRIPE_BE_PAGE_SUCCESS : process.env.PRO_STRIPE_BE_PAGE_SUCCESS}?invoiceId=${invoiceId}&patientEmail=${patient.email}&medicEmail=${medic.email}&patientFullname=${patient.fullname}&medicFullname=${medic.fullname}`,
      cancel_url: `${process.env.NODE_ENV == "development" ? process.env.DEV_STRIPE_BE_PAGE_CANCEL : process.env.PRO_STRIPE_BE_PAGE_CANCEL}?invoiceId=${invoiceId}&patientEmail=${patient.email}&medicEmail=${medic.email}&patientFullname=${patient.fullname}&medicFullname=${medic.fullname}`,
    });

    return res.status(200).json({ message: "Create Stripe ", data: session.url });
  } catch (error) {
    return res.status(400).json({ error: 'Create Stripe', message: error.message })
  }
}

module.exports = { createSession } 