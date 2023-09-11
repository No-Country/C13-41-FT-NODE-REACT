const express = require('express')
const router = express.Router()

const {
  getSchedule,
  createSchedule,
  editSchedule,
  deleteSchedule
} = require('../controllers/Schedule/index')
const { verifyJWT } = require('../middlewares/jwt')


router.put('',verifyJWT,editSchedule)
router.delete('',verifyJWT,deleteSchedule)
router.get('',verifyJWT,getSchedule)
router.post('',verifyJWT,createSchedule)


module.exports = router