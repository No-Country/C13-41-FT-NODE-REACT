const express = require('express')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const patientRoutes = require('./patientsRoutes')
const medicsRoutes = require('./medicsRoutes')
const consultsRoutes = require('./consultsRoutes')
const authRoutes = require('./authRoutes')

const router = express.Router()

router.use('/medic',medicsRoutes)
router.use('/patient',patientRoutes)
router.use('/consult',consultsRoutes)
router.use('/auth',authRoutes)
router.use('/specialty',specialtyRoutes)
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = router
