const express = require("express");
const router = express.Router();

const {
  createPatient,
  editPatient,
  deletePatient,
  getPatient,
  changePasswordPatient
} = require("../controllers/Patient/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",createPatient);
router.put("/", verifyJWT,editPatient);
router.put("/changepwd", verifyJWT,changePasswordPatient);
router.delete("", verifyJWT,deletePatient);
router.get("", verifyJWT,getPatient);

module.exports = router;
