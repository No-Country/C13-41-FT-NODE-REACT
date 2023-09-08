const { Service } = require('../../database/models')
const createService = async (req, res) => {
  try {
    const { description, price, specialtyId, medicId } = req.body

    if (!description || !price || !specialtyId || !medicId) {
      throw new Error('Body must contain description, price, medicId and specialtyId')
    }

      const newService = await Service.create({
        description,
        price,
        specialtyId,
        medicId
      })

    return res.status(201).json({ message: 'Service created',data:{newService} })
  } catch (error) {
    return res.status(400).json({ error: 'Create Service', message: error.message })
  }
}

module.exports = { createService } 