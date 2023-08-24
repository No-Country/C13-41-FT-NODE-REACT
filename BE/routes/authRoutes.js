const express = require('express')
const router = express.Router()

const {
  loginMedic
} = require('../controllers/Medic/index.js')
const {
  loginPatient
} = require('../controllers/Patient/index.js')



router.post('/medic',loginMedic)
router.post('/patient',loginPatient)


module.exports = router