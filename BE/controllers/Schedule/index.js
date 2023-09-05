const { editSpecialty } = require("./editSchedule");
const { createSchedule } = require("./createSchedule");
const { deleteSpecialty } = require("./deleteSchedule");
const { getSchedule } = require("./getSchedule");

module.exports = {
  editSpecialty,
  createSchedule,
  deleteSpecialty,
  getSchedule
};