const express = require("express");
const router = express.Router();

const {
  addVacationDate,
  getVacationDate,
  editVacationDate,
  deleteVacationDate
} = require("../controllers/VacationDate/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("", verifyJWT,addVacationDate);
router.put("", verifyJWT,editVacationDate);
router.delete("", verifyJWT,deleteVacationDate);
router.get("", verifyJWT,getVacationDate);

module.exports = router;
