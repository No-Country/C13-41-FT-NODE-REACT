const unsuccessfulPurchase = async (req, res) => {
    try {
      
      return res.status(200).json({ message: 'Service Edited',data:{serviceFound}})
    } catch (error) {
      return res.status(400).json({ error: 'Edit Service', message:error.message })
    }   
  }

  module.exports ={ unsuccessfulPurchase } 