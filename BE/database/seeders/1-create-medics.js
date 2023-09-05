"use strict";
const bcrypt = require("bcrypt");
const crypto = require('node:crypto');
const {faker} = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPwd = await bcrypt.hash("12345", 10);
    let medics = []
    for (let i = 0; i < 40; i++) {
      medics.push({
        id: crypto.randomUUID(),
        fullname: faker.person.fullName(),
        password: hashedPwd,
        resume: faker.person.bio(),
        email: faker.internet.email(),
        country: faker.location.country(),
        gender: "male",
        phone: faker.phone.number('#########'),
        birthdate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        nid: faker.number.int({ min: 1000000000, max: 9999999999 }),
        profesionalid: faker.number.int({ min: 1000000000, max: 9999999999 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    return await queryInterface.bulkInsert("Medics", medics);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Medics", null, {});
  },
};
