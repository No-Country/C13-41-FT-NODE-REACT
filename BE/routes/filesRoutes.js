const express = require("express");
const router = express.Router();

const {
  uploadFilesMiddleware, 
  uploadFilesResponse
} = require("../controllers/Files/index.js");


router.post('/', uploadFilesMiddleware, uploadFilesResponse);


module.exports = router;