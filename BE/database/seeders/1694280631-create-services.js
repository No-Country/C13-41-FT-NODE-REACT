"use strict";
const {faker} = require('@faker-js/faker')
const { Medic,Specialty } = require('../models');
const { uuid} = require("uuidv4")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const services = [];
    const medics = await Medic.findAll()
    const specialties = await Specialty.findAll()

    for (const medic of medics) {
      for(let i = 0; i < 2; i++)
      {
        services.push({
          id:uuid(),
          description: faker.lorem.sentence(),
          price: Math.floor(Math.random() * 500) + 10,
          medicId: medic.id,
          specialtyId: specialties[Math.floor(Math.random() * specialties.length)].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }
    return await queryInterface.bulkInsert("Services", services);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Services", null, {});
  },
};
