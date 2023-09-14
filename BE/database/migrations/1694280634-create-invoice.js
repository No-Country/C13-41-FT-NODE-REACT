'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      patientId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Patients', key: 'id'}
      },
      medicId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Medics', key: 'id'}
      },
      serviceId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'Services', key: 'id'}
      },
      urlFile: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('preAccepted', 'accepted', 'canceled')
      },
      platform: {
        type: Sequelize.ENUM('Stripe','Paypal')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Invoices');
  }
};