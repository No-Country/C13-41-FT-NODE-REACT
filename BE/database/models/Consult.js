'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Consult.belongsTo(models.Medic, {
        foreignKey: 'medicId', // This is the foreign key in the Schedule table that links to the Medic table
        onDelete: 'CASCADE', // This ensures that if a Medic is deleted, their associated Schedules are also deleted
      });
      Consult.belongsTo(models.Patient, {
        foreignKey: 'patientId', // This is the foreign key in the Schedule table that links to the Medic table
        onDelete: 'CASCADE', // This ensures that if a Medic is deleted, their associated Schedules are also deleted
      });
      Consult.belongsTo(models.Schedule, {
        foreignKey: 'scheduleId', // This is the foreign key in the Schedule table that links to the Medic table
        onDelete: 'CASCADE', // This ensures that if a Medic is deleted, their associated Schedules are also deleted
      });
    }
  }
  Consult.init({
    diagnostic: {
      type: DataTypes.TEXT
    },
    recipe: {
      type: DataTypes.TEXT
    },
    consultTimestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('programmed', 'finished', 'active', 'canceled'),
      allowNull: false
    },
    resume: {
      type: DataTypes.TEXT
    },
    urlFile: {
      type: DataTypes.TEXT
    },
    initialHour:{
      type:DataTypes.STRING
    },
    finalHour:{
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Consult',
  });
  return Consult;
};