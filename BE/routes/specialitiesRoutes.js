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
router.delete("/:id",deleteSpeciality);

module.exports = router;