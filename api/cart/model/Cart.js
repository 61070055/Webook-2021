const { Sequelize, DataTypes } = require("sequelize");

const Cart = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
};
module.exports = Cart;
