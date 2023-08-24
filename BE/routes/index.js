const express = require('express')
const patientRoutes = require('./patientsRoutes')
const medicsRoutes = require('./medicsRoutes')
const authRoutes = require('./authRoutes')

const router = express.Router()

router.use('/medic',medicsRoutes)
router.use('/patient',patientRoutes)
router.use('/auth',authRoutes)

module.exports = router
