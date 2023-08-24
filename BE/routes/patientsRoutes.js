const express = require("express");
const router = express.Router();

const {
  createPatient,
  loginPatient,
  editPatient
} = require("../controllers/Patient/index.js");

router.post("/",createPatient);
router.post("/login",loginPatient);
router.put("/",editPatient);

module.exports = router;
