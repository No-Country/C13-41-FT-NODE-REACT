const { Invoice,Medic,Patient,Service } = require('../../database/models')
const createInvoice = async (req, res) => {
  try {

      /**
       * this controller only should be summoner on createURl payments
       * and just return the id of the new invoice created 
       * at the same controller that was summoner
       */

    const { medicId, patientId, serviceId, platform } = req.body

    if (!medicId || !patientId || !serviceId || !platform) {
      throw new Error('Body must contain medicId, patientId, serviceId,platform')
    }

      const newInvoice = await Invoice.create({
        medicId,
        patientId,
        serviceId,
        status:'preAccepted',
        platform
      })
  
      const medicFound = await Medic.findByPk(medicId)
      const patientFound = await Patient.findByPk(patientId)
      const serviceFound = await Service.findByPk(serviceId)

    return {service:serviceFound,invoiceId:newInvoice.id,medic:medicFound,patient:patientFound}
  } catch (error) {
    return {error}
  }
}

module.exports = { createInvoice } 