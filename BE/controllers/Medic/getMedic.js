const { Medic,Specialty, SocialNetwork, Comment, Consult, Invoice, Schedule, Service, VacationDate } = require('../../database/models')

const modelsToInclude = [
  { model: Specialty, as: 'specialties' },
  { model: SocialNetwork, as: 'socialnetworks' },
  { model: Comment, as: 'comments' },
  { model: Consult, as: 'consults' },
  { model: Invoice, as: 'invoices' },
  { model: Schedule, as: 'schedules' },
  { model: Service, as: 'services' },
  { model: VacationDate, as: 'vacationDate' }
];

const getMedic = async (req, res) => {
  try {
    const { email } = req.query;

    const medic = email
      ?
      (await Medic.findOne({
        where: {
          email: email
        },include: modelsToInclude
      }))
      : await Medic.findAll({include:modelsToInclude})


    return res.status(200).json({ message: 'Medic data', data: { medic } })

  } catch (error) {

    return res.status(400).json({ error: 'Get Medic', message: error.message })
  }
}

module.exports = { getMedic }