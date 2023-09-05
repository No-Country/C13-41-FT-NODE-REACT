const {Comment} = require('../../database/models')

const createComment = async (req, res) => {
    try {
  
      const { description, patientId, medicId } = req.body
      
      if (!description || !patientId || !medicId) {
        throw new Error('All fields are required.')
      }
  
      const newComment = await Comment.create({
        description,
        patientId,
        medicId
      });
  
      return res.status(201).json({ data: { comment: newComment }, message: "Comment Created" })
    } catch (error) {
      return res.status(400).json({ message: error.message, error: 'Create Comment' })
    }   
  }


module.exports = { createComment}