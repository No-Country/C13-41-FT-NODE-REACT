const express = require("express");
const router = express.Router();

const {
  createMedic,
  editMedic,
  deleteMedic,
  getMedic
} = require("../controllers/Medic/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",createMedic)
router.put("/",verifyJWT,editMedic);
router.delete("/:email",verifyJWT,deleteMedic);
router.get("/",verifyJWT,getMedic);

module.exports = router;
