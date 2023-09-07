'use strict';
const {
  Model
} = require('sequelize');
const { uuid } = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Medic extends Model {
    static associate(models) {
      Medic.hasMany(models.Schedule, {
        foreignKey: 'medicId', // This is the foreign key in the Schedule table that links to the Medic table
        as: 'schedules', // This sets an alias for the association
      });
      Medic.belongsToMany(models.Specialty, {
        through: 'MedicSpecialty', // This is the name of the intermediary table
        foreignKey: 'medicId',
        otherKey: 'specialtyId',
        as: 'specialties', // This sets an alias for the association
      })
      Medic.hasOne(models.VacationDate, {
        foreignKey: 'medicId', // This is the foreign key in the VacationDate table that links to the Medic table
        as: 'vacationDate', // This sets an alias for the association
      });
      Medic.hasMany(models.Comment,{foreignKey: 'medicId', as: 'comments'})
      Medic.hasMany(models.SocialNetwork,{foreignKey: 'medicId', as: 'socialnetworks'})
      Medic.hasMany(models.Consult,{foreignKey: 'medicId', as: 'consults'})
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
    phone:{
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