const {SocialNetwork} = require('../../database/models')

const registerSocialNetwork = async (req, res) => {
    try {
  
      const { medicId, link } = req.body
      
      if (!medicId || !link ) {
        throw new Error('All fields are required.')
      }
  
      const newNetwork = await SocialNetwork.create({
        medicId,
        link
      });
  
      return res.status(201).json({ data: { SocialNetwork: newNetwork }, message: "Social Network Created" })
    } catch (error) {
      return res.status(400).json({ message: error.message, error: 'Register Social Network' })
    }   
  }


module.exports = { registerSocialNetwork }