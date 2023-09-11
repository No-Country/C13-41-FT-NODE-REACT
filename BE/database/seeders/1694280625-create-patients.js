"use strict";
const bcrypt = require("bcrypt");
const { uuid} = require("uuidv4")
const {faker} = require('@faker-js/faker')
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
    let patients = []
    for (let i = 0; i < 40; i++) {
      patients.push({
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
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    patients.push({
      id: uuid(),
      fullname: faker.person.fullName(),
      password: await bcrypt.hash('012345689',10),
      resume: faker.person.bio(),
      email: 'test@test.com',
      country: faker.location.country(),
      gender: genders[Math.floor(Math.random() * genders.length)],
      phone: faker.phone.number('#########'),
      birthdate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
      nid: faker.number.int({ min: 1000000000, max: 9999999999 }),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return await queryInterface.bulkInsert("Patients", patients);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Patients", null, {});
  },
};
