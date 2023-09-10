const { Invoice } = require('../../database/models')
const createInvoice = async (req, res) => {
  try {
    const { medicId, patientId, serviceId, urlFile } = req.body

    if (!medicId || !patientId || !serviceId || !urlFile) {
      throw new Error('Body must contain medicId, patientId, serviceId, urlFile')
    }
 
      const newInvoice = await Invoice.create({
        medicId,
        patientId,
        serviceId,
        urlFile
      })

    return res.status(201).json({ message: 'Invoice created',data:{newInvoice} })
  } catch (error) {
    return res.status(400).json({ error: 'Create Invoice', message: error.message })
  }
}

module.exports = { createInvoice } 