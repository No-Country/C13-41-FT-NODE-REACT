const express = require("express");
const router = express.Router();

const {
  createConsult,
  editConsult
} = require("../controllers/Consult/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",verifyJWT,createConsult)
router.put("/",verifyJWT,editConsult);

module.exports = router;
