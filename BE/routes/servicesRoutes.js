const express = require("express");
const router = express.Router();

const {
  createService,
  getService,
  editService,
  deleteService
} = require("../controllers/Service/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/",createService)
router.put("/",editService)
router.get("/",getService)
router.delete("/",deleteService)


module.exports = router;
