"use strict";
const {faker} = require('@faker-js/faker')
const { Medic,Specialty } = require('../models');
const { uuid} = require("uuidv4")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const services = [];
    const medicos = await Medic.findAll()
    const specialties = await Specialty.findAll()
    for (let i = 0; i < 10; i++) {
      services.push({
        id:uuid(),
        description: faker.lorem.sentence(),
        price: Math.floor(Math.random() * 500) + 10,
        medicId: medicos[Math.floor(Math.random() * medicos.length)].id,
        specialtyId: specialties[Math.floor(Math.random() * specialties.length)].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    return await queryInterface.bulkInsert("Services", services);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Services", null, {});
  },
};
