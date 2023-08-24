const express = require("express");
const router = express.Router();

const {
  createMedic,
  loginMedic,
  editMedic
} = require("../controllers/medicsController.js");

router.route("/medic").post(createMedic)
router.route("/medic/login").post(loginMedic);
router.route("/medic/edit").put(editMedic);

module.exports = router;
