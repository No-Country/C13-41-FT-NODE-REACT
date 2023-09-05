'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      Specialty.belongsToMany(models.Medic, {
        through: 'MedicSpecialty', // Name of the junction table
        foreignKey: 'specialtyId',
        otherKey: 'medicId',
        as: 'medics', // This sets an alias for the association
      });
    }
  }
  Specialty.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};