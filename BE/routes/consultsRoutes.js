const express = require("express");
const router = express.Router();

const {
  createConsult,
  editConsult,
  deleteConsult,
  getConsult
} = require("../controllers/Consult/index.js");


router.post("/",createConsult)
router.put("/",editConsult);
router.delete("/",deleteConsult);
router.get("/",getConsult);

module.exports = router;
