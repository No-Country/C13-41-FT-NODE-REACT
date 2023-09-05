const { Medic,Specialty } = require('../../database/models')

// TODO: Cambiar con middleware de atenticación
const getMedic = async (req, res) => {
  try {
    const { email } = req.query;

    const medic = email
      ?
      (await Medic.findOne({
        where: {
          email: email
        },include: {
          model: Specialty,
          as: 'specialties'}
      }))
      : await Medic.findAll({include: {
        model: Specialty,
        as: 'specialties'},})


    return res.status(200).json({ message: 'Medic data', data: { medic } })

  } catch (error) {

    return res.status(400).json({ error: 'Get Medic', message: error.message })
  }
}

module.exports = { getMedic }