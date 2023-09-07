const {Service} = require('../../database/models')

const getService = async (req, res) => {
    try {
      
      const {serviceId} = req.query
      if (!serviceId) {
        throw new Error('Must contain ServiceId')
      }

      const dateFound = await Service.findByPk(serviceId)

      return res.status(200).json({ message: 'Service obtained',data:{dateFound}})
    } catch (error) {
      return res.status(400).json({ error: 'Add Service', message:error.message })
    }   
  }

  module.exports ={ getService } 