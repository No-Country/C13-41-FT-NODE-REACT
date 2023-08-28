const express = require("express");
const router = express.Router();

const {
  createPatient,
  editPatient
} = require("../controllers/Patient/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",createPatient);
router.put("/",verifyJWT,editPatient);

module.exports = router;
