'use strict';
const {
  Model
} = require('sequelize');
const { uuid } = require("uuidv4")
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    static associate(models) {
      Invoice.belongsTo(models.Service, {
        foreignKey: 'serviceId', // This is the foreign key in the Invoice table that links to the Medic table
      });
    }
  }
  Invoice.init({
    patientId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Patients', // This should match the actual table name for the Medic model
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    medicId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Medics', // This should match the actual table name for the Medic model
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    serviceId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Services', // This should match the actual table name for the Medic model
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    urlFile: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM('preAccepted', 'accepted', 'canceled')
    },
    platform: {
      type: DataTypes.ENUM('Stripe','Paypal')
    }
  }, {
    sequelize,
    modelName: 'Invoice',
  })
  Invoice.addHook('beforeSave', async (invoice) => {
    return invoice.id = uuid();
  });
  return Invoice;
};