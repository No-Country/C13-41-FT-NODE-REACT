const express = require("express");
const router = express.Router();

const {
  createConsult,
  editConsult
} = require("../controllers/Consult/index.js");


router.post("/",createConsult)
router.put("/",editConsult);

module.exports = router;
