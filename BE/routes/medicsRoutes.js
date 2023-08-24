const express = require("express");
const router = express.Router();

const {
  createMedic,
  editMedic
} = require("../controllers/Medic/index.js");


router.post("/",createMedic)
router.put("/",editMedic);

module.exports = router;
