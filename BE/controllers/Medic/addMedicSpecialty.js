const { MedicSpecialty } = require('../../database/models')

// TODO: Cambiar con middleware de atenticación
const addMedicSpecialty = async (req, res) => {
  try {
    const { medicId,specialtyId } = req.body;

    if (!medicId || !specialtyId) {
        throw new Error('Must be contain email and specialtyId')
    }
    
    const medicSpecialty = await MedicSpecialty.create({medicId,specialtyId})

    return res.status(200).json({ message: 'Medic Specialty', data: { medicSpecialty } })

  } catch (error) {

    return res.status(400).json({ error: 'Add Specialty', message: error.message })
  }
}

module.exports = { addMedicSpecialty }