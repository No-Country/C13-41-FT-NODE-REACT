'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
        // Define a one-to-one association where each Schedule belongs to one Medic
        Schedule.belongsTo(models.Medic, {
          foreignKey: 'medicId', // This is the foreign key in the Schedule table that links to the Medic table
          onDelete: 'CASCADE', // This ensures that if a Medic is deleted, their associated Schedules are also deleted
        });
    }
  }
  Schedule.init({
    day: {
      type: DataTypes.ENUM("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"),
      allowNull: false,
    },
    initialHour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    finalHour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER
    },
    medicId: {
      type: DataTypes.UUID, // Use UUID data type
      allowNull: false,
      references: {
        model: 'Medics', // This should match the actual table name for the Medic model
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Schedule',
  })
  return Schedule;
};