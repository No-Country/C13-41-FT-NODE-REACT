const Stripe = require("stripe");
const {createInvoice} = require('../Invoice/index')
const {sendEmail} = require('../Email/sendEmail')
const {templateInvoice} = require('../../config/email')
const createSession = async (req, res) => {
  try {
    //First, Create the new Invoice with the status preaccepted
    const {invoiceId,patient,medic,service} = await createInvoice(req,res)
    
    //Afterward, send emails for the invoice creation to both patients and medic
    await sendEmail(res, patient.email, `New Invoice #${invoiceId}`, templateInvoice(invoiceId,'Created',patient.fullname))
    await sendEmail(res, medic.email, `New Invoice #${invoiceId}`, templateInvoice(invoiceId,'Created',medic.fullname))

    const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
    const session = await stripe.checkout.sessions.create({
      customer:patient.email,
      line_items: [
        {
          price_data: {
            product_data: {
              name: 'Appointment',
              metadata:{
                description: service.description,
                invoiceId:invoiceId
              }
            },
            currency: "usd",
            unit_amount: service.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NODE_ENV == "development" ? DEV_BE_PAGE_SUCCESS : PRO_BE_PAGE_SUCCESS}?invoiceId=${invoiceId}&patientEmail=${patient.email}&medicEmail=${medic.email}&patientFullname=${patient.fullname}&medicFullname=${medic.fullname}`,
      cancel_url: `${process.env.NODE_ENV == "development" ? DEV_BE_PAGE_CANCEL : PRO_BE_PAGE_CANCEL}?invoiceId=${invoiceId}&patientEmail=${patient.email}&medicEmail=${medic.email}&patientFullname=${patient.fullname}&medicFullname=${medic.fullname}`,
    });

    return res.status(200).json({ message: "Create Stripe ", data: session.url });
  } catch (error) {
    return res.status(400).json({ error: 'Create Stripe', message: error.message })
  }
}

module.exports = { createSession } 