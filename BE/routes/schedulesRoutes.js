const express = require('express')
const router = express.Router()

const {
  getSchedule,
  createSchedule
} = require('../controllers/Schedule/index')
const { verifyJWT } = require('../middlewares/jwt')



router.get('',verifyJWT,getSchedule)
router.post('',verifyJWT,createSchedule)


module.exports = router