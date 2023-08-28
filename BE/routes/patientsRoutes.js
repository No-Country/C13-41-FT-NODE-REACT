const express = require("express");
const router = express.Router();

const {
  createPatient,
  editPatient,
  deletePatient,
  getPatient
} = require("../controllers/Patient/index.js");

router.post("/",createPatient);
router.put("/",editPatient);
router.delete("/:email",deletePatient);
router.get("/",getPatient);

module.exports = router;
