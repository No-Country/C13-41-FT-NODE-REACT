const {Service} = require('../../database/models')

const getService = async (req, res) => {
    try {
      
      const {serviceId,medicId,patientId} = req.query
      if (!serviceId && !medicId && !patientId) {
        throw new Error('Must contain ServiceId')
      }


      const serviceFound =
      medicId
        ? await Service.findAll({ where: { medicId } })
        : patientId
        ? await Service.findAll({ where: { patientId } })
        : await Service.findByPk(serviceId)

      return res.status(200).json({ message: 'Service obtained',data:{serviceFound}})
    } catch (error) {
      return res.status(400).json({ error: 'Get Service', message:error.message })
    }   
  }

  module.exports ={ getService } 