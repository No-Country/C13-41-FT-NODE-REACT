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
      // define association here
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
  }, {
    sequelize,
    modelName: 'Consult',
  });
  return Consult;
};