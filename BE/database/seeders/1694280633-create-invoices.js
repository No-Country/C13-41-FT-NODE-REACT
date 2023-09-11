"use strict";

const { Medic, Patient, Service } = require('../models');
const { uuid } = require('uuidv4');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let invoices = [];
    const medics = await Medic.findAll();
    const patients = await Patient.findAll();
    const statusInvoices = ['preAccepted', 'accepted', 'canceled']
    const platformsInvoice = ['Stripe','Paypal']
    for (const medic of medics) {
      const services = await Service.findAll({ where: { medicId: medic.id } });
      for (const service of services) {
        for (let i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
          invoices.push({
            id: uuid(),
            medicId: medic.id,
            patientId: patients[Math.floor(Math.random() * patients.length)].id,
            serviceId: service.id,
            status:statusInvoices[Math.floor(Math.random() * statusInvoices.length)],
            platform:platformsInvoice[Math.floor(Math.random() * platformsInvoice.length)],
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
    }

    return await queryInterface.bulkInsert('Invoices', invoices);
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Invoices', null, {});
  },
};
