const express = require("express");
const router = express.Router();

const {
  registerSocialNetwork,
  editSocialNetwork,
  deleteSocialNetwork
} = require("../controllers/SocialNetwork/index.js");

const {verifyJWT} = require('../middlewares/jwt.js')

router.post("/", verifyJWT,registerSocialNetwork);
router.put("/", verifyJWT,editSocialNetwork);
router.delete("/", verifyJWT,deleteSocialNetwork);

module.exports = router;
