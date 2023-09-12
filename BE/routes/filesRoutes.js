const express = require("express");
const router = express.Router();

const {
  uploadFilesMiddleware, 
  uploadFilesResponse
} = require("../controllers/Files/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post('/', verifyJWT, uploadFilesMiddleware, uploadFilesResponse);


module.exports = router;