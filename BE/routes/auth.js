const express = require('express')
const router = express.Router()

const 
{
  createPatient, createMedic
} = require('../controllers/auth/register.js')

const 
{
  loginPatient, loginMedic
} = require('../controllers/auth/login.js')


router.route('/patient').post(createPatient).get(loginPatient)
router.route('/medic').post(createMedic).get(loginMedic)

module.exports = router