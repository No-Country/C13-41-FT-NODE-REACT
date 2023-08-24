const express = require("express");
const router = express.Router();

const {
  createMedic,
  loginMedic,
  editMedic
} = require("../controllers/Medic/index.js");

router.post("/",createMedic)
router.post("/login",loginMedic);
router.put("/",editMedic);

module.exports = router;
