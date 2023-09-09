const express = require("express");
const router = express.Router();

const {
  createService,
  getService,
  editService,
  deleteService
} = require("../controllers/Service/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",verifyJWT,createService)
router.put("/",verifyJWT,editService)
router.get("/",verifyJWT,getService)
router.delete("/",verifyJWT,deleteService)


module.exports = router;
