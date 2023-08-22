
const { DataTypes } = require('sequelize')

const Patient = sequelize.define('Patient', {

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
  }, {
  tableName: 'Patient'
});

module.exports = Patient