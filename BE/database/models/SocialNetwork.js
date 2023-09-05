'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialNetwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SocialNetwork.belongsTo(models.Medic, {foreignKey: 'medicId', onDelete: 'CASCADE'})
    }
  }
  SocialNetwork.init({
    medicId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    link: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'SocialNetwork',
  });
  return SocialNetwork;
};