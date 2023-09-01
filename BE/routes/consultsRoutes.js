const express = require("express");
const router = express.Router();

const {
  createConsult,
  editConsult,
  deleteConsult,
  getConsult
} = require("../controllers/Consult/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",verifyJWT,createConsult)
router.put("/",verifyJWT,editConsult);
router.delete("",verifyJWT,deleteConsult);
router.get("",verifyJWT,getConsult);

module.exports = router;
