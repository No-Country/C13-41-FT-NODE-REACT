const express = require("express");
const router = express.Router();

const {
  createComment,
  deleteComment,
  editComment,
  getComments
} = require("../controllers/Comment/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/", verifyJWT,createComment);
router.put("/", verifyJWT,editComment);
router.delete("", verifyJWT,deleteComment);
router.get("", verifyJWT,getComments);

module.exports = router;
