"use strict";
const bcrypt = require("bcrypt");
const crypto = require('node:crypto');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const hashedPwd = await bcrypt.hash("1234", 10);
    return await queryInterface.bulkInsert("Medics", [
      {
        id: crypto.randomUUID(),
        fullname: "David Giraldo",
        password: hashedPwd,
        email: "example@example.com",
        country: "Colombia",
        gender: "male",
        birthdate: new Date(),
        nid: "123456789",
        profesionalid: "123456789",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Medics", null, {});
  },
};
