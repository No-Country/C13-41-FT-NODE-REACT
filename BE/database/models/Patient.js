'use strict';
const {
  Model
} = require('sequelize');
const { uuid} = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.hasMany(models.Comment,{foreignKey: 'patientId', as: 'comments'})
    }
  }
  Patient.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nid: {
      type: DataTypes.BIGINT
    },
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    resume: {
      type: DataTypes.TEXT,
    },
    phone:{
      type: DataTypes.BIGINT
    }
  }, {
    sequelize,
    modelName: 'Patient',
  }),
  Patient.addHook('beforeSave', async (patient) => {
    return patient.id = uuid();
  });
  return Patient;
};