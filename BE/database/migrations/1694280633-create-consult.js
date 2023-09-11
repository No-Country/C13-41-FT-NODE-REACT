'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Consults', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      diagnostic: {
        type: Sequelize.TEXT
      },
      recipe: {
        type: Sequelize.TEXT
      },
      consultTimestamp: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('programmed', 'finished', 'active', 'canceled'),
        allowNull: false
      },
      resume: {
        type: Sequelize.TEXT,
      },
      urlFile: {
        type: Sequelize.TEXT
      },
      initialHour:{
        type:Sequelize.STRING
      },
      finalHour:{
        type:Sequelize.STRING
      },
      medicId: {
        type: Sequelize.UUID, 
        allowNull: false,
        references: {
          model: 'Medics', 
          key: 'id',
        }
      },
      patientId: {
        type: Sequelize.UUID, 
        allowNull: false,
        references: {
          model: 'Patients', 
          key: 'id',
        }
      },
      scheduleId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'Schedules', 
          key: 'id',
        }
      },
       serviceId: {
        type: Sequelize.UUID, 
        allowNull: false,
        references: {
          model: 'Services', 
          key: 'id',
        }
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
    await queryInterface.dropTable('Consults');
  }
};