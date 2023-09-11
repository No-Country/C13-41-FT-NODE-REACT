const express = require("express");
const router = express.Router();

const {
  createInvoice,
  getInvoice,
  editInvoice,
  deleteInvoice
} = require("../controllers/Invoice/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",verifyJWT,createInvoice)
router.get("/",verifyJWT,getInvoice)
router.put("/",verifyJWT,editInvoice)
router.delete("/",verifyJWT,deleteInvoice)

module.exports = router;
