const { Sequelize, DataTypes } = require("sequelize");

const Card = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  card_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  holder_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  exp_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = Card;
