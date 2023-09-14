const { Patient, Comment, Consult, Invoice } = require('../../database/models')

const modelsToInclude = [
  { model: Comment, as: 'comments' },
  { model: Consult, as: 'consults' },
  { model: Invoice, as: 'invoices' }
];

const getPatient = async (req, res) => {
    try {
      const { email } = req.query;
  
      const patient = email
      ?
      (await Patient.findOne({
        where: {
          email: email
        },include: modelsToInclude
      }))
      : await Patient.findAll({include:modelsToInclude})

      return res.status(200).json({ message: 'Patient data', data:{patient} })
  
    } catch (error) {

      return res.status(400).json({ error: 'Get Patient', message:error.message })
    }
  }

  module.exports = {getPatient}