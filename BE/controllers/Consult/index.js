const { editConsult } = require("./editConsult");
const { createConsult } = require("./registerConsult");
const { deleteConsult } = require("./deleteConsult");
const { getConsult } = require("./getConsult");

module.exports = {
  editConsult,
  createConsult,
  deleteConsult,
  getConsult
};
