const express = require("express");
const router = express.Router();

const {
  addSpecialty,
  deleteSpecialty,
  editSpecialty,
  getSpecialties
} = require("../controllers/Specialty/index.js");

router.get("/",getSpecialties);
router.post("/",addSpecialty);
router.put("/",editSpecialty);
router.delete("/:id",deleteSpecialty);

module.exports = router;