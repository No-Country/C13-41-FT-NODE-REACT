'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
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
        type: Sequelize.BIGINT,
        allowNull: false,
        references: { model: 'Services', key: 'id'}
      },
      urlFile: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('preAccepted', 'accepted', 'canceled')
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