'use strict';
const {
  Model
} = require('sequelize');
const { uuid } = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {

      Service.belongsTo(models.Specialty, {
        foreignKey: 'specialtyId',
        onDelete: 'CASCADE', 
      });
    }
  }
  Service.init({
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    medicId: {
      type: DataTypes.UUID, 
      allowNull: false,
      references: {
        model: 'Medic',
        key: 'medicId',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    specialtyId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: 'MedicSpecialty',
        key: 'specialtyId',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Service',
  })
  Service.addHook('beforeSave', async (service) => {
    return service.id = uuid();
  });
  return Service;
};