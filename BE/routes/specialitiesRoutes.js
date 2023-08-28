const express = require("express");
const router = express.Router();

const {
  addSpeciality,
  deleteSpeciality,
  editSpeciality,
  getSpecialities
} = require("../controllers/Speciality/index.js");

router.get("/",getSpecialities);
router.post("/",addSpeciality);
router.put("/",editSpeciality);
router.delete("/",deleteSpeciality);

module.exports = router;