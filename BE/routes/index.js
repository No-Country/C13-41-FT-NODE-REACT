const express = require('express')

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const path = require('path'); 
const swaggerYaml = path.resolve(__dirname, '../','swagger.yaml');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0', 
    info: {
      title: 'Klinika API',
      version: '1.0.0',
    },
  },
  apis: [swaggerYaml], 
};

const swaggerSpec = swaggerJsdoc(options);

const patientRoutes = require('./patientsRoutes')
const medicsRoutes = require('./medicsRoutes')
const consultsRoutes = require('./consultsRoutes')
const authRoutes = require('./authRoutes')
const specialtyRoutes = require('./specialtiesRoutes')
const filesRoutes = require('./filesRoutes')
const schedulesRoutes = require('./schedulesRoutes')
const commentsRoutes = require('./commentsRoutes')
const socialNetworksRoutes = require('./socialNetworksRoutes')
const vacationDatesRoutes = require('./vacationDatesRoutes')
const servicesRoutes = require('./servicesRoutes')
const stripeRoutes = require('./stripeRoutes')
const invoicesRoutes = require('./invoicesRoutes')

const router = express.Router()

router.use('/medic',medicsRoutes)
router.use('/schedule',schedulesRoutes)
router.use('/patient',patientRoutes)
router.use('/consult',consultsRoutes)
router.use('/auth',authRoutes)
router.use('/specialty',specialtyRoutes)
router.use('/files',filesRoutes)
router.use('/comment',commentsRoutes)
router.use('/socialnetwork',socialNetworksRoutes)
router.use('/vacationdate',vacationDatesRoutes)
router.use('/service',servicesRoutes)
router.use('/payment/stripe',stripeRoutes)
router.use('/invoice',invoicesRoutes)
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router
