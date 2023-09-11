const express = require('express')
const router = express.Router()

const { createSession,successfulPurchase,cancelPurchase} = require('../controllers/Stripe/index')
const {verifyJWT} = require('../middlewares/jwt')

router.post('/create',verifyJWT,createSession)
router.get('/success',successfulPurchase,)
router.get('/cancel',cancelPurchase)


module.exports = router