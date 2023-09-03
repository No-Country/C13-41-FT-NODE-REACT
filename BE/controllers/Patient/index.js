const { editPatient } = require("./editPatient");
const { loginPatient } = require("./loginPatient");
const { createPatient } = require("./registerPatient");
const { deletePatient } = require("./deletePatient");
const { getPatient } = require("./getPatient");
const { changePasswordPatient } = require("./changePasswordPatient");

module.exports = {
  editPatient,
  loginPatient,
  createPatient,
  deletePatient,
  getPatient,
  changePasswordPatient
};
