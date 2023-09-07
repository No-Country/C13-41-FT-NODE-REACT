'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicSpecialty extends Model {
    static associate(models) {
      MedicSpecialty.belongsTo(models.Service, {foreignKey: 'specialtyId', onDelete: 'CASCADE'})
    }
  }
  MedicSpecialty.init({
    medicId: DataTypes.UUID,
    specialtyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MedicSpecialty',
  });
  return MedicSpecialty;
};