const express = require("express");
const router = express.Router();

const {
  createPatient,
  editPatient
} = require("../controllers/Patient/index.js");

router.post("/",createPatient);
router.put("/",editPatient);

module.exports = router;
