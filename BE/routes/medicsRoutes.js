const express = require("express");
const router = express.Router();

const {
  createMedic,
  editMedic
} = require("../controllers/Medic/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",createMedic)
router.put("/",verifyJWT,editMedic);

module.exports = router;
