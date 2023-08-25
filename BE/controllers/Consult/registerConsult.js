const {Consult} = require('../../database/models')

const createConsult = async (req, res) => {
    try {
  
      const { diagnostic, recipe, consultTimestamp, status, resume, urlFile } = req.body
      
      if (!diagnostic || !recipe || !consultTimestamp || !status || !resume || !urlFile ) {
        throw new Error('All fields are required.')
      }
  
      const newConsult = await Consult.create({
        diagnostic,
        recipe,
        consultTimestamp,
        status,
        resume,
        urlFile
      });
  
      return res.status(201).json({ data: { consult: newConsult }, message: "Consult Created" })
    } catch (error) {
      return res.status(400).json({ message: error.message, error: 'Register Consult' })
    }   
  }


module.exports = { createConsult}