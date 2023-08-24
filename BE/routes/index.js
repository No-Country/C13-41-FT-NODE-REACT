const express = require('express')
const patientRoutes = require('./patientsRoutes')
const medicsRoutes = require('./medicsRoutes')

const router = express.Router()

router.use('/medic',medicsRoutes)
router.use('/patient',patientRoutes)

module.exports = router
