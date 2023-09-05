"use strict";

const { Specialty, Medic } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const medics = await Medic.findAll()
    const specialties = await Specialty.findAll()
    let medicSpecialties = []


    for (let i = 0; i < medics.length; i++) {
      let specialtyId = specialties[Math.floor(Math.random() * specialties.length)].id
      medicSpecialties.push({
        medicId: medics[i].id,
        specialtyId,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }


    return await queryInterface.bulkInsert("MedicSpecialties", medicSpecialties);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("MedicSpecialties", null, {});
  },
};
