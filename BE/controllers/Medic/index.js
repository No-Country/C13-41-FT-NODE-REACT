const { editMedic } = require("./editMedic");
const { loginMedic } = require("./loginMedic");
const { createMedic } = require("./registerMedic");
const { deleteMedic } = require("./deleteMedic");
const { getMedic } = require("./getMedic");
const { changePasswordMedic } = require("./changePasswordMedic");

module.exports = {
  editMedic,
  loginMedic,
  createMedic,
  deleteMedic,
  getMedic,
  changePasswordMedic
};
