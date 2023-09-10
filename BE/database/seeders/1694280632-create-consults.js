"use strict";
const { Service,Medic,Patient,Schedule } = require('../models');
const {faker} = require('@faker-js/faker')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    let consults = [];
    const status = ['programmed', 'finished', 'active', 'canceled']
    const services = await Service.findAll()
    const medics = await Medic.findAll()
    const patients = await Patient.findAll()

    for (let i = 0; i < services.length; i++) {
      const serviceId = services[i].id;
      const medicId = medics[Math.floor(Math.random() * medics.length)].id
      const schedules = await Schedule.findAll({where:{medicId}})
      for (let j = 0; j < Math.floor(Math.random() * 5) + 1; j++) {
        consults.push({
          diagnostic: faker.lorem.sentence(),
          recipe: faker.lorem.paragraph(),
          consultTimestamp: faker.date.past(),
          status: status[Math.floor(Math.random() * status.length)] ,
          serviceId,
          medicId,
          patientId:patients[Math.floor(Math.random() * patients.length)].id,
          scheduleId: schedules[Math.floor(Math.random() * schedules.length)].id,
          createdAt: new Date(),
          updatedAt: new Date(),
       });
      }
    }
    return await queryInterface.bulkInsert("Consults", consults);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Consults", null, {});
  },
};
