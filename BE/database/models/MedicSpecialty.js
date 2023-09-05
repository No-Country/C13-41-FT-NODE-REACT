'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicSpecialty extends Model {
    static associate(models) {
    }
  }
  MedicSpecialty.init({
    medicId: DataTypes.UUID,
    specialtyId: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'MedicSpecialty',
  });
  return MedicSpecialty;
};