'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Patient, {foreignKey: 'patientId', onDelete: 'CASCADE'})
      Comment.belongsTo(models.Medic, {foreignKey: 'medicId', onDelete: 'CASCADE'})
    }
  }
  Comment.init({
    description: {
      type: DataTypes.TEXT
    },
    patientId: {
      type: DataTypes.UUID
    },
    medicId: {
      type: DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};