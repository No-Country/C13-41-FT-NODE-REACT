"use strict";
const bcrypt = require("bcrypt");
const { uuid } = require("uuidv4")
const { faker } = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPwd = await bcrypt.hash(
      faker.internet.password(
        {
          length: 10,
          memorable: true,
          pattern: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&_-])[A-Za-z\d@$!%?&_-]{8,}$/
        }),
      10);
    const genders = ["male", "female", "other"]
    let medics = []
    for (let i = 0; i < 40; i++) {
      medics.push({
        id: uuid(),
        fullname: faker.person.fullName(),
        password: hashedPwd,
        resume: faker.person.bio(),
        email: faker.internet.email(),
        country: faker.location.country(),
        gender: genders[Math.floor(Math.random() * genders.length)],
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
