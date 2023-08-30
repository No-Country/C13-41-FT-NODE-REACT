const express = require('express')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const patientRoutes = require('./patientsRoutes')
const medicsRoutes = require('./medicsRoutes')
const consultsRoutes = require('./consultsRoutes')
const authRoutes = require('./authRoutes')
const specialtyRoutes = require('./specialtiesRoutes')

const router = express.Router()

router.use('/medic',medicsRoutes)
router.use('/patient',patientRoutes)
router.use('/consult',consultsRoutes)
router.use('/auth',authRoutes)
router.use('/specialty',specialtyRoutes)
<<<<<<< HEAD
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
=======
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
>>>>>>> f5f3020 (feat: Add new route for API documentation)

module.exports = router
