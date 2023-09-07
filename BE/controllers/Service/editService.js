const {Service} = require('../../database/models')

const editService = async (req, res) => {
    try {
  
      const { serviceId, description, price } = req.body
  
      if (!serviceId || !description && !price) throw new Error('Query must contain serviceId')

      let updateData = {};

      if (description) {
        updateData.description = description;
      }

      if (price) {
        updateData.price = price;
      }

      const updateService = await Service.update(
        updateData,
      {
        where: {
          id:serviceId,
        },
      }
    );

    if (updateService == 0) {
      throw new Error("Service not found")
    }

    const serviceFound = await Service.findOne(
      {
        where: {
          id:serviceId
        },
      }
    );
    
      return res.status(200).json({ message: 'Service Edited',data:{serviceFound}})
    } catch (error) {
      return res.status(400).json({ error: 'Edit Service', message:error.message })
    }   
  }

  module.exports ={ editService } 