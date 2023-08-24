const express = require("express");
const router = express.Router();

const {
  createPatient,
  loginPatient,
  editPatient
} = require("../controllers/patientsController.js");

router.route("/patient").post(createPatient);
router.route("/patient/login").post(loginPatient);
router.route("/patient/edit").put(editPatient);

module.exports = router;
