'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VacationDate extends Model {
    static associate(models) {
      VacationDate.belongsTo(models.Medic, {
        foreignKey: 'medicId', // This is the foreign key in the VacationDate table that links to the Medic table
      });
    }
  }
  VacationDate.init({
    days: {
      type: DataTypes.ARRAY(DataTypes.DATE)
    },
    medicId: {
      type: DataTypes.UUID,
      references: {
        model: 'Medics', // This should match the actual table name for the Medic model
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'VacationDate',
  })
  return VacationDate;
};