const express = require("express");
const router = express.Router();

const {
  getInvoice,
  editInvoice,
  deleteInvoice
} = require("../controllers/Invoice/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.get("/",verifyJWT,getInvoice)
router.put("/",verifyJWT,editInvoice)
router.delete("/",verifyJWT,deleteInvoice) //facturas no se poueden eliminar, solo se cancelan

module.exports = router;
