'use strict';
const {
  Model
} = require('sequelize');
const { uuid } = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Medic extends Model {
    static associate(models) {
      Medic.hasMany(models.Invoice, {
        foreignKey: 'medicId',
        as: 'invoices',
      });
      Medic.hasMany(models.Service, {
        foreignKey: 'medicId',
        as: 'services',
      });
      Medic.hasMany(models.Schedule, {
        foreignKey: 'medicId',
        as: 'schedules',
      });
      Medic.belongsToMany(models.Specialty, {
        through: 'MedicSpecialty',
        foreignKey: 'medicId',
        otherKey: 'specialtyId',
        as: 'specialties',
      })
      Medic.hasOne(models.VacationDate, {
        foreignKey: 'medicId',
        as: 'vacationDate',
      });
      Medic.hasMany(models.Comment, { foreignKey: 'medicId', as: 'comments' })
      Medic.hasMany(models.SocialNetwork, { foreignKey: 'medicId', as: 'socialnetworks' })
      Medic.hasMany(models.Consult, { foreignKey: 'medicId', as: 'consults' })
    }
  }
  Medic.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    avatar: {
      type: DataTypes.TEXT
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
    gender: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: false
    },
    profesionalid: {
      type: DataTypes.BIGINT,
    },
    nid: {
      type: DataTypes.BIGINT
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT
    }
  }, {
    sequelize,
    modelName: 'Medic',
  });
  Medic.addHook('beforeSave', async (medic) => {
    return medic.id = uuid();
  });
  return Medic;
};