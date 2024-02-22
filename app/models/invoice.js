const { DataTypes } = require('sequelize');
const db = require('../../database');

const Invoice = db.define('Invoice', {
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isPaid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Invoice;