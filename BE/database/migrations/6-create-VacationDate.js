'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VacationDates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      days: {
        type: Sequelize.ARRAY(Sequelize.DATE),
      },
      medicId: {
        type: Sequelize.UUID,
        references: {
          model: 'Medics', // This should match the actual table name for the Medic model
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('VacationDates');
  },
};
