const { Invoice,Medic,Patient,Service } = require('../../database/models')
const createInvoice = async (req, res) => {
  try {

      /**
       * this controller only should be summoner on createURl payments
       * and just return the id of the new invoice created 
       * at the same controller that was summoner
       */

    const { medicId, patientId, serviceId, urlFile,platform } = req.body
    if (!medicId || !patientId || !serviceId || !urlFile || platform) {
      throw new Error('Body must contain medicId, patientId, serviceId, urlFile,plataform')
    }
 
      const newInvoice = await Invoice.create({
        medicId,
        patientId,
        serviceId,
        urlFile,
        status:'preAccepted',
        platform
      })

      const medicFound = await Medic.findByPk(medicId)
      const patientFound = await Patient.findByPk(patientId)
      const serviceFound = await Service.findByPk(patientId)

    return {service:serviceFound,invoiceId:newInvoice.id,medic:medicFound,patient:patientFound}
  } catch (error) {
    return res.status(400).json({ error: 'Create Invoice', message: error.message })
  }
}

module.exports = { createInvoice } 