const express = require('express')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const patientRoutes = require('./patientsRoutes')
const medicsRoutes = require('./medicsRoutes')
const consultsRoutes = require('./consultsRoutes')
const authRoutes = require('./authRoutes')
const specialtyRoutes = require('./specialtiesRoutes')
const filesRoutes = require('./filesRoutes')
const schedulesRoutes = require('./schedulesRoutes')

const router = express.Router()

router.use('/medic',medicsRoutes)
router.use('/schedule',schedulesRoutes)
router.use('/patient',patientRoutes)
router.use('/consult',consultsRoutes)
router.use('/auth',authRoutes)
router.use('/specialty',specialtyRoutes)
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/files',filesRoutes)

module.exports = router
